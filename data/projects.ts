type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
};

export const featured: Project[] = [
  {
    title: "OTSW",
    description:
      "Oparte na Javie narzędzie testowe służące do oceny wydajności serwera w różnych warunkach obciążenia. Projekt składa się z wielowątkowego serwera i kompleksowego pakietu testowego, który może symulować wielu współbieżnych klientów.",
    technologies: ["Java"],
    github: "https://github.com/Kfiatek430/OTSW",
  },
  {
    title: "Lights",
    description:
      "Nowoczesna aplikacja internetowa służąca do sterowania inteligentnym systemem oświetlenia domu zbudowana przy użyciu Next.js, TypeScript i komunikacji WebSocket w czasie rzeczywistym.",
    technologies: ["Next.js", "Typescript"],
    github: "https://github.com/Kfiatek430/Lights",
  },
  {
    title: "Algorithms",
    description:
      "Repozytorium zawierające kolekcję różnych algorytmów zaimplementowanych w C++. Obejmuje ono szereg algorytmów sortowania, wyszukiwania, teorii liczb, kryptografii, metod numerycznych i przetwarzania tekstu. ",
    technologies: ["C++"],
    github: "https://github.com/Kfiatek430/Algorithms",
  },
  {
    title: "RedNoticeDashboard",
    description:
      "Aplikacja internetowa, która umożliwia użytkownikom wyszukiwanie, przeglądanie oraz filtrowanie informacji o osobach poszukiwanych przez Interpol.",
    technologies: ["Svelte", "Typescript"],
    github: "https://github.com/Kfiatek430/RedNoticeDashboard",
  },
];

export const others: Project[] = [
  {
    title: "Voice Assistant",
    description:
      "Aplikacja, która umożliwia użytkownikom wykonywanie różnych poleceń za pomocą głosu. Integruje się z wieloma modułami, aby zapewnić funkcje takie jak przeglądanie stron internetowych, informacje o pogodzie i sterowanie systemem.",
    technologies: ["Python"],
    github: "https://github.com/Kfiatek430/VoiceAssistant",
  },
  {
    title: "SudokuAPI",
    description:
      "SudokuAPI to proste RESTful API do generowania, rozwiązywania i sprawdzania poprawności łamigłówek Sudoku. Zapewnia endpointy do tworzenia nowych plansz Sudoku, rozwiązywania danych łamigłówek i sprawdzania poprawności planszy.",
    technologies: ["Java", "Spring Boot"],
    github: "https://github.com/Kfiatek430/SudokuAPI",
  },
  {
    title: "Coinfy",
    description:
      "Nowoczesne narzędzie służące do konwersji walut zbudowane przy użyciu Svelte. Zapewnia codzienne kursy wymiany i wizualizację danych historycznych, aby pomóc użytkownikom być na bieżąco z globalnymi trendami walutowymi.",
    technologies: ["Svelte", "Typescript"],
    github: "https://github.com/Kfiatek430/Coinfy",
  },
  {
    title: "SterowanieLedami",
    description:
      "Aplikacja mobilna służąca do sterowania domowym systemem oświetlenia LED. Projekt wykorzystuje Jetpack Compose do stworzenia nowoczesnego interfejsu użytkownika.",
    technologies: ["Kotlin", "Jetpack Compose"],
    github: "https://github.com/Kfiatek430/SterowanieLedami",
  },
];
