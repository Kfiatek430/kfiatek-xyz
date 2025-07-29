type WorkExperience = {
  position: string;
  company: string;
  linkedin: string;
  time: string;
  description: string[];
  technologies: string[];
};

const work_experiences: WorkExperience[] = [
  {
    position: "Software Developer",
    company: "Descope",
    linkedin: "https://www.linkedin.com/company/descope-engineering/",
    time: "Czerwiec 2025 - obecnie",
    description: [
      "Dostosowanie API do nowego flow zaprojektowanego zgodnie z wymaganiami biznesowymi",
      "Tworzenie testów jednostkowych i integracyjnych z wykorzystaniem Jest",
    ],
    technologies: ["Express", "Prisma", "Jest", "Typescript"],
  },
  {
    position: "Full-stack Web Developer",
    company: "RBC Bearings",
    linkedin: "https://www.linkedin.com/company/rbc-bearings/",
    time: "Maj 2025",
    description: [
      "Implementacja sklepu internetowego z systemem uwierzytelniania",
      "Rozwój funkcjonalności i naprawa błędów w istniejących produktach firmy",
      "Tworzenie testów E2E z wykorzystaniem Cypress",
    ],
    technologies: [
      "React",
      "NestJs",
      "MUI",
      "Prisma",
      "MongoDB",
      "Cypress",
      "Typescript",
    ],
  },
  {
    position: "R&D Intern",
    company: "Polcom",
    linkedin: "https://www.linkedin.com/company/polcom/",
    time: "Sierpień 2024",
    description: [
      "Implementacja systemu zarządzania flotą samochodową firmy",
      "Zapewnianie wsparcia technicznego dla klientów",
    ],
    technologies: ["PHP", "MySQL"],
  },
];

export default work_experiences;
