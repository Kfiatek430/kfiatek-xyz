"use client";

import React, { useState } from "react";
import WorkExperienceButton from "../ui/WorkExperienceButton";
import TechnologyBadge from "../ui/TechnologyBadge";

type WorkExperience = {
  position: string;
  company: string;
  time: string;
  description: string[];
  technologies: string[];
};

const WorkExperience = () => {
  const data: WorkExperience[] = [
    {
      position: "Software Developer",
      company: "Descope",
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
      time: "Sierpień 2024",
      description: [
        "Implementacja systemu zarządzania flotą samochodową firmy",
        "Zapewnianie wsparcia technicznego dla klientów",
      ],
      technologies: ["PHP", "MySQL"],
    },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  const handleChange = (idx: number) => {
    setCurrentIdx(idx);
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 w-full md:w-1/2">
      <div className="flex flex-row md:flex-col w-full md:w-1/3">
        {data.map((item, idx) => (
          <WorkExperienceButton
            key={idx}
            idx={idx}
            handleChange={handleChange}
            text={item.position}
            isActive={currentIdx === idx}
          />
        ))}
      </div>
      <div className="flex flex-col gap-5 w-full md:w-2/3 min-h-[330px]">
        <h3 className="text-lg">
          {data[currentIdx].position}
          <span className="text-primary"> @{data[currentIdx].company}</span>
        </h3>
        <p className="font-mono">{data[currentIdx].time}</p>
        <ul className="opacity-80 flex flex-col gap-1">
          {data[currentIdx].description.map((description) => (
            <li className="relative pl-5">{description}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1">
          {data[currentIdx].technologies.map((item, idx) => (
            <TechnologyBadge key={idx} text={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
