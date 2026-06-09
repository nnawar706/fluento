import type { Language } from '@/types/learning';

export const languages: Language[] = [
  {
    id: 'lang-es',
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: 'https://flagcdn.com/w320/es.png',
    isAvailable: true,
    learners: '28.4M',
  },
  {
    id: 'lang-fr',
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: 'https://flagcdn.com/w320/fr.png',
    isAvailable: true,
    learners: '19.4M',
  },
  {
    id: 'lang-ja',
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flag: 'https://flagcdn.com/w320/jp.png',
    isAvailable: true,
    learners: '12.7M',
  },
  {
    id: 'lang-bn',
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    flag: 'https://flagcdn.com/w320/bd.png',
    isAvailable: true,
    learners: '5.2M',
  },
];

export function getLanguageByCode(code: string): Language | undefined {
  return languages.find((l) => l.code === code);
}
