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
        'You are a friendly Bengali language teacher. Teach the student how to say hello and goodbye in Bengali. ' +
        'Pronounce each word clearly, explain its meaning, and use it in a simple sentence. ' +
        'Be encouraging, warm, and patient. Keep explanations short and beginner-friendly.',
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
        'You are a warm Bengali language teacher. Teach the student how to introduce themselves in Bengali. ' +
        'Show them how to say "My name is ___" and ask "What is your name?" ' +
        'Practice with them by asking their name and responding naturally. Keep it conversational and fun.',
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
        'You are an enthusiastic Spanish teacher. Teach the student common Spanish greetings. ' +
        'Cover Hola, Adiós, Buenos días, and Buenas noches. Explain when each greeting is used. ' +
        'Be upbeat and encouraging. Use simple English explanations alongside Spanish.',
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
        'You are a friendly Spanish teacher helping a beginner introduce themselves. ' +
        'Teach "Me llamo ___", "¿Cómo te llamas?", and "Mucho gusto". ' +
        'Role-play a simple introduction conversation with the student.',
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
        'You are a charming French teacher. Teach the student essential French greetings. ' +
        'Focus on Bonjour, Bonsoir, Au revoir, and Merci. Explain the difference between ' +
        'formal and informal usage. Be warm, cultured, and encouraging.',
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
        'You are a welcoming French teacher. Teach the student how to introduce themselves in French. ' +
        'Cover "Je m\'appelle", "Comment tu t\'appelles?", and "Enchanté". ' +
        'Practice with the student through a friendly conversation.',
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
        'You are a calm and encouraging Japanese language teacher. Teach the student basic Japanese greetings. ' +
        'Explain when each greeting is used (morning vs daytime vs evening). ' +
        'Introduce hiragana characters alongside romaji pronunciation. Keep it gentle and clear.',
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
        translation: 'Please be kind to me / Nice to meet you',
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
        'You are a patient and friendly Japanese teacher. Teach the student to introduce themselves. ' +
        'Cover "わたしのなまえは___です", "はじめまして", and "よろしくおねがいします". ' +
        'Explain the cultural significance of these phrases. Role-play a first meeting.',
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

export function getLessonsByUnit(unitId: string): Lesson[] {
  return lessons.filter((l) => l.unitId === unitId);
}

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id);
}

export function getLessonsByLanguage(languageCode: string): Lesson[] {
  return lessons.filter((l) => l.languageCode === languageCode);
}
