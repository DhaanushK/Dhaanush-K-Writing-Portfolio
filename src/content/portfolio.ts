import portraitAsset from "@/assets/Profile Pic.png";
import suspiciousCover from "@/assets/Suspicious.png";
import fakeFriendshipCover from "@/assets/Fake Friendship... Real Murders....png";
import cvAsset from "@/assets/Dhaanush Writer Resume.pdf";

/* =========================================================
   IDENTITY
   ========================================================= */

export const portrait = portraitAsset;

export const identity = {
  name: "DHAANUSH K",
  penName: "Kaviyan Sendhan",
  roles: ["SCREENWRITER", "SCRIPT WRITER", "CREATIVE WRITER", "CONTENT WRITER"],
  heroQuote: "I write stories for the screen, the page, and everything in between.",
  statement:
    "I didn't mean to get changed. But the people around me sculpted me into the ‘Beautiful Soul’ I became. So, I chose to write about them.",
  literaryIntro: "The space that I choose over people to share what is never said and what is never understandable is Writing.",
};

/* =========================================================
   ABOUT / BIO
   ========================================================= */

export const bio: string[] = [
  "It was in 2021 that I began to write crime fiction and published my earlier works under my real name, Dhaanush. The beginning stage of my work was focused on constructing logical ideas, researching things, and building suspense, which helped me develop my art.",

  "As my life transitioned from school to college, it took me in directions I never expected, and my writing followed that journey along with me. From there, I started to write about the people I met on this journey, the relationships I built with them, the memories we created, and the moments hidden behind the ordinary days spent with them. In this journey, poetry became another way of exploring my inner emotions. Through it, I discovered my feelings about love, Humane Relationships, and it became the starting point for me to enter my non-fiction life.",

  "As my character and emotions transitioned, Dhaanush became Kaviyan Sendhan, carrying forward everything I learned as Dhaanush while exploring stories through a slightly more cinematic lens. My work moves between fiction, poetry, and screenwriting, with a particular interest in stories that can entertain an audience while leaving something behind after the final scene.",
];

export const progression = [
  {
    year: "2021",
    title: "DHAANUSH",
    detail: "Early fiction and crime writing",
  },
  {
    year: "2022",
    title: "THE CINEMATIC SHIFT",
    detail: "Beginning to explore screenplay writing and stories intended for cinema",
  },
  {
    year: "",
    title: "KAVIYAN SENDHAN",
    detail: "A broader writing identity shaped by people, memory, emotion, and relationships",
  },
];

/* =========================================================
   WRITING PROCESS
   ========================================================= */

export const process: string[] = [
  "For me, stories often begin with a feeling rather than a plot.",

  "Music, memories, places, and human relationships often become the starting points. I observe the way people talk, the silences between their words, the small gestures they make, and how relationships change over time. Sometimes a song reminds me of a particular moment; sometimes a place makes me imagine a character who belongs there.",

  "I collect these emotions and moments and gradually connect them into a story. While writing, I tend to see the story cinematically—I imagine the locations, background sounds, expressions, pauses, and how a scene might move visually.",

  "In the end, my process is less about inventing events and more about asking:",

  "‘What emotion is hidden behind this ordinary moment?’",

  "And then building a story around the answer.",
];

/* =========================================================
   PUBLISHED BOOKS
   ========================================================= */

export const booksIntro =
  "Published works shaped by an early fascination with crime, suspense, human behaviour, and the darker logic of people.";

export type Book = {
  index: string;
  title: string;
  subtitle?: string;
  genre: string;
  publisher: string;
  year: string;
  synopsis: string[];
  link: string;
  cover?: string;
};

export const books: Book[] = [
  {
    index: "01",
    title: "SUSPICIOUS: WAY OF BRUTALISM",
    genre: "Psychological Crime Thriller",
    publisher: "Notion Press",
    year: "2021",

    synopsis: [
      "A city. A killer. A trail of clues designed to stay one step ahead.",

      "A serial killer taunts an entire city with letters, coded clues, and a name of his own choosing, daring investigators to catch him before the next victim.",

      "A psychological thriller built on twisted logic, mounting dread, and a killer who always seems to be one step ahead.",
    ],

    link: "https://drive.google.com/file/d/1QvpNxZ3OA_6jiKgre21XOJORbdHWAqIL/view?usp=sharing",

    cover: suspiciousCover,
  },

  {
    index: "02",
    title: "FAKE FRIENDSHIP... REAL MURDERS...",
    subtitle: "BETRAYAL PENALTIES DEATH",
    genre: "Psychological Crime Thriller",
    publisher: "Amazon Kindle",
    year: "2020",

    synopsis: [
      "When friendship becomes the perfect disguise for murder, trust becomes the most dangerous weakness.",

      "A trusted friendship becomes the perfect cover for a killer hiding in plain sight, while a detective spends decades unraveling a trail designed never to be found.",

      "A slow-burn psychological thriller about betrayal, obsession, and the danger of misplaced trust.",
    ],

    link: "https://drive.google.com/file/d/1MeI33fucJOPc7QR65VZ62qKJRDpVe0Ev/view?usp=sharing",

    cover: fakeFriendshipCover,
  },
];

/* =========================================================
   ONGOING WORK
   ========================================================= */

export const ongoing = {
  title: "NEE KAATRU NAAN MARAM",
  tamilTitle: "நீ காற்று நான் மரம்",
  status: "ONGOING MANUSCRIPT",

  synopsis: [
    "A young college student enters a new chapter of his life expecting ordinary days, new friendships, and the possibility of love. Instead, college becomes the place where he discovers friendship, brotherhood, love, loss, and family.",

    "As the years pass, the people around him become more than friends. They become the people who carry him through laughter, mistakes, dreams, and the moments he cannot face alone. He experiences a love whose value becomes clearest only after losing it.",

    "Heartbreak gradually changes him. His relationships suffer, his dreams lose their meaning, and he begins to lose pieces of himself. But when everything seems lost, his friends and family remain.",

    "Nee Kaatru Naan Maram follows his journey from innocence to love, from love to loss, from loss to destruction, and finally toward redemption.",

    "Sometimes, the people who leave our lives are not the end of our story. They become the reason we begin writing the next chapter.",
  ],
};

/* =========================================================
   JOURNEY
   ========================================================= */

export const journeyLine = [
  "There was a boy who began by learning how to construct stories.",
  "Over time, he became more interested in understanding the people inside them.",
];

export const journeySteps = [
  "Dhaanush",
  "crime fiction",
  "research and logical storytelling",
  "transition into college and life",
  "poetry and human relationships",
  "cinematic thinking",
  "Kaviyan Sendhan",
  "screenwriting and broader storytelling",
];

/* =========================================================
   WRITING RANGE
   ========================================================= */

export const writingRange = [
  {
    index: "01",
    title: "SCREENWRITING",
    detail: "Scenes, structure, cinematic storytelling",
  },

  {
    index: "02",
    title: "SCRIPT WRITING",
    detail: "Characters, dialogue, narrative progression",
  },

  {
    index: "03",
    title: "CREATIVE WRITING",
    detail: "Fiction, literary storytelling, human relationships",
  },

  {
    index: "04",
    title: "CONTENT WRITING",
    detail: "Available for creative and narrative-led content projects",
  },
];

/* =========================================================
   CONTACT
   ========================================================= */

export const contact = {
  email: "dhaanushk2004@gmail.com",
  phone: "9597680677",

  linkedin: "https://www.linkedin.com/in/dhaanush-k-72426927a",

  linkedinLabel: "linkedin.com/in/dhaanush-k-72426927a",

  cv: cvAsset,

  supporting: "For stories, scripts, creative projects, and words that need a writer.",
};

/* =========================================================
   SCREENPLAY
   ========================================================= */

export const screenplayIntro =
  "Opening sequence from the screenplay in progress — written scene by scene, in the language it was first imagined in.";

export type SceneBlock = {
  heading?: string;
  cue?: string;
  character?: string;
  text?: string;
};

export type Scene = {
  number: string;
  slug: string;
  blocks: SceneBlock[];
};

export const scenes: Scene[] = [
  {
    number: "SCENE 01",
    slug: "INT. HOME – DAWN",

    blocks: [
      {
        text: "HERO AVARODA VEETLA THOONGITU IRUKAARU. KONJA NERAM KALICHU ALARM ADIKIDHU AND ANDHA ALARM SOUND KETA ODANE, ANDHA ALARM AH OFF PANNITU, HERO ENDHIRICHU BED LA PADUTHURUNDHA POSTURE LAYE ENDHIRICHU BED LA SAANJU UKKANDHU KAI ELLAM STRETCH PANNI KONJAM RELAX PANRAARU. THEN BED LA IRUNDHU ENDHIRICHU THOOKA KALAKATHULA ENDHIRICHU AVARU ROOM LA IRUKURA ORU CHAIR MELA IRUKURA TOWEL AH EDUTHUTU BATHROOM KULLA KULIKA PORAARU.",
      },

      {
        heading: "a. INT. HOME – CONTINUOUS",

        text: "HERO BATHROOM LA IRUNDHU THALA THOVATHITE VELIYA VARAARU. VELIYA VANDHUTU, AVARODA DRESS CUPBOARD LA IRUNDHU ORU SHIRT AND PANT EDUTHU POTUTU READY AAGITU ORU LETTER EZHUDHURAARU.",
      },

      {
        heading: "b. INT. AMMA APPA ROOM – CONTINUOUS",

        text: "ANDHA LETTER AH EDUTHUTU HERO AVANGA AMMA APPA ROOM KU POITU ANDHA LETTER AH AVANGA BEDROOM SHELF MELA ORU PAPER-WEIGHT BALL UH KU KEELA VACHUTU AVANGA AMMA APPA THOONGITU IRUKURADHA PAATHUTU ORU CHINNA SMILE PANNITU ANDHA ROOM AH VITTU POIDUVAARU.",
      },
    ],
  },

  {
    number: "SCENE 02",
    slug: "INT/EXT. HOME – DAWN",

    blocks: [
      {
        text: "HERO AVARODA VEETLA IRUNDHU VANDHU BIKE LA POITU UKKARURAARU. APPO ANDHA TIME LA, HERO-KU ORU PHONE CALL VARUDHU. HERO ANDHA PHONE AH ATTEND PANRAARU. ORU 10-15 SECONDS HERO SILENT AH ANDHA CALL AH LISTEN PANNITU, ADHUKU APRM,",
      },

      {
        character: "HERO",
        text: "SERI... NAA PAATHUKUREN.",
      },

      {
        cue: "CUT TO:",
      },

      {
        heading: "a. EXT. HOME – DAWN",

        text: "HERO ANDHA PHONE AH CUT PANRAARU. CUT PANNADHUKU APRM, AVARODA BIKE (HERO SPLENDOR 100CC 2001) AH START PANRADHUKAGA KEY PODRAARU.",
      },

      {
        cue: "CUT TO:",
      },

      {
        text: "KEY POTADHUKU APRM, ANDHA BIKE ODA KICKER AH ADIPAARU",
      },

      {
        cue: "FADE IN:",
      },

      {
        cue: "(HERO REAL NAME IN)",
      },

      {
        text: "KICKER ADICHU BIKE START AANA ODANE, BIKE VEETLA IRUNDHU KELAMBUM AND BIKE WILL GO IN RIGHT SIDE OF THE HOME.",
      },

      {
        cue: "CUT TO:",
      },

      {
        heading: "b. EXT. TEA KADAI – CONTINUOUS",

        text: "HERO TEA KADAI VAZHIYA POGUMBODHU, ANDHA TIME LA ANDHA KADAI LA VELA PAATHUTU IRUNDHA ANNA WASH BASIN KITTA NINNUTU GLASS LAM KAZHUVI VACHUTU IRUPAARU.",
      },

      {
        text: "CORRECT AH HERO ANDHA KADAI AH CROSS PANNI POGUMBODHU, TEA KADAI ANNA CORRECT AH GLASS AH KAZHUVI MUDICHITU BOILER KITTA ORU RADIO MATTI VACHURUPAARU; ANDHA RADIO VA ON PANNUVAARU.",
      },

      {
        text: "APPO CORRECT AH “NEE KAATRU NAAN MARAM SONG FROM MOVIE NILAAVE VAA” PLAY AAGUM.",
      },

      {
        cue: "(TITLE CARD)",
      },

      {
        heading: "c. EXT. COLLEGE – CONTINUOUS",

        text: "(SONG RUNNING IN BACKGROUND) HERO COLLEGE KU TRAVEL PANNITU IRUKAARU... AND COLLEGE OOTY LA IRUKU... AND CORRECT AH HERO OOTY LA HILLS LA ERUMBODHU MAZHAI PEIYA START AAYIRUDHU. SO, HERO HAIR PIN BEND ERUMBODHU ORU TEA KADAI LA BIKE AH NIRUTHITU... KADAI LA ORU TEA VAANGITU VANDHU ANDHA KADAI ODA ORU PILLAR LA SAANJU NINNUTU TEA KUDICHITU AND MAZHAI VIDURA VARAIKUM ANDHA KADAI LA WAIT PANITU IRUPAARU.",
      },
    ],
  },
];

/* =========================================================
   POETRY
   ========================================================= */

export const poetryIntro =
  "Poems written as Kaviyan Sendhan, in Tamil — where the feeling arrives before the story does.";

export type Poem = {
  englishTitle: string;
  tamilTitle: string;
  lines: string[];
};

export const poems: Poem[] = [
  {
    englishTitle: "She Was the Reason...",
    tamilTitle: "காரணம் அவளே...",

    lines: [
      "சித்தன் புரியும் தவமென,",
      "இவ்வுடல், கவிதை இல்லா",
      "ஓர் தவம் புரிந்தன.",
      "புனிதமின்றி இருந்த தவமானது,",
      "ஏதேனும் ஓர் வழியால்",
      "கலைந்தன.",
      "கலைந்ததும் புரிந்தவை,",
      "காரணம் அவளென்று.",
      "",

      "கோழியின் கையினில்",
      "பேனா என,",
      "வார்த்தை வர தவித்ததில்",
      "ஏதேதோ கிறுக்கிய எமக்கு,",
      "மீண்டும் நான் பயின்ற",
      "என் வார்த்தை விளையாட்டினை",
      "எமக்கே பரிசாக வந்தன.",
      "பார்த்ததும் புரிந்தவை,",
      "காரணம் அவளென்று.",
      "",

      "ஆயிரம் ஊக்கங்கள் வந்துவிடினும்,",
      "அவற்றை அனைத்தும்",
      "தானே விலகக் கண்டேன்.",
      "விலகியதில், என் சிந்தனையெனும்",
      "ஓர் தண்டவாளம்,",
      "வளைவுகளின்றி, அக்கணம் முதல்",
      "ஓர் பாதையில் மட்டுமே தொடர்ந்தன.",
      "சேரும் இடம் தெரிந்ததும்",
      "எமக்கு புரிந்தவை,",
      "காரணம் அவளென்று.",
      "",

      "வசியம் செய்தாலோ",
      "என்று விளங்கவில்லை...",
      "நான் தீட்டத் தவிக்கும்",
      "ஆயிரம் கவிகளில்,",
      "தலைப்பினையாக ஓர் பாவனை",
      "மட்டுமே தொடர்ந்தன...",
      "தெளிந்ததும் புரிந்தவை,",
      "காரணம் அவளென்று.",
      "",

      "அவளின் பாரதியாய் வாழ",
      "இப்பிரபஞ்சம் ஏற்குமோ இல்லையோ",
      "என்பதை நான் அறியேன்...",
      "இருப்பினும்,",
      "எமதின் கண்ணம்மா ஆக அவள் இருக்க,",
      "எம்மனம் ஏற்றுக்கொண்டது.",
      "மாயைகள் கலைய,",
      "எமக்கு புரிந்தவை,",
      "காரணம் அவளென்று...",
      "அவள் மட்டுமே என்று.",
      "",

      "- கவியன் சேந்தன்",
    ],
  },

  {
    englishTitle: "The Heart of Isaivizhi",
    tamilTitle: "இசைவிழியின் இல்லம்",

    lines: [
      "காலங்கள் கடந்தினும்,",
      "சொந்தம் கொண்டாடிட யாருமின்றி",
      "பேய் காடாய் திகழும் என்னுள்,",
      "காலப்போக்கில்,",
      "சற்றும் தாங்க இயலாத",
      "ஒரு கனத்தை உணர்ந்திடவே,",
      "என்னை அவள் பெயருக்கு",
      "கிரையம் செய்துவிட்டு",
      "அதிகாரம் ஏதுமின்றி",
      "என்னுள் வாழத்தொடங்கினாள்",
      "என் இசைவிழி.",
      "",

      "இப்படிக்கு,",
      "அவள் அபகரித்த இதயம்",
      "கவியன் சேந்தன்",
    ],
  },

  {
    englishTitle: "The Sweetness of Waiting",
    tamilTitle: "காத்திருத்தலும் சுகம் அல்லவோ...!",

    lines: [
      "ஆசைகளை அனைத்தும்",
      "அணைக்கட்டி நிறுத்திட முடியுமென்றால்,",
      "இவ்வொன்றை மட்டும்,",
      "ஏன் என்னால் கட்டுக்குள்",
      "அடக்க இயலவில்லை...!",
      "",

      "ஆம்...",
      "அதை கட்டுக்குள்",
      "அடைப்பதும் நானே",
      "அதன் கட்டை",
      "அவிழ்ப்பதும் நானே.",
      "",

      "வேறு என்ன,",
      "அவள் பேசிட மாட்டாளா",
      "என்ற என்",
      "ஏக்கம் கலந்த ஆசையினை அல்லவோ...!!",
      "",

      "அவ்வாறு என்ன ஆசை என,",
      "என் மனதினுள் அமர்ந்து",
      "பல்லாங்குழி ஆடும்",
      "அச்சிறுக்கி என்னைக் கேட்டிடவே,",
      "கவி வரையத் தொடங்கினேன்...",
      "",

      "என் மனதை",
      "ஆக்ரமித்த உனக்கு",
      "என் கைப்பேசியினை",
      "ஆக்ரமிக்க துளி அளவினைக்",
      "கூட கடினமென உணரவில்லையடி.",
      "",

      "என் கைப்பேசியினை",
      "கைப்பற்றி,",
      "என் உரையினுள் முதலாய் அமர்ந்து,",
      "காலம் முழுதும் ஆட்சிப் புரிந்தவளே,",
      "உன்னிடமிருந்து ஓர் தூது",
      "வந்துவிடாதா...!! என்று ஆசை.",
      "",

      "கண் விழித்ததும்",
      "முதல் உரையானது,",
      "கண் உறங்கியதும்",
      "இறுதி உரையானது",
      "உந்தன் மடலாக இருக்க கூடாதா...!!",
      "என்று ஆசை.",
      "",

      "நாள் முழுதும்",
      "என்னுடன் கதைத்திட",
      "மாட்டாயா...!! என்று ஆசை.",
      "",

      "காலம் வரைந்த",
      "இந்த இடைவேளையினில்,",
      "நாம் இருவரும்",
      "அதனைக் கடந்து",
      "பேசிக்கொள்வோமா...!! என்று ஆசை.",
      "",

      "உன் மடலுக்காக",
      "காத்திருக்கும் எந்தன்",
      "காத்திருத்தல் குறையாதா...!! என்று ஆசை.",
      "",

      "காத்திருக்கும் அந்நாள் முழுதும்",
      "உன் நினைவால் மூழ்கிவிட",
      "இயலாதா...!!",
      "அதனால் உன்னை நினைத்து",
      "கவித்தீட்டிட இயலாதா...!!",
      "என்று ஆசை.",
      "",

      "காத்திருக்காமல் இருந்தால்,",
      "இத்தனை சுகம்",
      "கிட்டிடாதா...",
      "நாள் முடிவில் நீ வந்து,",
      "ஓர் முறை பேசிடும் பொழுது...",
      "என அக்காத்திருத்தல் நீளாதா...!!",
      "என்று ஆசை.",
      "",

      "இத்தனைக் குழப்பங்களும்",
      "ஏதேனும் ஓர் நாள்",
      "மறையாதா...!! என்று ஆசை.",
      "",

      "கோடி குழப்பங்கள் இருந்தினும்,",
      "அவற்றை அனைத்தும்",
      "உன்னால் மட்டுமே",
      "வந்துவிடக் கூடாதா...!!",
      "என்று ஆசை...",
      "என் கனவுச் சிறுக்கியே...",
      "",

      "- கவியன் சேந்தன்.",
    ],
  },
];

export const poetSignature = "-கவியன் சேந்தன்";

/* =========================================================
   THENDRAL
   ========================================================= */

/*
 * Canonical source:
 * Short Story-2.docx
 *
 * The portfolio excerpt intentionally ends at:
 * "இதே போல ஒரு வாரம் கடந்தது."
 *
 * The remaining story will be introduced through the
 * expanded reading experience later.
 */

export const thendralTitle = "தென்றல்";

export const thendralSubtitle = "கனவுகளுக்கு இறக்கை தந்த நட்பின் கதை";

export const thendralAuthor = "தனுஷ். கி";

export const thendralExcerpt: string[] = [
  `எல்லோர் வாழ்க்கையிலும் இருக்கும் ஓர்க் கசப்பான உண்மை
என்னவென்றால், “செல்வம் நிறைந்த சொர்க்கத்தைக்
கொண்டாடுவதற்கு, அன்பும் பாசமும் செல்வத்திற்கு மேலானவை”
என்பதுதான். செல்வங்கள் நிறைந்த மலைகளின் மத்தியில், உண்மையான
அன்பு இல்லாததால், அந்தச் செல்வங்கள் வெறும் மித்சிலம்புகுந்த மண் எனவே,
அதன் அழகும், வலியும், நம்மைத் தொட்டுக்கொள்ளாது.`,

  `இக்கதை என் உயிர்த் தோழியின் வாழ்க்கையைத் தழுவி எழுதப்பட்டது. இதில்
வரும் கதாபாத்திரங்கள் அனைத்தும் என் கற்பனையிலிருந்து
உருவாக்கப்பட்டவை.`,

  `தென்றல் எனும் 15 வயதுடைய பெண் ஒருவள் இருந்தாள் . அவளுக்கு ஓர்
அப்பா அம்மா மற்றும் இளந்தங்கை என ஓர் அழகிய குடும்பம் இருந்தது.
தென்றல் ஒரு குழந்தைக் குணம் கொண்ட ஒரு அழகிய பெண். எப்பொழுதும்
துரு துரு வென்று இருக்கும் ஓர் இயற்கை ஆசீர்வதித்த மழலையாகவே எங்கள்
அனைவரும் கண்களில் தென்றல் தெரிந்தால். குடும்பத்தில் மூத்த பெண்ணாக
இருந்ததால், தங்கள் குடும்பத்தின் இளவரசியாக அவள் இருந்தாள்.`,

  `தென்றல் பல ஆசைகளைக் கொண்டவள், மேலும் அவளுக்கான பெரிய
இலக்கானது ஜில்லா ஆட்சியர் (District Magistrate) ஆக வேண்டும். இதற்கான
வழியில், அவளின் குடும்பம் மிகுந்த ஆதரவாக இருந்தது. எனினும், அவளின்
குடும்பத்தின் பொருளாதார நிலை அவளின் இலக்கிறக்கான ஆதரவாக
இருக்கவில்லை. அவளின் அப்பா சைக்கிள் சரி பார்க்கும் ஒரு சிறிய கடை
நடத்துகிறார், அவளின் அம்மா இல்லத்தரசியாக உள்ளார், மேலும் அவளின்
தங்கை 2-ஆம் வகுப்பில் படிக்கும் பள்ளி மாணவி.`,

  `ஒரு நாள் அவளின் குடும்பத்தின் சூழ்நிலைக் கருதி, அவளின் பெற்றோர்கள்
அவளைத் தங்கள் வீட்டில் இருந்து 40-மைல் தூரத்தில் இருக்கும், பெண்கள்
படிக்கும் ஒரு பள்ளிக்கூடத்தில் சேர்த்துவிட்டார்கள். அந்தப் பள்ளிக்கூடத்தில்
தென்றலின் குடும்பத்தால் சமாளிக்க இயலும் ஒரு கட்டணம் இருந்ததால் வேறு
வழியின்றி அங்கு சேர்க்கும் நேரம் வந்தன. அந்தப் பள்ளிக்கூடத்தில் சிறப்பு
என்னவென்றால், தூரத்தில் இருந்து இங்கு வந்து படிக்கும் மாணவிகளுக்கு
மிகக் குறைந்த கட்டணத்தில் இருக்கும் ஒரு விடுதியும் இருந்தது. ஆகவே
இதுவும் எதிர்பார்த்த கட்டனத்திற்குள் இருந்ததால், தென்றலின் பெற்றோர்கள்
அவளை அந்த விடுதியில் சேர்த்துவிட்டார்கள். இதனால் குடும்பத்தைப் பிரிந்து
தன் படிப்பைக் கவனிக்கும் நிலைமைத் தென்றலுக்கு உருவானது.`,

  `எல்லா நேரமும், நாம் எதிர்பார்த்த சூழ்நிலைகள் அமைவது,
பள்ளிக்கூடத்திற்குக் கிளம்பும் நேரத்தில் மழை வருவது போல, மிகவும்
அரிதான ஒன்றாகும். தென்றலின் மனதில் தோன்றிய ஒரு விஷயம், “இங்கு
இருக்கும் அனைவரும் நம்மேல் நாம் எதிர்ப் பார்க்கிற அளவிற்கு அன்பு மற்றும்
பாசத்தைக் காட்டுவார்கள்” என்று. ஆனால் அது போல அமைந்ததா என்று
கேட்டால், இல்லை!.`,

  `தென்றல் எப்படிப் பட்ட பெண் என்றால், தன்னைத் தேடி வந்து உதவி என்று
கேட்கும் அனைவருக்கும், அவர்கள் கேட்டதை எப்பாற்பட்டாவது முடித்துத் தரும்,
ஒரு நல்ல குணம் கொண்ட பெண். இவற்றைப் புரிந்து கொண்ட அங்கு
அவளுடன் படிக்கும் மாணவிகள் அவளிடம் ஏதேனும் அவர்களின் சொந்தக்
காரணங்களுக்காகவே தென்றலிடம் பழகினார்கள். இவற்றையெல்லாம்
தென்றல் அறிந்தும், ஏதும் செய்ய இயலாத நிலையில் இருந்தாள் . ஏனென்றால்,
இவற்றை அறிந்த பிறகு, மாணவிகளிடம் இதைப் பற்றி கேட்டால், அன்பு
கிடைக்காமல் இருந்தாள் கூட இவர்களின் இருப்பு தென்றலுக்கு ஆறுதலாக
இருந்த வேலையில், இதைக் கூறினால், அவர்களின் இருப்பையும் இழந்து
விடுவோம் என்று வருத்தம் கொண்ட அவள், இவற்றை அனைத்தையும்
பொறுத்துக்கொண்டு இருந்தாள் .`,

  `இவற்றை எல்லாம் ஒரு வலியில் வர்ணிக்கையில்,
“தனிமையில் தவிக்கும் குழந்தைப் போல், தோழன் ஒருவன் துணை
இல்லாப்பொழுதில், அந்த உணர்வை மணம் விட்டு மணம் கடத்த
இயலாமல், உள்ளுக்குள் வருத்தங்கள் எனும் வனத்தில் கண்ணைக் கட்டி
காட்டில் விட்டத்துப்போல், முகத்தில் கோமாளியைப் போல முகமூடி
அணிந்து சிரித்துக்கொண்டு இருப்பது போல் மட்டுமே தன் நாட்களைக்
கடத்தும் நிலை எம்மனிதனும் கடந்து போகக்கூடாத பாதை” ஆகும்.`,

  `அவள் படித்த அந்த 4 வருடங்கள் ஒரு மிகுந்த குறையுடன் அந்தப்
பள்ளிப்படிப்பை முடித்தாள். அவள் படித்து விட்டு வீடு திரும்பியபோது, அவளின்
குடும்பத்தார்கள் தென்றலுக்குள் ஏதோ ஒரு மாற்றம் ஒன்றை உணர்ந்தனர்.
அவளின் மனதில் தோன்றிய ஏக்கங்கள் மற்றும் ஆசைகள் அனைத்தும்
அவளின் முகத்தில் பிரதிபலித்தன.`,

  `நாட்கள் கடந்தன, தென்றலுக்கு அவள் வீட்டு பக்கத்தில் இருக்கும் ஒரு
பொறியியல் கல்லூரியில் சீட் கிடைத்தது. ஆனால் அங்கு சேர்ந்தால்,
செரும்போதும் கூட அவளின் மனதில் இருந்த ஏக்கங்கள் தீரும் என்ற
நம்பிக்கையை முற்றிலும் இழந்தது போல தோன்றியது. அவளின்
வகுப்பறையில் பெண்களை விட ஆண்களின் எண்ணிக்கை அதிகமாக
இருந்தது. அதனால் கடுகளவு இருந்த நம்பிக்கைக் கூட இழந்துவிட்டாள்
தென்றல். கல்லூரியில் சேர்ந்ததும் யாரிடமும் பேசாமல் அமைதியாகவே
இருந்தாள். அவளுக்கு யாரிடமும் போய் பேச மனம் வரவில்லை. இதே போல
ஒரு வாரம் கடந்தது.`,
];

/* =========================================================
   VAYATHIRKU APPAAL ORU UNMAI
   ========================================================= */

export const vayathirkuTitle = "வயதிற்கு அப்பால் ஒரு உண்மை";

export const vayathirkuSubtitle = "ஒரு உணர்வுபூர்வமான தமிழ் சிறுகதை";

export const vayathirkuAuthor = "தனுஷ். கி";

export const vayathirkuDescription =
  "A short story exploring responsibility, family, financial pressure, friendship, and the choices made while growing up.";

export const vayathirkuExcerpt: string[] = [
  `இக்கதை சென்னையில் ஓர் கல்லூரியில் இருந்து தொடங்குகிறது. 
தனுஷ் எனும் 20 வயதான ஒருவன், சென்னையில் வேல்டெக்
ஹைடெக் எனும் ஓர் பொறியியல் கல்லூரியில் தனது மூன்றாம் ஆண்டு கணித அறிவியல்
பட்டப்படிப்பை செய்துக்கொண்டிருந்தான். அவனுக்கு ஓர் தந்தை தாயார் மற்றும் ஓர்
அக்கா எனும் அழகிய குடும்பமும் இருந்தன. 
ஆக்குடும்பத்தில்,
தனது 49 வயதாகிய தாயாரான அமுதா தான் வேலைக்கு சென்று தங்களின் குடும்பத்தை
மிகவும் பொறுப்பாக கவனித்துககொள்கின்றனர். 
தனுஷுக்கு தனது
கல்லூரிக்கு புறப்படும் நேரம் கொஞ்சம் முன்பே வந்துவிடும். அவனது கல்லூரி தன்
வீட்டிலிருந்து 50 கி.மீ - யில் உள்ளது. அதனால் தன் வீட்டிலிருந்து விடியக்காலை
5.30 மணிக்கெல்லாம் கிளம்பும் நிலமையாயிற்று. இதனால் தனுஷுக்கு தனது
மதியச்சாப்பாடு வீட்டிலிருந்து கொண்டுப்போகும் சூழ்நிலை அமைந்ததில்லை.`,

  `இக்கணம்
எல்லோருக்கும் ஒரு சந்தேகம் எழும்பும்... தனுஷ்-இன் தாயார் அல்லது தந்தை அவனுக்கு
உணவு செய்துத்தரலாமே என்று... இருவருக்கும் தங்களின் வேலை முடிந்து வீட்டிற்கு
திரும்பும் நேரம் மிகவும் தாமதமாக இருக்கும். இவர்கள் வேலை முடிந்து வீடு
திரும்பும் நேரத்திற்க்கும் தனுஷ் காலையில் விழிக்கும் நேரத்திற்க்கும் ஒரு மணி
நேர இடைவெளி தான் இருக்கும். அதனால் தனுஷ் தனது பெற்றோருக்கு தொந்தரவு தரவேண்டாம்
என்று எண்ணி, தினமும் தனது மதிய உணவை கல்லூரியில் இருக்கும் சிற்றுண்டி தரும் ஓர்
இடத்தில் வாங்கிக்கொள்வான். 
தினமும் இவனது
தாயார் இவனுக்கு மதிய உணவிற்கு பணம் அனுப்பிவிடுவது வழக்கம். தினமும் 100 ரூபாய்
சாப்பிடுவதற்கு கிடைக்கும். அதைவைத்துக் கொண்டு, முடிந்த அளவு ஒன்று அல்லது இரண்டு
நாட்கள் வரை தனது மதிய உணவிற்கு சமாளிக்க முடியும். இதேப்போல் பல நாட்கள் கடந்தன.`,

  `நாட்கள் கடக்கும்
வேலை, தனது வீட்டில் மாதம் வீட்டில் உள்ளவர்களுக்கு மற்றும் வீட்டிற்கு எவ்வளவு
செலவாகிறது என்றும் வீட்டில் எல்லோரும் ஒன்று சேர்ந்து கணக்கிடுவார்கள்.
அப்பொழுதெல்லாம் தனுஷ்-இன் மனதில் தோன்றும் ஒரு சிந்தனை என்னவாக இருக்குமென்றால்,
“ நமதின் மதிய உணவிற்கான செலவானது அம்மாவிற்கு ஒரு பாரமாக அமைந்து விடுமோ” என்று
தான். இதனால் தனது வீட்டில் தனக்கென கேட்கும் உணவிற்கான பணம் குறைய வேண்டும் என்று
தனுஷ் எண்ணினான். 
இந்த எண்ணம் தனது
இரண்டாம் ஆண்டு பயிலும்போதே வந்துவிட்டது மற்றும் அவன் மனதில் நாம் வீட்டில்
உள்ளவர்களுக்கு ஒரு பாரமாக மாறிவிடக்கூடாது என்பதில் தனுஷ் கவனமாக இருந்தான்.`,

  `அவனுக்கு தன்னை சுற்றியிருக்கும் நண்பர்களின் எண்ணங்கள் மற்றும் சிந்தனைகள்
அனைத்தும் ஒன்றே ஒன்றாக இருந்தது; “நம்மால் வீட்டிற்கு எந்த விட பணக்குறைப்பாடு
வந்துவிடக்கூடாது மற்றும் நம்மால் முடிந்த வரை முயற்சித்து வீட்டிற்கு பணம்
சம்பாதித்து கொடுத்தால் அவர்களின் மாத செலவிற்கு மிகவும் உதவியாகவும் இருக்கும்.”
இதனைப்பற்றி, தனது தோழர்களிடம் பேசுவது தனுஷ்-இன் வழக்கமாயிற்று. 
தினமும் தன்
அம்மாவிடம் பணம் கேட்கும் உரையாடல் முன்பு போல எளிதாக இல்லை, தனுஷ்-இன் பேச்சில்
ஓர் நிலையான குரல் ஒலிக்க மறுத்தது. இரு மானப்பாடுகள் கொண்ட எண்ணங்கள் தனது மனதில்
ஒலித்துக்கொண்டே இருந்தன. ஒவ்வொருமுறையும் பணம் வாங்கும் பொழுதெல்லாம் அதனை
முடிந்த அளவிர்க்கு அதிக நாட்களுக்கு செலவழிக்க வேண்டும் என்பதில் தெளிவாக
இருந்தான் தனுஷ்.`,

  `ஆனால் சூழ்நிலைகள் சில நேரங்களில் அவனுக்கு சாதகமாக
அமைந்ததில்லை. இதனால் பணம் வாங்கும் நேரங்கள் அதிகமாக தொடங்கியது. இதை குறைக்க
வேண்டும் என்று எண்ணிய அவன், பல நேரங்களில் உணவு அருந்தாமல் மதியநேரங்களில்
பட்டினியாக இருக்க தொடங்கினான். இத்தனையும் செய்யும்போதெல்லாம் அவன் மனதில் ஒன்றே
ஒன்று தான் ஓடிக்கொண்டு இருக்கும்; “நம்மை நாமலே வருத்திக்கொண்டாலும் பெற்றோருக்கு
கஷ்டம் குடுக்க கூடாது!”. 
ஒரு நாள், தனது
தோழனிடம் தனுஷ் பேசிக்கொண்டிருந்த வேளையில், தனது தோழன் ஒரு நல்ல அரை நேர வேலை
ஒன்றை பற்றி கூறினான்.`,

  `அந்த வேலை எப்படி பட்ட வேலையென்றால், “தினமும் ஐந்து
மணிநேரம் ஒரு கணினி செரிப்பார்க்கும் இடத்தில் வேலை செய்ய வேண்டும். அந்த வேலைக்கு
அவனுக்கு தினமும் நூறு ரூபாய் கிடைக்கும்.“ இதனை கேட்ட உடன், தனுஷ்-இன் மனதில்
ஓர் நிம்மதி உருவானது. அவனின் தோழனிடம் இதை பற்றி நான்கு விசாரித்துக்கொண்டதுடன்
இருவரும் ஓர் முடிவெடுத்தனர்; “இருவரும் தங்களின் குடும்பத்தின் பாரத்தை
குறைக்க ஓர் நல்ல வழி அமைந்துவிட்டது மற்றும் இதனை நன்கு பயன்படுத்திக்கொண்டு
நம்மால் உருவாகும் வீட்டின் செலவை முடிந்த வரை கூரைப்போம்.”`,

  `ஆனால் தனுஷுக்கு
இதனை பற்றி தன் அம்மாவிடம் சொல்வதற்கு மணம் வரவில்லை. ஒருவேளை, வேறு எதும்
பிரச்சனைகள் வந்துவிடுமோ என்று எண்ணி, அவனின் அம்மாவிடம், தன் நண்பனின் வீட்டில்
சிறிது நேரம் படித்துவிட்டு வீட்டிற்கு வருவதாக ஓர் வழியற்ற பொய் ஒன்றை கூறினான்
மற்றும் அதற்கும் அவனது அம்மா சம்மதம் தெரிவித்தனர். ஆகவே, அவனது அரை நேர வேலையில்
சேர்ந்தான் தனுஷ்.`,
];

/* =========================================================
   NEE KAATRU NAAN MARAM
   LONG-FORM MANUSCRIPT
   ========================================================= */

/*
 * Canonical source:
 * Book.odt
 *
 * The long-form manuscript is separate from the screenplay
 * opening sequence.
 *
 * "கதையை ஆரம்பிப்போமா" is the title of the selected
 * opening/chapter, not part of the prose itself.
 */

export const nknmTitle = "நீ காற்று நான் மரம்";

export const nknmStatus = "LONG-FORM FICTION · ONGOING";

export const nknmDescription =
  "A story about a boy who enters college looking for a life, finds friendship and love, loses himself in heartbreak, and discovers that family and true friendship can teach him how to find himself again.";

export const nknmOpeningTitle = "கதையை ஆரம்பிப்போமா";

export const nknmOpeningLabel = "SELECTED OPENING";

export const nknmOpeningPreview: string[] = [
  "நான் வாழ்ந்து முடிந்த இத்தனை வருடங்களில், என் மனம் ஏங்கி வரைந்து வைத்து காத்திருக்கும் அவ்வழகிய இரவானது, இன்றைய இரவாய் இருக்கும் என்று என்னால் கற்பனை செய்ய முடியவில்லை.",

  "அந்த அர்த்த ஜாமத்தில், முழு பிறை இல்லா அந்த அம்புலியும் எங்கள் வீடு முழுதும் அதன் வெளிச்சம் மட்டுமே நிறைந்திருந்தது. செழிப்பாய் வளர்ந்து கம்பீரமாய் நிற்கும் தென்னைமரத்தின் பின் வெட்கப்பட்டு ஒளிந்திருக்கும் அந்நிலவழகியும் என் கற்பனையில் கண்டிராத அவ்வழகை ரசிக்கவே, என்னை சுற்றி அடிக்கும் காற்றினை கூட குளிராக இருந்தினும், என் மனதிற்கு அது இதமாக இருந்தது மற்றும் அந்த குளிரினில், நான் சுவாசிக்கும் மூச்சிற்கு கூட தோற்றம் கிடைத்தது. என்னால் என் மூச்சுக் காற்றினை மிக அழகான புகைப்படலமாய் என்னுள் வந்து செல்வதை காணும்போது, நான் என்னவோ நார்தர்ன் லைட்ஸ் - இல் இருப்பது போலவே அன்றைய இரவு காட்சியளித்தது.",

  "இத்தனை அழகாய் இருக்கும் இந்த இரவினை என்னுடைய மனதில் என்றென்றும் பதிந்திட ஆசை கொண்டேன் என்னை அறியாமலே. அன்று, என் வீட்டில் பின்புற தோட்டத்தில் இந்த இரவினை கழிக்க நானும் என் பிள்ளைகளும் (நெடுமாறன் மற்றும் செந்தமிழ்) முடிவு செய்தோம்.",
];

export const nknmOpeningExcerpt: string[] = [
  `நான் வாழ்ந்து முடிந்த இத்தனை வருடங்களில், என் மனம் ஏங்கி வரைந்து வைத்து காத்திருக்கும் அவ்வழகிய இரவானது, இன்றைய இரவாய் இருக்கும் என்று என்னால் கற்பனை செய்ய முடியவில்லை.`,

  `அந்த அர்த்த ஜாமத்தில், முழு பிறை இல்லா அந்த அம்புலியும் எங்கள் வீடு முழுதும் அதன் வெளிச்சம் மட்டுமே நிறைந்திருந்தது. செழிப்பாய் வளர்ந்து கம்பீரமாய் நிற்கும் தென்னைமரத்தின் பின் வெட்கப்பட்டு ஒளிந்திருக்கும் அந்நிலவழகியும் என் கற்பனையில் கண்டிராத அவ்வழகை ரசிக்கவே, என்னை சுற்றி அடிக்கும் காற்றினை கூட குளிராக இருந்தினும், என் மனதிற்கு அது இதமாக இருந்தது மற்றும் அந்த குளிரினில், நான் சுவாசிக்கும் மூச்சிற்கு கூட தோற்றம் கிடைத்தது. என்னால் என் மூச்சுக் காற்றினை மிக அழகான புகைப்படலமாய் என்னுள் வந்து செல்வதை காணும்போது, நான் என்னவோ நார்தர்ன் லைட்ஸ் - இல் இருப்பது போலவே அன்றைய இரவு காட்சியளித்தது.`,

  `இத்தனை அழகாய் இருக்கும் இந்த இரவினை என்னுடைய மனதில் என்றென்றும் பதிந்திட ஆசை கொண்டேன் என்னை அறியாமலே. அன்று, என் வீட்டில் பின்புற தோட்டத்தில் இந்த இரவினை கழிக்க நானும் என் பிள்ளைகளும் (நெடுமாறன் மற்றும் செந்தமிழ்) முடிவு செய்தோம்.`,

  `என்னவோ தெரியவில்லை... அந்த அமைதியான இரவில், ஏதோ ஓர் பக்கம், இலையில் இருந்து வழிந்து சொட்டும் நீர்த்துளி போல், ஒவ்வொரு சில நொடிகளுக்கு மாறனின் கைபேசி குயிலினை போல ஒளிர்த்துக்கொண்டே இருந்தது. நான் என்னவோ இரவினை ரசித்துக்கொண்டு இருந்தாலும், என் கண்கள் இவர்கள் மேலும் இருந்தது. என்றைக்கும் இல்லாத அளவில், இன்று மாறனின் முகம் வித்தியாசமாய் என் கண்களில் தெரிந்தது. நிமிடத்திற்கு ஓர் முறை, தன் கைபேசியினை பார்த்து வெட்கம் கொள்வது மாறன் வழக்கம் இல்லை.`,

  `இணையாக, நாங்கள் கூடாரம் ஒன்று அமைத்து கொண்டிருந்த பொழுது, கண நேரத்தில் என் மனதில் உதித்த யோசனை என, கூடாரம் முன்பு விறகுகளை கொண்டு அடுக்கி நெருப்பினை மூட்டிவைத்தல் அந்த குளிருக்கும் இதமாய் அது இருக்கும் என்று அதையும் அமைத்தேன். நெருப்பினை மூட்டியதன் பின் இன்னோர் ஆச்சரியம் நடந்தன. எங்களையும் தாண்டி இன்னும் பலருக்கு இதமாய் இருந்திருக்குமோ என்னவோ என்று தெரியவில்லை, எங்களை சுற்றி சட்டென மின்மினிபூச்சிகள் பறக்கவே, அந்த நிலவின் ஒளியையும் சேர்த்து தானும் அந்த இடத்தினை ஓர் ஓவியன் வரைந்த ஓவியம் போல் மாற்றியது.`,

  `ஆனால், அந்த ஓவியத்தில் ஏதோ ஓர் பாகம் குறையாகவே இருக்கிறது என்று என் மனதில் உருத்திக்கொண்டே இருந்தது.`,

  `“தமிழ்..! நான் நம்ம எல்லாருக்கும் பிளாக் காப்பி போட்டு கொண்டு வரேன். அப்போ தான் இந்த நாள் முழுமை அடையும்"`,

  `என்று அந்த இரவை முழுமை ஆக்க யோசனை வந்தது. நான் செல்லும் முன்பு,`,

  `“நான் காப்பி போட்டுட்டு வரதுக்குள்ள இந்த கம்பளிய விரிச்சு மத்தத்தெல்லாம் ரெடி பண்ணி வச்சுருங்க. நான் போய்ட்டு வரேன். பத்திரமா செய்யணும் தமிழ்." என்று சொல்லிவிட்டு வீட்டுக்குள் சென்றேன்.`,

  `இந்நேரம் உங்களுக்குள் இருக்கும் சந்தேகம் என்னவென்று எனக்கு புரிகிறது..? மாறன் எங்கே? என்று தானே.`,

  `நாங்கள் இருவரும் பேசிக்கொண்டிருந்த வேலையிலும், மாறன் தன் கைபேசியை பார்த்து மட்டுமே தான் சிரித்துக் கொண்டிருந்தான். எதற்காக சிரிக்கிறான்..? எதற்காக வெட்கப்படுகிறான்..? என்று ஒன்றும் புரியவில்லை.`,

  `நான் வீட்டினுள் சென்ற பின்பு, இதை கவனித்த செந்தமிழ்,`,

  `“என்ன மாறா…! என்னைக்கும் இல்லாம இன்னைக்கு ரொம்ப சிரிக்கிரியே... என்ன விஷயம்?" என கேட்க,`,

  `“உனக்கு சொன்னா புரியாது தமிழே …!" என மாறன் பதிலளிக்க தமிழின் முகத்தில் வல்லினம் பெருகியது.`,

  `மாறனின் பேச்சினால் தமிழின் மனம் மாறவே, இருவருக்கும் இடையில் வாதம் தொடங்கின. எவ்வாறு... ? என நீங்கள் நினைக்கும் அளவிற்கு அது பெரிதல்ல. இவர்களும் எலியும் பூனையும் ஒன்று தான்.`,

  `எப்படி...? என யோசிக்கிறீர்களா?`,

  `எப்படி எனக்கு புரியாமல் போகும் என தமிழின் முகம் சிவக்க, மாறன் சற்றும் கவனிக்காத கணத்தில், அவன் கையில் இருந்த கைபேசியினை பிடிங்கிக்கொண்டு சமையல் அறையில் இருக்கும் என்னிடம் ஓடி வந்தாள். வெறும் கையை சில வினாடிகளுக்கு பெக்க பெக்க என முழித்துக்கொண்டு இருந்த பின்புதான் அவனுக்கு என்ன ஆனது என்று விளங்கியது. சட்டென்று அவன் விரைந்தோட, அவளை பிடிக்க வந்தான் மாறன். தமிழின் ஆர்வமும் பொங்கி வழியவே, மாறன் எதை பார்த்து இப்படி சிரித்துக்கொண்டு இருந்தான் என அவன் கைபேசியை ஓடும் வழி முழுதும் பார்த்துக்கொண்டே வந்தாள். ஓடி வந்தவள் என் பின் ஒளிந்து கொண்டாள்.`,

  `சமையல் அறைக்கு ஓட்டம் பிடித்த மாறன்,`,

  `“தமிழ பாருங்க பா... அவப்பாட்டுக்கு சொல்லாம என்னோட ஃபோன பிடிங்கிட்டு ஓடி வந்துட்டா. " என என்னிடம் கூற,`,

  `"நான் எதுக்கு பிடிங்கிட்டு ஓடி வந்தேனு சொல்றேன். அண்ணன் ஏதோ ஒரு பொண்ணுக்கு ஒரு கவிதை எழுதி அனுபிருக்கான பா. அந்த கவிதைய அவங்க படிச்சிட்டு வெட்கப்பட்டு மெசேஜ் அனுபிருக்காங்க. அதுனால தான் நம்மக்கிட்ட பேசாம அந்த பொண்ணோட மெசேஜ பார்த்து சிரிச்சிட்டு இருந்தான்." என தமிழ் என்னிடம் கூறிவிட்டாள்.`,

  `இவர்கள் இருவரும் பேசிக்கொண்டு இருக்கும் வேளையில், நான் காப்பியும் தயாரித்து முடித்துவிட்டேன். அதன் பிறகு,`,

  `“சரி மா. அப்படி என்ன கவிதை எழுதிருக்கானு நம்ம கேப்போம். அப்பா காப்பி போட்டு முடிச்சிட்டேன். இப்போ நம்ம வெளிய போய் உக்காறுவோம். " என்று அவர்களின் வாதத்தை சாந்தப்படுத்தி அவர்களை வெளியே கூட்டிச்சென்றேன். நான் இருவரையும் கீழே அமர சொல்லிவிட்டு அவர்களுக்கு காப்பி பரிமாறுவதற்கு தயார் படுத்திக்கொண்டிருந்தேன். அப்பொழுது,`,

  `“ டேய் மாறா…! ஒரு பொண்ணு வெட்கப்படுற அளவுக்கு என்ன கவிதை எழுதுன…? எங்களுக்கும் சொல்லு மாறா. ” என நான் கேட்க,`,

  `“எனக்கு வெட்கமா இருக்கு பா... ” என மாறனின் கன்னங்கள் திடீரென தக்காளிப்பழம் போல் சிவந்தது. இதனை கண்டு எமக்கு, அந்த நிலாவை ரசிக்கவா? இல்லையெனில் என் மகனின் அழகிய வெட்கத்தை ரசிக்கவா? என ஒரு கணம் நேசத்தில் குழம்பி நின்றேன். ஆனால் மாறனின் அழகை விட நிலவோ குறைவுதான்!`,

  `சிறிது நேரம் மௌனத்திற்கு பின்,`,

  `“சரி. நான் சொல்லுவேன் ஆனா நீங்க சிரிக்க கூடாது. ” என மாறன் கூறவே, சாவி போட்ட பொம்மைப்போல், நானும் தமிழும் சரி என்று தலையாட்டினோம். அது என்ன கவிதை என்றால்,`,

  `வசியம் செய்தாயோ`,

  `என்று விளங்கவில்லை...`,

  `நான் தீட்டத் தவிக்கும்`,

  `ஆயிரம் கவிகளின் தலைப்பினை எல்லாம்`,

  `நீ செய்யும் பாவனைகளை மட்டுமே என`,

  `என் சிந்தனைகள் சூழல்கின்றன.`,

  `தெளிந்ததும் புரிந்தவை,`,

  `காரணம் நீ என்று.`,

  `இவன் கூறிய பிறகும் எனக்கு என்ன ஆகியது என்று விளங்கவில்லை, ஆனால் எனக்கு மட்டும் என் இந்த கவிதையை வேறு எங்கேயோ கேட்டதுப்போலவே இருந்தது. அது எங்கே என யோசிக்கும் பொழுது,`,

  `“ நீ எங்க இருந்து அண்ணா கவிதை எல்லாம் எங்க எழுத கத்துகிட்ட..? ” என தமிழ் மிகவும் ஆச்சரியத்துடன் கேட்டாள். சற்றும் யோசிக்காமல்,`,

  `“ இது நான் எழுதுனது இல்ல. இந்த கவிதை அப்பா எழுதுனது. ” என்று மாறன் என்னை பார்த்து கைகாட்டினான். அப்பொழுது தான் எனக்கே விளங்கியது இது நான் எழுதியது தானே என்று.`,

  `“ அதான பார்த்தேன். நீயாவது கவிதை எழுதுறதாவது..! ” என தமிழும் மாறனை கண்டு கேலி செய்ய,`,

  `“ நீ எங்க இருந்துடா என் டைரிய எடுத்த…? ” என நான் சந்தேகத்துடன் மாறனிடம் கேட்க,`,

  `“ டைரியா..? என்ன டைரி அப்பா...? ” என தமிழ் என்னைப்பார்த்து கேட்க,`,

  `“ உங்களோட ரூம்ல ஒரு பழைய டைரி ஒன்னு கண்டுப்பிடிச்சேன். அது ஒரு மாதிரி ரொம்ப பழைய டைரி மாதிரி இருந்துது. அதுல இருந்து தான் எடுத்தேன். ” என்று மாறன் கூற, மாறனிடம் அந்த டைரியை எடுத்து வருமாறு தமிழ் கேட்டாள். அவனும் என்னுடன் அறைக்கு சென்று, அந்த டைரியை எடுத்து வந்து தமிழிடம் கொடுத்தான்.`,

  `அதை வாங்கிய தமிழுக்கு அதன் வெளித்தோற்றத்தை கண்டு மிகவும் ஆர்வம் வந்தது. அவள் அந்த டைரியை திறந்து படிப்பாள் என்று முதலில் எண்ணினேன். ஆனால், முதலில் அவள் அந்த டைரியை முன்னும் பின்னும் திருப்பிப் பார்த்து அதனை தொட்டு உணர்ந்தாள். அதன் பழமை அவளின் கண்களை தன்வசப்படுத்தியது. அந்த டைரியை திறந்தவுடன், அந்த காகிதத்தின் வாசனை அவளுக்கு அந்த பழமையை நினைவிலிருக்கச் செய்தது. இதனை அனைத்தையும் கவனித்துக் கொண்டிருக்கும் எனக்கு, மாறனை விட தமிழுக்கு மட்டுமே அந்த டைரியின் மேல் மிகவும் ஆர்வம் இருந்தது. பிறகு, மெல்ல அதனை திறந்து, ஒவ்வொரு காகிதத்தையும் அவளின் பிஞ்சு விரல்களினால் தொட்டு உணரவே, அந்த பேனா மை பதிந்த தடத்தில் மேலும் இவளின் அழகிய விரல் தடங்களும் பதியவே, அவளின் உயிரும் இக்கவியுடன் இணைந்தது போலவே திகழ்ந்தது.`,
];

/* =========================================================
   THE WRITER'S DESK / ARCHIVE
   ========================================================= */

export type ArchiveItem = {
  index: string;
  title: string;
  tamilTitle?: string;
  kind: string;
  notes: string[];
  link?: string;
  linkLabel?: string;
};

export const archiveIntro =
  "A working shelf of stories, screenplay pages and poems — pieces written along the way, and stories still being written.";

export const archive: ArchiveItem[] = [
  {
    index: "01",

    title: "NEE KAATRU NAAN MARAM",

    tamilTitle: "SCREENPLAY — OPENING SEQUENCE",

    kind: "SCREENPLAY IN PROGRESS",

    notes: [
      "A letter. A phone call. A journey into the rain.",

      "Opening sequence written scene by scene: a dawn departure, a letter left behind, and a ride into the hills.",
    ],

    link: "#screenplay",

    linkLabel: "READ SCREENPLAY",
  },

  {
    index: "02",

    title: "THENDRAL",

    tamilTitle: "தென்றல்",

    kind: "TAMIL SHORT FICTION",

    notes: [
      "Emotionally driven Tamil short fiction centred on friendship, loneliness, dreams and unconditional support.",

      "Themes of emotional healing, human connection, perseverance and selfless companionship, told through character-focused storytelling.",
    ],

    link: "#thendral",

    linkLabel: "READ THENDRAL",
  },

  {
    index: "03",

    title: "VAYATHIRKU APPAAL ORU UNMAI",

    tamilTitle: "வயதிற்கு அப்பால் ஒரு உண்மை",

    kind: "TAMIL SHORT FICTION",

    notes: [
      "An emotionally grounded Tamil short fiction exploring family responsibility, financial struggle and parental sacrifice.",

      "Built around the bond between a mother and son, and the silent struggles inside middle-class families.",
    ],

    link: "#vayathirku-appaal",

    linkLabel: "READ EXCERPT",
  },

  {
    index: "04",

    title: "POETRY",

    tamilTitle: "3 SELECTED POEMS",

    kind: "TAMIL POEMS",

    notes: [
      "Words between moments.",

      "Three selected poems written as Kaviyan Sendhan — exploring love, longing, waiting and the people who become the reason behind everything.",
    ],

    link: "#poetry",

    linkLabel: "READ POETRY",
  },

  {
    index: "05",

    title: "NEE KAATRU NAAN MARAM",

    tamilTitle: "LONG-FORM FICTION",

    kind: "MANUSCRIPT IN PROGRESS",

    notes: [
      "An excerpt from a continuing literary work.",

      "A story about friendship, love, loss, family and finding oneself again.",
    ],

    link: "#manuscript",

    linkLabel: "READ EXCERPT",
  },
];
