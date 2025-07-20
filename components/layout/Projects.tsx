import React from "react";
import ProjectCard from "../ui/ProjectCard";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
};

const Projects = () => {
  const featured: Project[] = [
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
        "Nowoczesna aplikacja internetowa do sterowania inteligentnym systemem oświetlenia domu zbudowana przy użyciu Next.js, TypeScript i komunikacji WebSocket w czasie rzeczywistym.",
      technologies: ["Next.js", "Typescript"],
      github: "https://github.com/Kfiatek430/Lights",
    },
    {
      title: "Algorithms",
      description:
        "Repozytorium zawierające kolekcję różnych algorytmów zaimplementowanych w C++. Obejmuje ono szereg podstawowych algorytmów sortowania, wyszukiwania, teorii liczb, kryptografii, metod numerycznych i przetwarzania tekstu. ",
      technologies: ["C++"],
      github: "https://github.com/Kfiatek430/Algorithms",
    },
    {
      title: "RedNoticeDashboard",
      description:
        "Aplikacja internetowa, która umożliwia użytkownikom wyszukiwanie i przeglądanie informacji o osobach poszukiwanych przez Interpol. Aplikacja pobiera dane z interfejsu API Interpolu i prezentuje je w przyjaznym dla użytkownika interfejsie.",
      technologies: ["Svelte", "Typescript"],
      github: "https://github.com/Kfiatek430/RedNoticeDashboard",
    },
  ];

  const others: Project[] = [
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
        "SudokuAPI to proste API RESTful do generowania, rozwiązywania i sprawdzania poprawności łamigłówek Sudoku. Zapewnia endpointy do tworzenia nowych plansz Sudoku, rozwiązywania danych łamigłówek i sprawdzania poprawności planszy.",
      technologies: ["Java", "Spring Boot"],
      github: "https://github.com/Kfiatek430/SudokuAPI",
    },
    {
      title: "Coinfy",
      description:
        "Nowoczesne narzędzie służące do konwersji walut i analiz finansowych zbudowane przy użyciu Svelte. Zapewnia codzienne kursy wymiany, wizualizację danych historycznych i analizy finansowe, aby pomóc użytkownikom być na bieżąco z globalnymi trendami walutowymi.",
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

  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-7xl">
      <h3 className="text-2xl font-bold">Polecane</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5 w-full">
        {featured.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            featuredProject={true}
          />
        ))}
      </div>
      <h3 className="text-2xl font-bold">Pozostałe</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5 w-full">
        {others.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            featuredProject={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
