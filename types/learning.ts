export type LanguageCode = 'bn' | 'es' | 'fr' | 'ja';

export interface Language {
  id: string;
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  isAvailable: boolean;
  learners?: string;
}

// ─── Vocabulary & Phrases ────────────────────────────────────────────────────

export interface VocabularyItem {
  word: string;
  translation: string;
  pronunciation: string;
  example?: string;
  examplePronunciation?: string;
  exampleTranslation?: string;
}

export interface Phrase {
  phrase: string;
  translation: string;
  pronunciation: string;
  context?: string;
}

// ─── Activities (discriminated union) ────────────────────────────────────────

export interface MultipleChoiceActivity {
  type: 'multiple_choice';
  question: string;
  options: string[];
  correctIndex: number;
}

export interface TranslateActivity {
  type: 'translate';
  prompt: string;
  targetLanguage: 'native' | 'english';
  answer: string;
  hint?: string;
}

export interface MatchPairsActivity {
  type: 'match_pairs';
  pairs: Array<{ left: string; leftPronunciation?: string; right: string }>;
}

export interface ListenSelectActivity {
  type: 'listen_select';
  audioText: string;
  options: string[];
  correctIndex: number;
}

export interface FillBlankActivity {
  type: 'fill_blank';
  sentence: string;
  answer: string;
  hint?: string;
}

export type Activity =
  | MultipleChoiceActivity
  | TranslateActivity
  | MatchPairsActivity
  | ListenSelectActivity
  | FillBlankActivity;

// ─── Lesson ──────────────────────────────────────────────────────────────────

export interface LessonGoal {
  description: string;
}

export interface AITeacherPrompt {
  systemPrompt: string;
  topic: string;
  teachingPoints: string[];
  exampleDialogue?: string;
}

export interface Lesson {
  id: string;
  unitId: string;
  languageCode: LanguageCode;
  title: string;
  description: string;
  xpReward: number;
  goals: LessonGoal[];
  vocabulary: VocabularyItem[];
  phrases: Phrase[];
  activities: Activity[];
  aiTeacherPrompt: AITeacherPrompt;
}

// ─── Unit ────────────────────────────────────────────────────────────────────

export interface Unit {
  id: string;
  languageCode: LanguageCode;
  title: string;
  description: string;
  order: number;
  lessonIds: string[];
}
