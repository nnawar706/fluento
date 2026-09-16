import asyncio
import os
from pathlib import Path

from dotenv import load_dotenv

# Stream keys live in the parent Expo project's .env; load them first.
# Then overlay the local .env which adds OPENAI_API_KEY.
load_dotenv(Path(__file__).parent.parent / ".env")
load_dotenv(Path(__file__).parent / ".env", override=False)

from vision_agents.core import Agent, AgentLauncher, Runner, User  # noqa: E402
from vision_agents.plugins import gemini, getstream  # noqa: E402

# Agent identity visible to other call participants
_AGENT_USER = User(name="Fluento Teacher", id="fluento-teacher")


async def create_agent(**kwargs) -> Agent:
    """Factory called once per agent instance."""
    return Agent(
        edge=getstream.Edge(),
        agent_user=_AGENT_USER,
        instructions="@system.md",
        llm=gemini.Realtime(),
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
    """Build a lesson-specific kickoff prompt from the call's custom data."""
    lesson_title = custom.get("lessonTitle", "")
    language = custom.get("language", "")
    vocabulary: list = custom.get("vocabulary") or []
    phrases: list = custom.get("phrases") or []
    goals: list = custom.get("goals") or []

    if not (lesson_title and language):
        return (
            "Welcome the student with one warm, friendly sentence, introduce yourself as their Fluento AI language teacher, "
            "and ask which language they'd like to practice today. Keep it short and energetic."
        )

    vocab_summary = ", ".join(
        f"{v['word']} ({v.get('pronunciation', '')}) = {v['translation']}"
        for v in vocabulary[:6]
    )
    phrase_summary = "; ".join(
        f"'{p['phrase']}' ({p.get('pronunciation', '')}) = '{p['translation']}'"
        for p in phrases[:3]
    )
    goals_summary = ", ".join(goals)

    first_word = vocabulary[0] if vocabulary else None
    first_intro = (
        f"Then immediately say the first word: {first_word['word']} "
        f"({first_word.get('pronunciation', '')}) — meaning '{first_word['translation']}' — "
        f"and invite the student to say it back."
        if first_word
        else "Then introduce the first concept from this lesson."
    )

    return (
        f"Open with one warm, energetic sentence welcoming the student to today's '{lesson_title}' lesson in {language}. "
        f"{first_intro} "
        f"Keep your entire opening to two sentences — no listing, no overview, just the welcome and the first word. "
        f"Teach ONLY the words and phrases from this lesson. Do not bring in unrelated topics or other languages. "
        f"Vocabulary to cover one at a time: {vocab_summary}. "
        f"Phrases to cover one at a time: {phrase_summary}. "
        f"Lesson goals for context: {goals_summary}."
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
