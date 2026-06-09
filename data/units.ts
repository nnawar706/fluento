import type { Unit } from '@/types/learning';

export const units: Unit[] = [
  // ─── Bengali ─────────────────────────────────────────────────────────────
  {
    id: 'unit-bn-1',
    languageCode: 'bn',
    title: 'Greetings & Basics',
    description: 'Learn to say hello, goodbye, and introduce yourself in Bengali.',
    order: 1,
    lessonIds: ['lesson-bn-1-1', 'lesson-bn-1-2'],
  },

  // ─── Spanish ─────────────────────────────────────────────────────────────
  {
    id: 'unit-es-1',
    languageCode: 'es',
    title: 'Saludos y Básicos',
    description: 'Learn to greet people and introduce yourself in Spanish.',
    order: 1,
    lessonIds: ['lesson-es-1-1', 'lesson-es-1-2'],
  },

  // ─── French ──────────────────────────────────────────────────────────────
  {
    id: 'unit-fr-1',
    languageCode: 'fr',
    title: 'Salutations & Bases',
    description: 'Learn to greet people and introduce yourself in French.',
    order: 1,
    lessonIds: ['lesson-fr-1-1', 'lesson-fr-1-2'],
  },

  // ─── Japanese ────────────────────────────────────────────────────────────
  {
    id: 'unit-ja-1',
    languageCode: 'ja',
    title: 'あいさつ（Greetings）',
    description: 'Learn essential Japanese greetings and polite expressions.',
    order: 1,
    lessonIds: ['lesson-ja-1-1', 'lesson-ja-1-2'],
  },
];

export function getUnitsByLanguage(languageCode: string): Unit[] {
  return units
    .filter((u) => u.languageCode === languageCode)
    .sort((a, b) => a.order - b.order);
}

export function getUnitById(id: string): Unit | undefined {
  return units.find((u) => u.id === id);
}
