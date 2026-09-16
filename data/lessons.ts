import type { Lesson } from '@/types/learning';

export const lessons: Lesson[] = [

  // ═══════════════════════════════════════════════════════════════════════════
  // BENGALI
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'lesson-bn-1-1',
    unitId: 'unit-bn-1',
    languageCode: 'bn',
    title: 'Hello & Goodbye',
    description: 'Learn how to greet people and say goodbye in Bengali.',
    xpReward: 10,
    goals: [
      { description: 'Say hello and goodbye in Bengali' },
      { description: 'Understand basic greetings when you hear them' },
    ],
    vocabulary: [
      {
        word: 'হ্যালো',
        translation: 'Hello',
        pronunciation: 'Hyalo',
        example: 'হ্যালো, আপনি কেমন আছেন?',
        examplePronunciation: 'Hyalo, apni kemon achen?',
        exampleTranslation: 'Hello, how are you?',
      },
      {
        word: 'আলবিদা',
        translation: 'Goodbye',
        pronunciation: 'Albida',
        example: 'আলবিদা, পরে দেখা হবে।',
        examplePronunciation: 'Albida, pore dekha hobe.',
        exampleTranslation: 'Goodbye, see you later.',
      },
      {
        word: 'হ্যাঁ',
        translation: 'Yes',
        pronunciation: 'Hya',
      },
      {
        word: 'না',
        translation: 'No',
        pronunciation: 'Na',
      },
      {
        word: 'ধন্যবাদ',
        translation: 'Thank you',
        pronunciation: 'Dhonnyobad',
      },
    ],
    phrases: [
      {
        phrase: 'আপনি কেমন আছেন?',
        translation: 'How are you?',
        pronunciation: 'Apni kemon achen?',
        context: 'Formal — use with elders or strangers',
      },
      {
        phrase: 'ভালো আছি, ধন্যবাদ।',
        translation: 'I am fine, thank you.',
        pronunciation: 'Bhalo achi, dhonnyobad.',
      },
      {
        phrase: 'আবার দেখা হবে।',
        translation: 'See you again.',
        pronunciation: 'Abar dekha hobe.',
      },
    ],
    activities: [
      {
        type: 'multiple_choice',
        question: 'What does "হ্যালো" mean?',
        options: ['Goodbye', 'Hello', 'Thank you', 'Yes'],
        correctIndex: 1,
      },
      {
        type: 'translate',
        prompt: 'Translate: Thank you',
        targetLanguage: 'native',
        answer: 'ধন্যবাদ',
        hint: 'Dhonnyobad',
      },
      {
        type: 'match_pairs',
        pairs: [
          { left: 'হ্যালো', leftPronunciation: 'Hyalo', right: 'Hello' },
          { left: 'আলবিদা', leftPronunciation: 'Albida', right: 'Goodbye' },
          { left: 'ধন্যবাদ', leftPronunciation: 'Dhonnyobad', right: 'Thank you' },
          { left: 'হ্যাঁ', leftPronunciation: 'Hya', right: 'Yes' },
        ],
      },
      {
        type: 'listen_select',
        audioText: 'ধন্যবাদ',
        options: ['Hello', 'Goodbye', 'Thank you', 'No'],
        correctIndex: 2,
      },
    ],
    aiTeacherPrompt: {
      topic: 'Bengali Greetings — Hello & Goodbye',
      systemPrompt:
        'You\'re teaching only this lesson: Bengali greetings. ' +
        'Your words are হ্যালো (Hyalo) = Hello, আলবিদা (Albida) = Goodbye, ধন্যবাদ (Dhonnyobad) = Thank you, হ্যাঁ (Hya) = Yes, and না (Na) = No. ' +
        'Introduce each word one at a time — say it, give the pronunciation, explain its meaning, use it in a short natural sentence, then ask the student to say it back. ' +
        'Don\'t wander outside these words and phrases.',
      teachingPoints: [
        'হ্যালো (Hyalo) means Hello',
        'আলবিদা (Albida) means Goodbye',
        'ধন্যবাদ (Dhonnyobad) means Thank you',
        'হ্যাঁ (Hya) means Yes, না (Na) means No',
      ],
      exampleDialogue:
        'Teacher: হ্যালো! (Hyalo!) আপনি কেমন আছেন? (Apni kemon achen?)\nStudent: ভালো আছি, ধন্যবাদ। (Bhalo achi, dhonnyobad.)\nTeacher: আলবিদা! (Albida!)\nStudent: আলবিদা! (Albida!)',
    },
  },

  {
    id: 'lesson-bn-1-2',
    unitId: 'unit-bn-1',
    languageCode: 'bn',
    title: 'Introducing Yourself',
    description: 'Learn how to tell people your name and ask for theirs.',
    xpReward: 10,
    goals: [
      { description: 'Say your name in Bengali' },
      { description: 'Ask someone their name politely' },
    ],
    vocabulary: [
      {
        word: 'নাম',
        translation: 'Name',
        pronunciation: 'Nam',
        example: 'আমার নাম রাহেলা।',
        examplePronunciation: 'Amar nam Rahela.',
        exampleTranslation: 'My name is Rahela.',
      },
      {
        word: 'আমি',
        translation: 'I / Me',
        pronunciation: 'Ami',
      },
      {
        word: 'আপনি',
        translation: 'You (formal)',
        pronunciation: 'Apni',
      },
      {
        word: 'কি',
        translation: 'What',
        pronunciation: 'Ki',
      },
    ],
    phrases: [
      {
        phrase: 'আমার নাম ___।',
        translation: 'My name is ___.',
        pronunciation: 'Amar nam ___.',
        context: 'Fill in your own name',
      },
      {
        phrase: 'আপনার নাম কি?',
        translation: 'What is your name?',
        pronunciation: 'Apnar nam ki?',
        context: 'Formal — asking someone\'s name politely',
      },
      {
        phrase: 'আপনার সাথে পরিচিত হয়ে ভালো লাগলো।',
        translation: 'Nice to meet you.',
        pronunciation: 'Apnar shathe porichito hoye bhalo laglo.',
      },
    ],
    activities: [
      {
        type: 'multiple_choice',
        question: 'How do you say "My name is" in Bengali?',
        options: ['আপনার নাম (Apnar nam)', 'আমার নাম (Amar nam)', 'তোমার নাম (Tomar nam)', 'নাম কি (Nam ki)'],
        correctIndex: 1,
      },
      {
        type: 'fill_blank',
        sentence: '___ নাম কি? (Nam ki?)',
        answer: 'আপনার',
        hint: 'Apnar — the formal word for "your"',
      },
      {
        type: 'translate',
        prompt: 'Translate: What is your name?',
        targetLanguage: 'native',
        answer: 'আপনার নাম কি?',
        hint: 'Apnar nam ki?',
      },
      {
        type: 'match_pairs',
        pairs: [
          { left: 'আমি', leftPronunciation: 'Ami', right: 'I / Me' },
          { left: 'আপনি', leftPronunciation: 'Apni', right: 'You (formal)' },
          { left: 'নাম', leftPronunciation: 'Nam', right: 'Name' },
          { left: 'কি', leftPronunciation: 'Ki', right: 'What' },
        ],
      },
    ],
    aiTeacherPrompt: {
      topic: 'Bengali Introductions — Saying Your Name',
      systemPrompt:
        'You\'re teaching only this lesson: how to say your name and ask for someone\'s name in Bengali. ' +
        'The key phrases are "আমার নাম ___" (Amar nam ___) = My name is, and "আপনার নাম কি?" (Apnar nam ki?) = What is your name? ' +
        'Teach naturally — ask the student their name, have them practice saying "আমার নাম ___", then close with the nice-to-meet-you phrase. ' +
        'Stay strictly within this lesson\'s vocabulary and phrases.',
      teachingPoints: [
        '"আমার নাম ___" (Amar nam ___) means "My name is ___"',
        '"আপনার নাম কি?" (Apnar nam ki?) means "What is your name?" (formal)',
        '"আমি" (Ami) means I, "আপনি" (Apni) means you (formal)',
      ],
      exampleDialogue:
        'Teacher: আমার নাম রাহেলা। (Amar nam Rahela.) আপনার নাম কি? (Apnar nam ki?)\nStudent: আমার নাম [name]। (Amar nam [name].)\nTeacher: আপনার সাথে পরিচিত হয়ে ভালো লাগলো! (Apnar shathe porichito hoye bhalo laglo!)',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SPANISH
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'lesson-es-1-1',
    unitId: 'unit-es-1',
    languageCode: 'es',
    title: 'Hello & Goodbye',
    description: 'Learn essential Spanish greetings to start every conversation.',
    xpReward: 10,
    goals: [
      { description: 'Greet people in Spanish at different times of day' },
      { description: 'Say goodbye in a natural way' },
    ],
    vocabulary: [
      {
        word: 'Hola',
        translation: 'Hello',
        pronunciation: 'OH-lah',
        example: '¡Hola! ¿Cómo estás?',
        exampleTranslation: 'Hello! How are you?',
      },
      {
        word: 'Adiós',
        translation: 'Goodbye',
        pronunciation: 'ah-DYOS',
      },
      {
        word: 'Buenos días',
        translation: 'Good morning',
        pronunciation: 'BWEH-nos DEE-as',
      },
      {
        word: 'Buenas noches',
        translation: 'Good night',
        pronunciation: 'BWEH-nas NOH-ches',
      },
      {
        word: 'Gracias',
        translation: 'Thank you',
        pronunciation: 'GRAH-syahs',
      },
      {
        word: 'Por favor',
        translation: 'Please',
        pronunciation: 'por fah-VOR',
      },
    ],
    phrases: [
      {
        phrase: '¿Cómo estás?',
        translation: 'How are you?',
        pronunciation: 'KOH-mo es-TAS',
        context: 'Informal — use with friends',
      },
      {
        phrase: 'Muy bien, gracias.',
        translation: 'Very well, thank you.',
        pronunciation: 'mooy BYEN, GRAH-syahs',
      },
      {
        phrase: 'Hasta luego.',
        translation: 'See you later.',
        pronunciation: 'AS-tah LWEH-go',
      },
    ],
    activities: [
      {
        type: 'multiple_choice',
        question: 'How do you say "Good morning" in Spanish?',
        options: ['Buenas noches', 'Adiós', 'Buenos días', 'Gracias'],
        correctIndex: 2,
      },
      {
        type: 'translate',
        prompt: 'Translate: Thank you',
        targetLanguage: 'native',
        answer: 'Gracias',
        hint: 'GRAH-syahs',
      },
      {
        type: 'match_pairs',
        pairs: [
          { left: 'Hola', right: 'Hello' },
          { left: 'Adiós', right: 'Goodbye' },
          { left: 'Gracias', right: 'Thank you' },
          { left: 'Por favor', right: 'Please' },
        ],
      },
      {
        type: 'listen_select',
        audioText: 'Buenos días',
        options: ['Good night', 'Goodbye', 'Good morning', 'Hello'],
        correctIndex: 2,
      },
    ],
    aiTeacherPrompt: {
      topic: 'Spanish Greetings — Hello & Goodbye',
      systemPrompt:
        'You\'re teaching only this lesson: Spanish greetings. ' +
        'Your words are Hola (OH-lah) = Hello, Adiós (ah-DYOS) = Goodbye, Buenos días (BWEH-nos DEE-as) = Good morning, Buenas noches (BWEH-nas NOH-ches) = Good night, Gracias (GRAH-syahs) = Thank you, and Por favor (por fah-VOR) = Please. ' +
        'Introduce each one at a time, mention when it\'s used during the day, then invite the student to say it back. ' +
        'Stay strictly within these greetings — don\'t drift to other topics.',
      teachingPoints: [
        'Hola is the universal greeting — use it any time',
        'Buenos días = Good morning, Buenas noches = Good night',
        'Adiós = Goodbye, Hasta luego = See you later',
        'Gracias = Thank you, Por favor = Please',
      ],
      exampleDialogue:
        'Teacher: ¡Hola! Buenos días.\nStudent: ¡Hola! Buenos días.\nTeacher: ¿Cómo estás?\nStudent: Muy bien, gracias.\nTeacher: ¡Hasta luego!',
    },
  },

  {
    id: 'lesson-es-1-2',
    unitId: 'unit-es-1',
    languageCode: 'es',
    title: 'Introducing Yourself',
    description: 'Tell people who you are and learn to ask their name.',
    xpReward: 10,
    goals: [
      { description: 'Introduce yourself in Spanish' },
      { description: 'Ask and answer "What is your name?"' },
    ],
    vocabulary: [
      {
        word: 'Me llamo',
        translation: 'My name is',
        pronunciation: 'meh YAH-mo',
        example: 'Me llamo Carlos.',
        exampleTranslation: 'My name is Carlos.',
      },
      {
        word: 'Soy',
        translation: 'I am',
        pronunciation: 'soy',
      },
      {
        word: 'Mucho gusto',
        translation: 'Nice to meet you',
        pronunciation: 'MOO-cho GOOS-to',
      },
      {
        word: 'Igualmente',
        translation: 'Likewise',
        pronunciation: 'ee-gwal-MEN-teh',
      },
    ],
    phrases: [
      {
        phrase: '¿Cómo te llamas?',
        translation: 'What is your name?',
        pronunciation: 'KOH-mo teh YAH-mas',
        context: 'Informal — use with peers',
      },
      {
        phrase: '¿Cómo se llama usted?',
        translation: 'What is your name?',
        pronunciation: 'KOH-mo seh YAH-ma oos-TED',
        context: 'Formal — use with elders or strangers',
      },
      {
        phrase: 'Encantado / Encantada.',
        translation: 'Pleased to meet you.',
        pronunciation: 'en-kan-TAH-do / en-kan-TAH-da',
        context: 'Encantado for males, Encantada for females',
      },
    ],
    activities: [
      {
        type: 'multiple_choice',
        question: 'How do you say "My name is" in Spanish?',
        options: ['Soy de', 'Me gusta', 'Me llamo', 'Cómo te llamas'],
        correctIndex: 2,
      },
      {
        type: 'translate',
        prompt: 'Translate: Nice to meet you',
        targetLanguage: 'native',
        answer: 'Mucho gusto',
        hint: 'MOO-cho GOOS-to',
      },
      {
        type: 'fill_blank',
        sentence: '¿Cómo ___ llamas?',
        answer: 'te',
        hint: 'Informal "you" reflexive',
      },
      {
        type: 'match_pairs',
        pairs: [
          { left: 'Me llamo', right: 'My name is' },
          { left: 'Soy', right: 'I am' },
          { left: 'Mucho gusto', right: 'Nice to meet you' },
          { left: 'Igualmente', right: 'Likewise' },
        ],
      },
    ],
    aiTeacherPrompt: {
      topic: 'Spanish Introductions — Me llamo',
      systemPrompt:
        'You\'re teaching only this lesson: how to introduce yourself in Spanish. ' +
        'The key phrases are "Me llamo ___" (meh YAH-mo) = My name is, "¿Cómo te llamas?" (KOH-mo teh YAH-mas) = What\'s your name? (informal), and "Mucho gusto" (MOO-cho GOOS-to) = Nice to meet you. ' +
        'Ask the student their name, have them practice "Me llamo ___", then role-play a short friendly introduction together. ' +
        'Don\'t teach anything outside this lesson.',
      teachingPoints: [
        '"Me llamo ___" = My name is ___',
        '"¿Cómo te llamas?" = What is your name? (informal)',
        '"Mucho gusto" = Nice to meet you',
        '"Encantado/Encantada" = Pleased to meet you (gender-dependent)',
      ],
      exampleDialogue:
        'Teacher: Hola, me llamo Sofia. ¿Cómo te llamas?\nStudent: Me llamo [name].\nTeacher: ¡Mucho gusto!\nStudent: Igualmente.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FRENCH
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'lesson-fr-1-1',
    unitId: 'unit-fr-1',
    languageCode: 'fr',
    title: 'Hello & Goodbye',
    description: 'Master the essential French greetings used every day.',
    xpReward: 10,
    goals: [
      { description: 'Greet people in French confidently' },
      { description: 'Say goodbye in a natural, friendly way' },
    ],
    vocabulary: [
      {
        word: 'Bonjour',
        translation: 'Hello / Good day',
        pronunciation: 'bon-ZHOOR',
        example: 'Bonjour, comment ça va?',
        exampleTranslation: 'Hello, how are you?',
      },
      {
        word: 'Bonsoir',
        translation: 'Good evening',
        pronunciation: 'bon-SWAHR',
      },
      {
        word: 'Au revoir',
        translation: 'Goodbye',
        pronunciation: 'oh reh-VWAHR',
      },
      {
        word: 'Merci',
        translation: 'Thank you',
        pronunciation: 'mehr-SEE',
      },
      {
        word: 'S\'il vous plaît',
        translation: 'Please (formal)',
        pronunciation: 'seel voo PLEH',
      },
      {
        word: 'Oui / Non',
        translation: 'Yes / No',
        pronunciation: 'wee / nohn',
      },
    ],
    phrases: [
      {
        phrase: 'Comment ça va?',
        translation: 'How are you?',
        pronunciation: 'koh-MAHN sah VAH',
        context: 'Casual — use with people you know',
      },
      {
        phrase: 'Ça va bien, merci.',
        translation: 'I\'m doing well, thank you.',
        pronunciation: 'sah vah BYAN, mehr-SEE',
      },
      {
        phrase: 'À bientôt!',
        translation: 'See you soon!',
        pronunciation: 'ah byan-TOH',
      },
    ],
    activities: [
      {
        type: 'multiple_choice',
        question: 'What does "Bonjour" mean?',
        options: ['Good night', 'Goodbye', 'Hello / Good day', 'Please'],
        correctIndex: 2,
      },
      {
        type: 'translate',
        prompt: 'Translate: Thank you',
        targetLanguage: 'native',
        answer: 'Merci',
        hint: 'mehr-SEE',
      },
      {
        type: 'match_pairs',
        pairs: [
          { left: 'Bonjour', right: 'Hello' },
          { left: 'Au revoir', right: 'Goodbye' },
          { left: 'Merci', right: 'Thank you' },
          { left: 'Bonsoir', right: 'Good evening' },
        ],
      },
      {
        type: 'listen_select',
        audioText: 'Au revoir',
        options: ['Hello', 'Please', 'Thank you', 'Goodbye'],
        correctIndex: 3,
      },
    ],
    aiTeacherPrompt: {
      topic: 'French Greetings — Bonjour & Au revoir',
      systemPrompt:
        'You\'re teaching only this lesson: French greetings. ' +
        'Your words are Bonjour (bon-ZHOOR) = Hello, Bonsoir (bon-SWAHR) = Good evening, Au revoir (oh reh-VWAHR) = Goodbye, Merci (mehr-SEE) = Thank you, and S\'il vous plaît (seel voo PLEH) = Please. ' +
        'Introduce each one at a time, mention when during the day it\'s used, then invite the student to repeat it. ' +
        'Stay strictly within these words — don\'t drift to other topics.',
      teachingPoints: [
        'Bonjour = Hello (used during the day)',
        'Bonsoir = Good evening (used after ~6pm)',
        'Au revoir = Goodbye, À bientôt = See you soon',
        'Merci = Thank you, S\'il vous plaît = Please (formal)',
      ],
      exampleDialogue:
        'Teacher: Bonjour! Comment ça va?\nStudent: Ça va bien, merci.\nTeacher: Très bien! Au revoir!\nStudent: Au revoir!',
    },
  },

  {
    id: 'lesson-fr-1-2',
    unitId: 'unit-fr-1',
    languageCode: 'fr',
    title: 'Introducing Yourself',
    description: 'Learn to introduce yourself and ask for someone\'s name in French.',
    xpReward: 10,
    goals: [
      { description: 'Say your name in French' },
      { description: 'Ask "What is your name?" politely' },
    ],
    vocabulary: [
      {
        word: 'Je m\'appelle',
        translation: 'My name is',
        pronunciation: 'zhuh mah-PEL',
        example: 'Je m\'appelle Marie.',
        exampleTranslation: 'My name is Marie.',
      },
      {
        word: 'Je suis',
        translation: 'I am',
        pronunciation: 'zhuh swee',
      },
      {
        word: 'Enchanté(e)',
        translation: 'Nice to meet you',
        pronunciation: 'ahn-shahn-TAY',
      },
    ],
    phrases: [
      {
        phrase: 'Comment vous appelez-vous?',
        translation: 'What is your name?',
        pronunciation: 'koh-MAHN voo za-play-VOO',
        context: 'Formal',
      },
      {
        phrase: 'Comment tu t\'appelles?',
        translation: 'What is your name?',
        pronunciation: 'koh-MAHN too ta-PEL',
        context: 'Informal — use with friends',
      },
      {
        phrase: 'Ravi(e) de vous rencontrer.',
        translation: 'Pleased to meet you.',
        pronunciation: 'rah-VEE duh voo rahn-kon-TRAY',
      },
    ],
    activities: [
      {
        type: 'multiple_choice',
        question: 'How do you say "My name is" in French?',
        options: ['Je suis', 'Je m\'appelle', 'Comment tu', 'Enchanté'],
        correctIndex: 1,
      },
      {
        type: 'translate',
        prompt: 'Translate: Nice to meet you',
        targetLanguage: 'native',
        answer: 'Enchanté',
        hint: 'ahn-shahn-TAY',
      },
      {
        type: 'fill_blank',
        sentence: 'Je ___ Marie.',
        answer: 'm\'appelle',
        hint: 'How you say "my name is"',
      },
      {
        type: 'match_pairs',
        pairs: [
          { left: 'Je m\'appelle', right: 'My name is' },
          { left: 'Je suis', right: 'I am' },
          { left: 'Enchanté', right: 'Nice to meet you' },
        ],
      },
    ],
    aiTeacherPrompt: {
      topic: 'French Introductions — Je m\'appelle',
      systemPrompt:
        'You\'re teaching only this lesson: how to say your name and ask for someone\'s name in French. ' +
        'The key phrases are "Je m\'appelle ___" (zhuh mah-PEL) = My name is, "Comment tu t\'appelles?" (koh-MAHN too ta-PEL) = What\'s your name? (informal), and "Enchanté(e)" (ahn-shahn-TAY) = Nice to meet you. ' +
        'Ask the student their name, have them practice each phrase one at a time, and role-play a short friendly first meeting. ' +
        'Don\'t wander outside this lesson\'s vocabulary and phrases.',
      teachingPoints: [
        '"Je m\'appelle ___" = My name is ___',
        '"Comment tu t\'appelles?" = What is your name? (informal)',
        '"Comment vous appelez-vous?" = What is your name? (formal)',
        '"Enchanté(e)" = Nice to meet you',
      ],
      exampleDialogue:
        'Teacher: Bonjour! Je m\'appelle Sophie. Comment tu t\'appelles?\nStudent: Je m\'appelle [name].\nTeacher: Enchanté(e)!\nStudent: Enchanté(e) aussi!',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // JAPANESE
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'lesson-ja-1-1',
    unitId: 'unit-ja-1',
    languageCode: 'ja',
    title: 'Hello & Goodbye',
    description: 'Learn the most important Japanese greetings for any time of day.',
    xpReward: 10,
    goals: [
      { description: 'Greet people in Japanese at the right time of day' },
      { description: 'Say goodbye politely in Japanese' },
    ],
    vocabulary: [
      {
        word: 'こんにちは',
        translation: 'Hello (daytime)',
        pronunciation: 'Konnichiwa',
        example: 'こんにちは！元気ですか？',
        exampleTranslation: 'Hello! How are you?',
      },
      {
        word: 'おはようございます',
        translation: 'Good morning',
        pronunciation: 'Ohayou gozaimasu',
      },
      {
        word: 'こんばんは',
        translation: 'Good evening',
        pronunciation: 'Konbanwa',
      },
      {
        word: 'さようなら',
        translation: 'Goodbye (formal)',
        pronunciation: 'Sayounara',
      },
      {
        word: 'またね',
        translation: 'See you later (casual)',
        pronunciation: 'Mata ne',
      },
      {
        word: 'ありがとう',
        translation: 'Thank you',
        pronunciation: 'Arigatou',
      },
    ],
    phrases: [
      {
        phrase: 'お元気ですか？',
        translation: 'How are you?',
        pronunciation: 'Ogenki desu ka?',
        context: 'Polite/formal way to ask',
      },
      {
        phrase: '元気です、ありがとう。',
        translation: 'I\'m fine, thank you.',
        pronunciation: 'Genki desu, arigatou.',
      },
      {
        phrase: 'またあとで。',
        translation: 'See you later.',
        pronunciation: 'Mata atode.',
      },
    ],
    activities: [
      {
        type: 'multiple_choice',
        question: 'Which greeting means "Good morning" in Japanese?',
        options: ['こんにちは', 'さようなら', 'おはようございます', 'こんばんは'],
        correctIndex: 2,
      },
      {
        type: 'translate',
        prompt: 'Translate: Thank you',
        targetLanguage: 'native',
        answer: 'ありがとう',
        hint: 'Arigatou',
      },
      {
        type: 'match_pairs',
        pairs: [
          { left: 'こんにちは', right: 'Hello' },
          { left: 'さようなら', right: 'Goodbye' },
          { left: 'ありがとう', right: 'Thank you' },
          { left: 'またね', right: 'See you later' },
        ],
      },
      {
        type: 'listen_select',
        audioText: 'おはようございます',
        options: ['Good evening', 'Goodbye', 'Good morning', 'Hello'],
        correctIndex: 2,
      },
    ],
    aiTeacherPrompt: {
      topic: 'Japanese Greetings — こんにちは and beyond',
      systemPrompt:
        'You\'re teaching only this lesson: Japanese greetings. ' +
        'Your words are おはようございます (Ohayou gozaimasu) = Good morning, こんにちは (Konnichiwa) = Hello (daytime), こんばんは (Konbanwa) = Good evening, さようなら (Sayounara) = Goodbye, またね (Mata ne) = See you (casual), and ありがとう (Arigatou) = Thank you. ' +
        'Introduce each one at a time — say the Japanese word, give the romaji, explain when it\'s used, then invite the student to repeat it. ' +
        'Stay within this lesson only — don\'t introduce unrelated vocabulary.',
      teachingPoints: [
        'おはようございます (Ohayou gozaimasu) = Good morning',
        'こんにちは (Konnichiwa) = Hello — used during the day',
        'こんばんは (Konbanwa) = Good evening',
        'さようなら (Sayounara) = Goodbye (formal), またね (Mata ne) = See you (casual)',
        'ありがとう (Arigatou) = Thank you',
      ],
      exampleDialogue:
        'Teacher: こんにちは！お元気ですか？\nStudent: 元気です、ありがとう。\nTeacher: またね！\nStudent: またね！',
    },
  },

  {
    id: 'lesson-ja-1-2',
    unitId: 'unit-ja-1',
    languageCode: 'ja',
    title: 'Introducing Yourself',
    description: 'Learn to say your name and ask for someone\'s name in Japanese.',
    xpReward: 10,
    goals: [
      { description: 'Introduce yourself in Japanese' },
      { description: 'Ask someone their name politely' },
    ],
    vocabulary: [
      {
        word: 'わたしのなまえは',
        translation: 'My name is',
        pronunciation: 'Watashi no namae wa',
        example: 'わたしのなまえはゆいです。',
        exampleTranslation: 'My name is Yui.',
      },
      {
        word: 'わたし',
        translation: 'I / Me',
        pronunciation: 'Watashi',
      },
      {
        word: 'なまえ',
        translation: 'Name',
        pronunciation: 'Namae',
      },
      {
        word: 'はじめまして',
        translation: 'Nice to meet you',
        pronunciation: 'Hajimemashite',
      },
      {
        word: 'よろしくおねがいします',
        translation: 'Nice to meet you / Please be kind to me',
        pronunciation: 'Yoroshiku onegaishimasu',
      },
    ],
    phrases: [
      {
        phrase: 'おなまえはなんですか？',
        translation: 'What is your name?',
        pronunciation: 'Onamae wa nan desu ka?',
        context: 'Polite way to ask someone\'s name',
      },
      {
        phrase: 'どうぞよろしく。',
        translation: 'Please to meet you (casual).',
        pronunciation: 'Douzo yoroshiku.',
      },
    ],
    activities: [
      {
        type: 'multiple_choice',
        question: 'What does "はじめまして" mean?',
        options: ['Goodbye', 'Thank you', 'Nice to meet you', 'Good morning'],
        correctIndex: 2,
      },
      {
        type: 'translate',
        prompt: 'Translate: My name is',
        targetLanguage: 'native',
        answer: 'わたしのなまえは',
        hint: 'Watashi no namae wa',
      },
      {
        type: 'fill_blank',
        sentence: 'わたしのなまえは ___ です。',
        answer: '[your name]',
        hint: 'Fill in your own name here',
      },
      {
        type: 'match_pairs',
        pairs: [
          { left: 'わたし', right: 'I / Me' },
          { left: 'なまえ', right: 'Name' },
          { left: 'はじめまして', right: 'Nice to meet you' },
          { left: 'よろしく', right: 'Please be kind / Regards' },
        ],
      },
    ],
    aiTeacherPrompt: {
      topic: 'Japanese Introductions — はじめまして',
      systemPrompt:
        'You\'re teaching only this lesson: how to introduce yourself in Japanese. ' +
        'The key phrases are "わたしのなまえは___です" (Watashi no namae wa ___ desu) = My name is, "おなまえはなんですか？" (Onamae wa nan desu ka?) = What\'s your name?, "はじめまして" (Hajimemashite) = Nice to meet you, and "よろしくおねがいします" (Yoroshiku onegaishimasu) = Please be kind to me. ' +
        'Ask the student their name and walk through a natural first-meeting exchange one phrase at a time. ' +
        'Stay within this lesson only.',
      teachingPoints: [
        '"わたしのなまえは___です" = My name is ___',
        '"おなまえはなんですか" = What is your name? (polite)',
        '"はじめまして" = Nice to meet you (said when meeting for the first time)',
        '"よろしくおねがいします" = Please be kind to me (standard closing of introductions)',
      ],
      exampleDialogue:
        'Teacher: はじめまして！わたしのなまえはゆいです。おなまえはなんですか？\nStudent: わたしのなまえは[name]です。\nTeacher: よろしくおねがいします！\nStudent: よろしくおねがいします！',
    },
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// SPANISH — additional lessons
// ═══════════════════════════════════════════════════════════════════════════

lessons.push(
  {
    id: 'lesson-es-1-3',
    unitId: 'unit-es-1',
    languageCode: 'es',
    title: 'Numbers 1–10',
    description: 'Count from one to ten and use numbers in everyday sentences.',
    xpReward: 10,
    goals: [
      { description: 'Count from 1 to 10 in Spanish' },
      { description: 'Use numbers in simple sentences' },
    ],
    vocabulary: [
      { word: 'uno', translation: 'one', pronunciation: 'OO-no' },
      { word: 'dos', translation: 'two', pronunciation: 'dohs' },
      { word: 'tres', translation: 'three', pronunciation: 'trehs' },
      { word: 'cuatro', translation: 'four', pronunciation: 'KWAH-tro' },
      { word: 'cinco', translation: 'five', pronunciation: 'SEEN-ko' },
      { word: 'diez', translation: 'ten', pronunciation: 'dyehs' },
    ],
    phrases: [
      { phrase: '¿Cuántos años tienes?', translation: 'How old are you?', pronunciation: 'KWAN-tos AH-nyos TYEH-nes' },
      { phrase: 'Tengo ___ años.', translation: 'I am ___ years old.', pronunciation: 'TEN-go ___ AH-nyos' },
    ],
    activities: [
      { type: 'multiple_choice', question: 'What does "cinco" mean?', options: ['three', 'four', 'five', 'six'], correctIndex: 2 },
      { type: 'match_pairs', pairs: [{ left: 'uno', right: 'one' }, { left: 'dos', right: 'two' }, { left: 'tres', right: 'three' }, { left: 'diez', right: 'ten' }] },
    ],
    aiTeacherPrompt: {
      topic: 'Spanish Numbers 1–10',
      systemPrompt:
        'You\'re teaching only this lesson: Spanish numbers 1 to 10. ' +
        'The numbers are uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez. ' +
        'Introduce them in small groups, count together out loud, and use them in a simple sentence like "Tengo ___ años." ' +
        'Don\'t teach anything outside numbers 1–10.',
      teachingPoints: ['uno=1, dos=2, tres=3, cuatro=4, cinco=5', 'seis=6, siete=7, ocho=8, nueve=9, diez=10'],
      exampleDialogue: 'Teacher: ¿Cuántos dedos tienes? (How many fingers?)\nStudent: ¡Diez! (Ten!)',
    },
  },
  {
    id: 'lesson-es-1-4',
    unitId: 'unit-es-1',
    languageCode: 'es',
    title: 'Colors',
    description: 'Learn the most common colors in Spanish.',
    xpReward: 10,
    goals: [
      { description: 'Name basic colors in Spanish' },
      { description: 'Describe objects by color' },
    ],
    vocabulary: [
      { word: 'rojo', translation: 'red', pronunciation: 'ROH-ho' },
      { word: 'azul', translation: 'blue', pronunciation: 'ah-SOOL' },
      { word: 'verde', translation: 'green', pronunciation: 'VER-deh' },
      { word: 'amarillo', translation: 'yellow', pronunciation: 'ah-mah-REE-yo' },
      { word: 'negro', translation: 'black', pronunciation: 'NEH-gro' },
      { word: 'blanco', translation: 'white', pronunciation: 'BLAN-ko' },
    ],
    phrases: [
      { phrase: '¿De qué color es?', translation: 'What color is it?', pronunciation: 'deh keh koh-LOR ehs' },
      { phrase: 'Es de color rojo.', translation: 'It is red.', pronunciation: 'ehs deh koh-LOR ROH-ho' },
    ],
    activities: [
      { type: 'multiple_choice', question: 'What does "azul" mean?', options: ['red', 'blue', 'green', 'yellow'], correctIndex: 1 },
      { type: 'match_pairs', pairs: [{ left: 'rojo', right: 'red' }, { left: 'azul', right: 'blue' }, { left: 'verde', right: 'green' }, { left: 'amarillo', right: 'yellow' }] },
    ],
    aiTeacherPrompt: {
      topic: 'Spanish Colors',
      systemPrompt:
        'You\'re teaching only this lesson: Spanish colors. ' +
        'Your words are rojo (ROH-ho) = red, azul (ah-SOOL) = blue, verde (VER-deh) = green, amarillo (ah-mah-REE-yo) = yellow, negro (NEH-gro) = black, and blanco (BLAN-ko) = white. ' +
        'Introduce each color one at a time using a familiar everyday object as an example, then ask the student to say it back. ' +
        'Stay within these six colors only.',
      teachingPoints: ['rojo=red, azul=blue, verde=green', 'amarillo=yellow, negro=black, blanco=white'],
      exampleDialogue: 'Teacher: ¿De qué color es el cielo? (What color is the sky?)\nStudent: ¡Azul! (Blue!)',
    },
  },
  {
    id: 'lesson-es-1-5',
    unitId: 'unit-es-1',
    languageCode: 'es',
    title: 'Family & Friends',
    description: 'Talk about your family members in Spanish.',
    xpReward: 10,
    goals: [
      { description: 'Name family members in Spanish' },
      { description: 'Describe your family in simple sentences' },
    ],
    vocabulary: [
      { word: 'madre', translation: 'mother', pronunciation: 'MAH-dreh', example: 'Mi madre se llama Ana.', exampleTranslation: 'My mother\'s name is Ana.' },
      { word: 'padre', translation: 'father', pronunciation: 'PAH-dreh' },
      { word: 'hermano', translation: 'brother', pronunciation: 'ehr-MAH-no' },
      { word: 'hermana', translation: 'sister', pronunciation: 'ehr-MAH-na' },
      { word: 'abuelo', translation: 'grandfather', pronunciation: 'ah-BWEH-lo' },
      { word: 'abuela', translation: 'grandmother', pronunciation: 'ah-BWEH-la' },
    ],
    phrases: [
      { phrase: 'Esta es mi familia.', translation: 'This is my family.', pronunciation: 'EH-stah ehs mee fah-MEE-lyah' },
      { phrase: '¿Tienes hermanos?', translation: 'Do you have siblings?', pronunciation: 'TYEH-nes ehr-MAH-nos' },
    ],
    activities: [
      { type: 'multiple_choice', question: 'What does "padre" mean?', options: ['mother', 'sister', 'father', 'brother'], correctIndex: 2 },
      { type: 'match_pairs', pairs: [{ left: 'madre', right: 'mother' }, { left: 'padre', right: 'father' }, { left: 'hermano', right: 'brother' }, { left: 'abuela', right: 'grandmother' }] },
    ],
    aiTeacherPrompt: {
      topic: 'Spanish Family Members',
      systemPrompt:
        'You\'re teaching only this lesson: Spanish family vocabulary. ' +
        'Your words are madre (mother), padre (father), hermano (brother), hermana (sister), abuelo (grandfather), abuela (grandmother). ' +
        'Teach each word using "mi ___" (my ___) in a natural sentence, then ask the student about their own family. ' +
        'Stay within this lesson\'s vocabulary only.',
      teachingPoints: ['madre/mamá = mother, padre/papá = father', 'hermano = brother, hermana = sister', 'abuelo = grandfather, abuela = grandmother'],
      exampleDialogue: 'Teacher: ¿Tienes hermanos?\nStudent: Sí, tengo un hermano. (Yes, I have a brother.)',
    },
  },
  {
    id: 'lesson-es-1-6',
    unitId: 'unit-es-1',
    languageCode: 'es',
    title: 'At the Restaurant',
    description: 'Order food and ask for the bill in Spanish.',
    xpReward: 10,
    goals: [
      { description: 'Order food and drinks in a restaurant' },
      { description: 'Ask for the check politely' },
    ],
    vocabulary: [
      { word: 'el menú', translation: 'the menu', pronunciation: 'el meh-NOO' },
      { word: 'una mesa', translation: 'a table', pronunciation: 'OO-nah MEH-sah' },
      { word: 'el camarero', translation: 'the waiter', pronunciation: 'el kah-mah-REH-ro' },
      { word: 'el agua', translation: 'water', pronunciation: 'el AH-gwah' },
      { word: 'la comida', translation: 'the food', pronunciation: 'lah koh-MEE-dah' },
      { word: 'la cuenta', translation: 'the bill', pronunciation: 'lah KWEN-tah' },
    ],
    phrases: [
      { phrase: 'Una mesa para dos, por favor.', translation: 'A table for two, please.', pronunciation: 'OO-nah MEH-sah PAH-rah dohs, por fah-VOR' },
      { phrase: 'La cuenta, por favor.', translation: 'The bill, please.', pronunciation: 'lah KWEN-tah, por fah-VOR' },
    ],
    activities: [
      { type: 'multiple_choice', question: 'How do you ask for the bill?', options: ['El menú, por favor.', 'Una mesa, por favor.', 'La cuenta, por favor.', 'El agua, por favor.'], correctIndex: 2 },
      { type: 'match_pairs', pairs: [{ left: 'el menú', right: 'the menu' }, { left: 'el agua', right: 'water' }, { left: 'la cuenta', right: 'the bill' }, { left: 'la comida', right: 'the food' }] },
    ],
    aiTeacherPrompt: {
      topic: 'Spanish Restaurant Vocabulary',
      systemPrompt:
        'You\'re teaching only this lesson: Spanish restaurant vocabulary. ' +
        'The key words and phrases are el menú (menu), una mesa (a table), el camarero (waiter), el agua (water), la comida (food), la cuenta (bill), "Una mesa para dos, por favor" and "La cuenta, por favor." ' +
        'Role-play a restaurant visit — you act as the waiter — and guide the student through asking for a table, ordering, and paying. ' +
        'Stay within this lesson only.',
      teachingPoints: ['Una mesa para dos = A table for two', 'La cuenta = the bill', 'El camarero = waiter'],
      exampleDialogue: 'Teacher (waiter): ¿Qué desea?\nStudent: Una mesa para dos, por favor.\nTeacher: ¡Por supuesto!',
    },
  },
);

// ═══════════════════════════════════════════════════════════════════════════
// FRENCH — additional lessons
// ═══════════════════════════════════════════════════════════════════════════

lessons.push(
  {
    id: 'lesson-fr-1-3',
    unitId: 'unit-fr-1',
    languageCode: 'fr',
    title: 'Numbers 1–10',
    description: 'Count from one to ten in French.',
    xpReward: 10,
    goals: [
      { description: 'Count from 1 to 10 in French' },
      { description: 'Use numbers in simple everyday sentences' },
    ],
    vocabulary: [
      { word: 'un / une', translation: 'one', pronunciation: 'uhn / oon' },
      { word: 'deux', translation: 'two', pronunciation: 'duh' },
      { word: 'trois', translation: 'three', pronunciation: 'twah' },
      { word: 'quatre', translation: 'four', pronunciation: 'KAH-truh' },
      { word: 'cinq', translation: 'five', pronunciation: 'sank' },
      { word: 'dix', translation: 'ten', pronunciation: 'dees' },
    ],
    phrases: [
      { phrase: 'Quel âge as-tu?', translation: 'How old are you?', pronunciation: 'kel ahzh ah-TOO' },
      { phrase: 'J\'ai ___ ans.', translation: 'I am ___ years old.', pronunciation: 'zhay ___ ahn' },
    ],
    activities: [
      { type: 'multiple_choice', question: 'What does "cinq" mean?', options: ['three', 'four', 'five', 'six'], correctIndex: 2 },
      { type: 'match_pairs', pairs: [{ left: 'un', right: 'one' }, { left: 'deux', right: 'two' }, { left: 'trois', right: 'three' }, { left: 'dix', right: 'ten' }] },
    ],
    aiTeacherPrompt: {
      topic: 'French Numbers 1–10',
      systemPrompt:
        'You\'re teaching only this lesson: French numbers 1 to 10. ' +
        'The numbers are un/une, deux, trois, quatre, cinq, six, sept, huit, neuf, dix. ' +
        'Introduce them in small groups with pronunciation, count together out loud, and practice "J\'ai ___ ans." ' +
        'Don\'t drift outside numbers 1–10.',
      teachingPoints: ['un=1, deux=2, trois=3, quatre=4, cinq=5', 'six=6, sept=7, huit=8, neuf=9, dix=10'],
      exampleDialogue: 'Teacher: Comptons ensemble! Un, deux, trois...\nStudent: Quatre, cinq!',
    },
  },
  {
    id: 'lesson-fr-1-4',
    unitId: 'unit-fr-1',
    languageCode: 'fr',
    title: 'Colors',
    description: 'Discover the most common colors in French.',
    xpReward: 10,
    goals: [
      { description: 'Name basic colors in French' },
      { description: 'Describe objects by their color' },
    ],
    vocabulary: [
      { word: 'rouge', translation: 'red', pronunciation: 'roozh' },
      { word: 'bleu', translation: 'blue', pronunciation: 'bluh' },
      { word: 'vert', translation: 'green', pronunciation: 'vehr' },
      { word: 'jaune', translation: 'yellow', pronunciation: 'zhohn' },
      { word: 'noir', translation: 'black', pronunciation: 'nwahr' },
      { word: 'blanc', translation: 'white', pronunciation: 'blahn' },
    ],
    phrases: [
      { phrase: 'De quelle couleur est-ce?', translation: 'What color is this?', pronunciation: 'duh kel koo-LUR ehs' },
      { phrase: 'C\'est rouge.', translation: 'It is red.', pronunciation: 'say roozh' },
    ],
    activities: [
      { type: 'multiple_choice', question: 'What does "bleu" mean?', options: ['red', 'blue', 'green', 'yellow'], correctIndex: 1 },
      { type: 'match_pairs', pairs: [{ left: 'rouge', right: 'red' }, { left: 'bleu', right: 'blue' }, { left: 'vert', right: 'green' }, { left: 'jaune', right: 'yellow' }] },
    ],
    aiTeacherPrompt: {
      topic: 'French Colors',
      systemPrompt:
        'You\'re teaching only this lesson: French colors. ' +
        'Your words are rouge (roozh) = red, bleu (bluh) = blue, vert (vehr) = green, jaune (zhohn) = yellow, noir (nwahr) = black, and blanc (blahn) = white. ' +
        'Introduce each color one at a time using a familiar everyday object as an example, then invite the student to say it back. ' +
        'Stay within these six colors only.',
      teachingPoints: ['rouge=red, bleu=blue, vert=green', 'jaune=yellow, noir=black, blanc=white'],
      exampleDialogue: 'Teacher: De quelle couleur est le ciel?\nStudent: Bleu!',
    },
  },
  {
    id: 'lesson-fr-1-5',
    unitId: 'unit-fr-1',
    languageCode: 'fr',
    title: 'Family & Friends',
    description: 'Talk about your family in French.',
    xpReward: 10,
    goals: [
      { description: 'Name family members in French' },
      { description: 'Introduce your family members' },
    ],
    vocabulary: [
      { word: 'la mère', translation: 'mother', pronunciation: 'lah mehr', example: 'Ma mère s\'appelle Sophie.', exampleTranslation: 'My mother\'s name is Sophie.' },
      { word: 'le père', translation: 'father', pronunciation: 'luh pehr' },
      { word: 'le frère', translation: 'brother', pronunciation: 'luh frehr' },
      { word: 'la sœur', translation: 'sister', pronunciation: 'lah sur' },
      { word: 'le grand-père', translation: 'grandfather', pronunciation: 'luh grahn-pehr' },
      { word: 'la grand-mère', translation: 'grandmother', pronunciation: 'lah grahn-mehr' },
    ],
    phrases: [
      { phrase: 'Voici ma famille.', translation: 'Here is my family.', pronunciation: 'vwah-SEE mah fah-MEE' },
      { phrase: 'As-tu des frères et sœurs?', translation: 'Do you have siblings?', pronunciation: 'ah-TOO deh frehr ay sur' },
    ],
    activities: [
      { type: 'multiple_choice', question: 'What does "le père" mean?', options: ['mother', 'sister', 'father', 'brother'], correctIndex: 2 },
      { type: 'match_pairs', pairs: [{ left: 'la mère', right: 'mother' }, { left: 'le père', right: 'father' }, { left: 'le frère', right: 'brother' }, { left: 'la sœur', right: 'sister' }] },
    ],
    aiTeacherPrompt: {
      topic: 'French Family Members',
      systemPrompt:
        'You\'re teaching only this lesson: French family vocabulary. ' +
        'Your words are la mère (mother), le père (father), le frère (brother), la sœur (sister), le grand-père (grandfather), la grand-mère (grandmother). ' +
        'Teach each word using "ma ___" or "mon ___" (my ___) in a natural sentence, then ask the student about their own family. ' +
        'Stay within this lesson\'s vocabulary only.',
      teachingPoints: ['la mère = mother, le père = father', 'le frère = brother, la sœur = sister', 'la famille = the family'],
      exampleDialogue: 'Teacher: As-tu des frères et sœurs?\nStudent: Oui, j\'ai une sœur. (Yes, I have a sister.)',
    },
  },
  {
    id: 'lesson-fr-1-6',
    unitId: 'unit-fr-1',
    languageCode: 'fr',
    title: 'At the Café',
    description: 'Order drinks and snacks at a French café.',
    xpReward: 10,
    goals: [
      { description: 'Order food and drinks at a café in French' },
      { description: 'Use polite café expressions' },
    ],
    vocabulary: [
      { word: 'un café', translation: 'a coffee', pronunciation: 'uhn kah-FAY' },
      { word: 'un thé', translation: 'a tea', pronunciation: 'uhn tay' },
      { word: 'un croissant', translation: 'a croissant', pronunciation: 'uhn kwah-SAHN' },
      { word: 'l\'addition', translation: 'the bill', pronunciation: 'lah-dee-SYOHN' },
      { word: 'une table', translation: 'a table', pronunciation: 'oon TAH-bluh' },
      { word: 'le serveur', translation: 'the waiter', pronunciation: 'luh sehr-VUR' },
    ],
    phrases: [
      { phrase: 'Un café, s\'il vous plaît.', translation: 'A coffee, please.', pronunciation: 'uhn kah-FAY, seel voo PLEH' },
      { phrase: 'L\'addition, s\'il vous plaît.', translation: 'The bill, please.', pronunciation: 'lah-dee-SYOHN, seel voo PLEH' },
    ],
    activities: [
      { type: 'multiple_choice', question: 'How do you order "a coffee" in French?', options: ['Un thé, s\'il vous plaît.', 'Un café, s\'il vous plaît.', 'Un croissant, s\'il vous plaît.', 'L\'addition, s\'il vous plaît.'], correctIndex: 1 },
      { type: 'match_pairs', pairs: [{ left: 'un café', right: 'a coffee' }, { left: 'un thé', right: 'a tea' }, { left: 'l\'addition', right: 'the bill' }, { left: 'une table', right: 'a table' }] },
    ],
    aiTeacherPrompt: {
      topic: 'French Café Experience',
      systemPrompt:
        'You\'re teaching only this lesson: French café vocabulary. ' +
        'The key words and phrases are un café (coffee), un thé (tea), un croissant, l\'addition (the bill), une table, le serveur (waiter), "Un café, s\'il vous plaît" and "L\'addition, s\'il vous plaît." ' +
        'Role-play as the café waiter — guide the student through ordering a drink and asking for the bill, one phrase at a time. ' +
        'Stay within this lesson only.',
      teachingPoints: ['Un café = a coffee, un thé = a tea', 'L\'addition = the bill, une table = a table', 'S\'il vous plaît = please (always add this!)'],
      exampleDialogue: 'Teacher (waiter): Bonjour! Que désirez-vous?\nStudent: Un café, s\'il vous plaît.\nTeacher: Bien sûr!',
    },
  },
);

// ═══════════════════════════════════════════════════════════════════════════
// JAPANESE — additional lessons
// ═══════════════════════════════════════════════════════════════════════════

lessons.push(
  {
    id: 'lesson-ja-1-3',
    unitId: 'unit-ja-1',
    languageCode: 'ja',
    title: 'Numbers 1–10',
    description: 'Count from one to ten in Japanese.',
    xpReward: 10,
    goals: [
      { description: 'Count from 1 to 10 in Japanese' },
      { description: 'Use numbers in simple sentences' },
    ],
    vocabulary: [
      { word: 'いち', translation: 'one', pronunciation: 'ichi' },
      { word: 'に', translation: 'two', pronunciation: 'ni' },
      { word: 'さん', translation: 'three', pronunciation: 'san' },
      { word: 'し / よん', translation: 'four', pronunciation: 'shi / yon' },
      { word: 'ご', translation: 'five', pronunciation: 'go' },
      { word: 'じゅう', translation: 'ten', pronunciation: 'juu' },
    ],
    phrases: [
      { phrase: 'なんさいですか？', translation: 'How old are you?', pronunciation: 'Nansai desu ka?' },
      { phrase: '___ さいです。', translation: 'I am ___ years old.', pronunciation: '___ sai desu.' },
    ],
    activities: [
      { type: 'multiple_choice', question: 'What does "さん" mean?', options: ['one', 'two', 'three', 'four'], correctIndex: 2 },
      { type: 'match_pairs', pairs: [{ left: 'いち', right: 'one' }, { left: 'に', right: 'two' }, { left: 'さん', right: 'three' }, { left: 'じゅう', right: 'ten' }] },
    ],
    aiTeacherPrompt: {
      topic: 'Japanese Numbers 1–10',
      systemPrompt:
        'You\'re teaching only this lesson: Japanese numbers 1 to 10. ' +
        'The numbers are いち (ichi), に (ni), さん (san), し/よん (shi/yon), ご (go), ろく (roku), なな (nana), はち (hachi), きゅう (kyuu), じゅう (juu). ' +
        'Introduce them alongside their romaji, count together out loud, and practice "___さいです." ' +
        'Don\'t go outside numbers 1–10.',
      teachingPoints: ['いち=1, に=2, さん=3, し/よん=4, ご=5', 'ろく=6, なな=7, はち=8, きゅう=9, じゅう=10'],
      exampleDialogue: 'Teacher: いち、に、さん... (one, two, three...)\nStudent: し、ご！(four, five!)',
    },
  },
  {
    id: 'lesson-ja-1-4',
    unitId: 'unit-ja-1',
    languageCode: 'ja',
    title: 'Colors',
    description: 'Learn the basic colors in Japanese.',
    xpReward: 10,
    goals: [
      { description: 'Name basic colors in Japanese' },
      { description: 'Describe objects by color' },
    ],
    vocabulary: [
      { word: 'あか', translation: 'red', pronunciation: 'aka' },
      { word: 'あお', translation: 'blue', pronunciation: 'ao' },
      { word: 'みどり', translation: 'green', pronunciation: 'midori' },
      { word: 'きいろ', translation: 'yellow', pronunciation: 'kiiro' },
      { word: 'くろ', translation: 'black', pronunciation: 'kuro' },
      { word: 'しろ', translation: 'white', pronunciation: 'shiro' },
    ],
    phrases: [
      { phrase: 'なにいろですか？', translation: 'What color is it?', pronunciation: 'Nani iro desu ka?' },
      { phrase: 'あかです。', translation: 'It is red.', pronunciation: 'Aka desu.' },
    ],
    activities: [
      { type: 'multiple_choice', question: 'What does "あお" mean?', options: ['red', 'blue', 'green', 'yellow'], correctIndex: 1 },
      { type: 'match_pairs', pairs: [{ left: 'あか', right: 'red' }, { left: 'あお', right: 'blue' }, { left: 'みどり', right: 'green' }, { left: 'きいろ', right: 'yellow' }] },
    ],
    aiTeacherPrompt: {
      topic: 'Japanese Colors',
      systemPrompt:
        'You\'re teaching only this lesson: Japanese colors. ' +
        'Your words are あか (aka) = red, あお (ao) = blue, みどり (midori) = green, きいろ (kiiro) = yellow, くろ (kuro) = black, and しろ (shiro) = white. ' +
        'Introduce each color one at a time — say the Japanese word, give the romaji, use a familiar object as an example, then ask the student to say it back. ' +
        'Stay within this lesson only.',
      teachingPoints: ['あか=red, あお=blue, みどり=green', 'きいろ=yellow, くろ=black, しろ=white'],
      exampleDialogue: 'Teacher: このりんごはなにいろ？(What color is this apple?)\nStudent: あかです！(Red!)',
    },
  },
  {
    id: 'lesson-ja-1-5',
    unitId: 'unit-ja-1',
    languageCode: 'ja',
    title: 'Family Members',
    description: 'Learn to talk about your family in Japanese.',
    xpReward: 10,
    goals: [
      { description: 'Name family members in Japanese' },
      { description: 'Introduce your family politely' },
    ],
    vocabulary: [
      { word: 'おかあさん', translation: 'mother', pronunciation: 'okaasan', example: 'わたしのおかあさんです。', exampleTranslation: 'This is my mother.' },
      { word: 'おとうさん', translation: 'father', pronunciation: 'otousan' },
      { word: 'おにいさん', translation: 'older brother', pronunciation: 'oniisan' },
      { word: 'おねえさん', translation: 'older sister', pronunciation: 'oneesan' },
      { word: 'おじいさん', translation: 'grandfather', pronunciation: 'ojiisan' },
      { word: 'おばあさん', translation: 'grandmother', pronunciation: 'obaasan' },
    ],
    phrases: [
      { phrase: 'かぞくをしょうかいします。', translation: 'Let me introduce my family.', pronunciation: 'Kazoku wo shoukai shimasu.' },
      { phrase: 'きょうだいはいますか？', translation: 'Do you have siblings?', pronunciation: 'Kyoudai wa imasu ka?' },
    ],
    activities: [
      { type: 'multiple_choice', question: 'What does "おとうさん" mean?', options: ['mother', 'sister', 'grandfather', 'father'], correctIndex: 3 },
      { type: 'match_pairs', pairs: [{ left: 'おかあさん', right: 'mother' }, { left: 'おとうさん', right: 'father' }, { left: 'おにいさん', right: 'older brother' }, { left: 'おばあさん', right: 'grandmother' }] },
    ],
    aiTeacherPrompt: {
      topic: 'Japanese Family Members',
      systemPrompt:
        'You\'re teaching only this lesson: Japanese family vocabulary. ' +
        'Your words are おかあさん (okaasan) = mother, おとうさん (otousan) = father, おにいさん (oniisan) = older brother, おねえさん (oneesan) = older sister, おじいさん (ojiisan) = grandfather, おばあさん (obaasan) = grandmother. ' +
        'Teach each word with romaji and a natural example, ask the student about their own family, and briefly mention that Japanese uses different words for your own family versus others\'. ' +
        'Stay within this lesson only.',
      teachingPoints: ['おかあさん=mother, おとうさん=father (used for others)', 'おにいさん=older brother, おねえさん=older sister', 'In Japanese, different words are used for your own family vs. others\''],
      exampleDialogue: 'Teacher: きょうだいはいますか？\nStudent: はい、おにいさんがひとりいます。(Yes, I have one older brother.)',
    },
  },
  {
    id: 'lesson-ja-1-6',
    unitId: 'unit-ja-1',
    languageCode: 'ja',
    title: 'At the Restaurant',
    description: 'Order food and navigate a Japanese restaurant.',
    xpReward: 10,
    goals: [
      { description: 'Order food and drinks in Japanese' },
      { description: 'Use polite restaurant expressions' },
    ],
    vocabulary: [
      { word: 'メニュー', translation: 'menu', pronunciation: 'menyuu' },
      { word: 'おみず', translation: 'water', pronunciation: 'omizu' },
      { word: 'てんいん', translation: 'staff / server', pronunciation: 'ten-in' },
      { word: 'ちゅうもん', translation: 'order', pronunciation: 'chuumon' },
      { word: 'おかいけい', translation: 'the bill', pronunciation: 'okaikei' },
      { word: 'おいしい', translation: 'delicious', pronunciation: 'oishii' },
    ],
    phrases: [
      { phrase: 'これをください。', translation: 'I\'ll have this, please.', pronunciation: 'Kore wo kudasai.' },
      { phrase: 'おかいけいをおねがいします。', translation: 'The bill, please.', pronunciation: 'Okaikei wo onegaishimasu.' },
    ],
    activities: [
      { type: 'multiple_choice', question: 'How do you say "delicious" in Japanese?', options: ['おみず', 'メニュー', 'おいしい', 'ちゅうもん'], correctIndex: 2 },
      { type: 'match_pairs', pairs: [{ left: 'メニュー', right: 'menu' }, { left: 'おみず', right: 'water' }, { left: 'おかいけい', right: 'the bill' }, { left: 'おいしい', right: 'delicious' }] },
    ],
    aiTeacherPrompt: {
      topic: 'Japanese Restaurant Experience',
      systemPrompt:
        'You\'re teaching only this lesson: Japanese restaurant vocabulary. ' +
        'The key words and phrases are メニュー (menyuu) = menu, おみず (omizu) = water, てんいん (ten-in) = staff, ちゅうもん (chuumon) = order, おかいけい (okaikei) = bill, おいしい (oishii) = delicious, "これをください" (I\'ll have this, please) and "おかいけいをおねがいします" (The bill, please). ' +
        'Role-play a restaurant visit — guide the student through ordering and paying, one phrase at a time. ' +
        'Stay within this lesson only.',
      teachingPoints: ['これをください = I\'ll have this, please', 'おかいけいをおねがいします = The bill, please', 'おいしい = delicious — great to say after eating!'],
      exampleDialogue: 'Teacher (waiter): ご注文は？(What would you like?)\nStudent: これをください。(I\'ll have this.)\nTeacher: かしこまりました！(Certainly!)',
    },
  },
);

// ═══════════════════════════════════════════════════════════════════════════
// BENGALI — additional lessons
// ═══════════════════════════════════════════════════════════════════════════

lessons.push(
  {
    id: 'lesson-bn-1-3',
    unitId: 'unit-bn-1',
    languageCode: 'bn',
    title: 'Numbers 1–10',
    description: 'Count from one to ten in Bengali.',
    xpReward: 10,
    goals: [
      { description: 'Count from 1 to 10 in Bengali' },
      { description: 'Use numbers in everyday sentences' },
    ],
    vocabulary: [
      { word: 'এক', translation: 'one', pronunciation: 'Ek' },
      { word: 'দুই', translation: 'two', pronunciation: 'Dui' },
      { word: 'তিন', translation: 'three', pronunciation: 'Tin' },
      { word: 'চার', translation: 'four', pronunciation: 'Char' },
      { word: 'পাঁচ', translation: 'five', pronunciation: 'Panch' },
      { word: 'দশ', translation: 'ten', pronunciation: 'Dash' },
    ],
    phrases: [
      { phrase: 'আপনার বয়স কত?', translation: 'How old are you?', pronunciation: 'Apnar boyos koto?' },
      { phrase: 'আমার বয়স ___ বছর।', translation: 'I am ___ years old.', pronunciation: 'Amar boyos ___ bochor.' },
    ],
    activities: [
      { type: 'multiple_choice', question: 'What does "পাঁচ" mean?', options: ['three', 'four', 'five', 'six'], correctIndex: 2 },
      { type: 'match_pairs', pairs: [{ left: 'এক', right: 'one' }, { left: 'দুই', right: 'two' }, { left: 'তিন', right: 'three' }, { left: 'দশ', right: 'ten' }] },
    ],
    aiTeacherPrompt: {
      topic: 'Bengali Numbers 1–10',
      systemPrompt:
        'You\'re teaching only this lesson: Bengali numbers 1 to 10. ' +
        'The numbers are এক (Ek), দুই (Dui), তিন (Tin), চার (Char), পাঁচ (Panch), ছয় (Chhoy), সাত (Shat), আট (At), নয় (Noy), দশ (Dash). ' +
        'Introduce them in small groups with pronunciation, count together out loud, and practice "আমার বয়স ___ বছর." ' +
        'Stay within numbers 1–10 only.',
      teachingPoints: ['এক=1, দুই=2, তিন=3, চার=4, পাঁচ=5', 'ছয়=6, সাত=7, আট=8, নয়=9, দশ=10'],
      exampleDialogue: 'Teacher: এক, দুই, তিন... (one, two, three...)\nStudent: চার, পাঁচ! (four, five!)',
    },
  },
  {
    id: 'lesson-bn-1-4',
    unitId: 'unit-bn-1',
    languageCode: 'bn',
    title: 'Colors',
    description: 'Learn the basic colors in Bengali.',
    xpReward: 10,
    goals: [
      { description: 'Name basic colors in Bengali' },
      { description: 'Describe objects using color words' },
    ],
    vocabulary: [
      { word: 'লাল', translation: 'red', pronunciation: 'Lal' },
      { word: 'নীল', translation: 'blue', pronunciation: 'Nil' },
      { word: 'সবুজ', translation: 'green', pronunciation: 'Shobuj' },
      { word: 'হলুদ', translation: 'yellow', pronunciation: 'Holud' },
      { word: 'কালো', translation: 'black', pronunciation: 'Kalo' },
      { word: 'সাদা', translation: 'white', pronunciation: 'Shada' },
    ],
    phrases: [
      { phrase: 'এটা কি রঙ?', translation: 'What color is this?', pronunciation: 'Eta ki rong?' },
      { phrase: 'এটা লাল।', translation: 'It is red.', pronunciation: 'Eta lal.' },
    ],
    activities: [
      { type: 'multiple_choice', question: 'What does "নীল" mean?', options: ['red', 'blue', 'green', 'yellow'], correctIndex: 1 },
      { type: 'match_pairs', pairs: [{ left: 'লাল', right: 'red' }, { left: 'নীল', right: 'blue' }, { left: 'সবুজ', right: 'green' }, { left: 'হলুদ', right: 'yellow' }] },
    ],
    aiTeacherPrompt: {
      topic: 'Bengali Colors',
      systemPrompt:
        'You\'re teaching only this lesson: Bengali colors. ' +
        'Your words are লাল (Lal) = red, নীল (Nil) = blue, সবুজ (Shobuj) = green, হলুদ (Holud) = yellow, কালো (Kalo) = black, and সাদা (Shada) = white. ' +
        'Introduce each color one at a time using a familiar everyday object as an example, then ask the student to say it back. ' +
        'Stay within these six colors only.',
      teachingPoints: ['লাল=red, নীল=blue, সবুজ=green', 'হলুদ=yellow, কালো=black, সাদা=white'],
      exampleDialogue: 'Teacher: আকাশের রঙ কি? (What color is the sky?)\nStudent: নীল! (Blue!)',
    },
  },
  {
    id: 'lesson-bn-1-5',
    unitId: 'unit-bn-1',
    languageCode: 'bn',
    title: 'Family Members',
    description: 'Learn to talk about your family in Bengali.',
    xpReward: 10,
    goals: [
      { description: 'Name family members in Bengali' },
      { description: 'Introduce your family members' },
    ],
    vocabulary: [
      { word: 'মা', translation: 'mother', pronunciation: 'Ma', example: 'আমার মা খুব ভালো।', exampleTranslation: 'My mother is very kind.' },
      { word: 'বাবা', translation: 'father', pronunciation: 'Baba' },
      { word: 'ভাই', translation: 'brother', pronunciation: 'Bhai' },
      { word: 'বোন', translation: 'sister', pronunciation: 'Bon' },
      { word: 'দাদা', translation: 'grandfather', pronunciation: 'Dada' },
      { word: 'দাদি', translation: 'grandmother', pronunciation: 'Dadi' },
    ],
    phrases: [
      { phrase: 'এটা আমার পরিবার।', translation: 'This is my family.', pronunciation: 'Eta amar poribar.' },
      { phrase: 'আপনার কি ভাই বোন আছে?', translation: 'Do you have siblings?', pronunciation: 'Apnar ki bhai bon ache?' },
    ],
    activities: [
      { type: 'multiple_choice', question: 'What does "বাবা" mean?', options: ['mother', 'sister', 'father', 'brother'], correctIndex: 2 },
      { type: 'match_pairs', pairs: [{ left: 'মা', right: 'mother' }, { left: 'বাবা', right: 'father' }, { left: 'ভাই', right: 'brother' }, { left: 'বোন', right: 'sister' }] },
    ],
    aiTeacherPrompt: {
      topic: 'Bengali Family Members',
      systemPrompt:
        'You\'re teaching only this lesson: Bengali family vocabulary. ' +
        'Your words are মা (Ma) = mother, বাবা (Baba) = father, ভাই (Bhai) = brother, বোন (Bon) = sister, দাদা (Dada) = grandfather, and দাদি (Dadi) = grandmother. ' +
        'Teach each word using "আমার ___" (my ___) in a natural sentence, then ask the student about their own family. ' +
        'Stay within this lesson\'s vocabulary only.',
      teachingPoints: ['মা = mother, বাবা = father', 'ভাই = brother, বোন = sister', 'দাদা = grandfather, দাদি = grandmother'],
      exampleDialogue: 'Teacher: আপনার কি ভাই বোন আছে?\nStudent: হ্যাঁ, আমার একটি বোন আছে। (Yes, I have one sister.)',
    },
  },
  {
    id: 'lesson-bn-1-6',
    unitId: 'unit-bn-1',
    languageCode: 'bn',
    title: 'Daily Routines',
    description: 'Learn to talk about your everyday activities in Bengali.',
    xpReward: 10,
    goals: [
      { description: 'Describe daily routines in Bengali' },
      { description: 'Use common action verbs in simple sentences' },
    ],
    vocabulary: [
      { word: 'ঘুমানো', translation: 'to sleep', pronunciation: 'Ghumano', example: 'আমি রাতে ঘুমাই।', exampleTranslation: 'I sleep at night.' },
      { word: 'খাওয়া', translation: 'to eat', pronunciation: 'Khawa' },
      { word: 'পড়া', translation: 'to read / study', pronunciation: 'Pora' },
      { word: 'কাজ করা', translation: 'to work', pronunciation: 'Kaj kora' },
      { word: 'হাঁটা', translation: 'to walk', pronunciation: 'Hata' },
      { word: 'কথা বলা', translation: 'to speak', pronunciation: 'Kotha bola' },
    ],
    phrases: [
      { phrase: 'আমি প্রতিদিন সকালে ওঠি।', translation: 'I wake up every morning.', pronunciation: 'Ami protidin shokale othi.' },
      { phrase: 'আপনি কখন ঘুমান?', translation: 'When do you sleep?', pronunciation: 'Apni kokhon ghuman?' },
    ],
    activities: [
      { type: 'multiple_choice', question: 'What does "খাওয়া" mean?', options: ['to sleep', 'to eat', 'to walk', 'to work'], correctIndex: 1 },
      { type: 'match_pairs', pairs: [{ left: 'ঘুমানো', right: 'to sleep' }, { left: 'খাওয়া', right: 'to eat' }, { left: 'হাঁটা', right: 'to walk' }, { left: 'পড়া', right: 'to read' }] },
    ],
    aiTeacherPrompt: {
      topic: 'Bengali Daily Routines',
      systemPrompt:
        'You\'re teaching only this lesson: Bengali daily routine verbs. ' +
        'Your words are ঘুমানো (Ghumano) = to sleep, খাওয়া (Khawa) = to eat, পড়া (Pora) = to read/study, কাজ করা (Kaj kora) = to work, হাঁটা (Hata) = to walk, and কথা বলা (Kotha bola) = to speak. ' +
        'Introduce each verb with a short natural example sentence like "আমি রাতে ঘুমাই" (I sleep at night), then ask the student to describe their own day. ' +
        'Stay within this lesson\'s vocabulary only.',
      teachingPoints: ['ঘুমানো = to sleep, খাওয়া = to eat', 'পড়া = to read/study, কাজ করা = to work', 'হাঁটা = to walk, কথা বলা = to speak'],
      exampleDialogue: 'Teacher: আপনি সকালে কি করেন? (What do you do in the morning?)\nStudent: আমি খাই এবং পড়ি। (I eat and study.)',
    },
  },
);

export function getLessonsByUnit(unitId: string): Lesson[] {
  return lessons.filter((l) => l.unitId === unitId);
}

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id);
}

export function getLessonsByLanguage(languageCode: string): Lesson[] {
  return lessons.filter((l) => l.languageCode === languageCode);
}
