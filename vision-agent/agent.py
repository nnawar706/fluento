import asyncio
import os
from pathlib import Path

from dotenv import load_dotenv

# Stream keys live in the parent Expo project's .env; load them first.
# Then overlay the local .env which adds OPENAI_API_KEY.
load_dotenv(Path(__file__).parent.parent / ".env")
load_dotenv(Path(__file__).parent / ".env", override=False)

from vision_agents.core import Agent, AgentLauncher, Runner, User  # noqa: E402
from vision_agents.plugins import getstream, openai  # noqa: E402

# Agent identity visible to other call participants
_AGENT_USER = User(name="Fluento Teacher", id="fluento-teacher")


async def create_agent(**kwargs) -> Agent:
    """Factory called once per agent instance."""
    return Agent(
        edge=getstream.Edge(),
        agent_user=_AGENT_USER,
        instructions="@system.md",
        llm=openai.Realtime(voice="alloy"),
    )


def _fetch_call_custom(call_type: str, call_id: str) -> dict:
    """Fetch the call's custom data from Stream (synchronous, run in executor)."""
    try:
        from getstream import Stream as StreamSDK

        client = StreamSDK(
            api_key=os.environ["STREAM_API_KEY"],
            api_secret=os.environ["STREAM_API_SECRET"],
        )
        response = client.video.get_call(type=call_type, id=call_id)
        return response.data.call.custom or {}
    except Exception as exc:
        print(f"[agent] Could not fetch call custom data: {exc}")
        return {}


def _build_greeting_prompt(custom: dict) -> str:
    """Build a lesson-specific greeting prompt from the call's custom data."""
    lesson_title = custom.get("lessonTitle", "")
    language = custom.get("language", "")
    ai_prompt = custom.get("aiTeacherPrompt") or {}
    teaching_points: list = ai_prompt.get("teachingPoints") or []
    goals: list = custom.get("goals") or []
    vocabulary: list = custom.get("vocabulary") or []
    phrases: list = custom.get("phrases") or []

    if not (lesson_title and language):
        return (
            "Greet the student warmly, introduce yourself as Fluento their AI language teacher, "
            "and ask which language they would like to practice today."
        )

    vocab_summary = ", ".join(
        f"{v['word']} ({v.get('pronunciation', '')}) = {v['translation']}"
        for v in vocabulary[:5]
    )
    phrase_summary = "; ".join(
        f"'{p['phrase']}' means '{p['translation']}'"
        for p in phrases[:3]
    )
    goals_summary = ", ".join(goals)
    points_summary = "; ".join(teaching_points)

    return (
        f"Greet the student warmly and start today's {language} lesson. "
        f"The topic is: '{lesson_title}'. "
        f"The student's goals are: {goals_summary}. "
        f"Key vocabulary to teach: {vocab_summary}. "
        f"Key phrases: {phrase_summary}. "
        f"Teaching points: {points_summary}. "
        f"Begin with a warm welcome, state the topic, then introduce the first vocabulary word."
    )


async def join_call(
    agent: Agent, call_type: str, call_id: str, **kwargs
) -> None:
    """Called by the framework each time the agent should join a call."""
    call = await agent.create_call(call_type, call_id)

    # Fetch lesson context packed into the call's custom data by the Expo API route
    loop = asyncio.get_event_loop()
    custom = await loop.run_in_executor(None, _fetch_call_custom, call_type, call_id)
    greeting_prompt = _build_greeting_prompt(custom)

    async with agent.join(call):
        await agent.simple_response(greeting_prompt)
        await agent.finish()


if __name__ == "__main__":
    Runner(AgentLauncher(create_agent=create_agent, join_call=join_call)).cli()
