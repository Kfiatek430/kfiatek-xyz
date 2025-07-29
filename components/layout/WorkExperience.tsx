"use client";

import React, { useState } from "react";
import WorkExperienceButton from "../ui/WorkExperienceButton";
import Badge from "../ui/Badge";
import work_experiences from "@/data/work_experiences";

const WorkExperience = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleChange = (idx: number) => {
    setCurrentIdx(idx);
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 w-full md:w-1/2">
      <div className="flex flex-row md:flex-col w-full md:w-1/3">
        {work_experiences.map((item, idx) => (
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
          {work_experiences[currentIdx].position}
          <a
            href={work_experiences[currentIdx].linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            {" "}
            @{work_experiences[currentIdx].company}
          </a>
        </h3>
        <p className="font-mono">{work_experiences[currentIdx].time}</p>
        <ul className="opacity-80 flex flex-col gap-1">
          {work_experiences[currentIdx].description.map((description, idx) => (
            <li key={idx} className="relative pl-5">
              {description}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1">
          {work_experiences[currentIdx].technologies.map((item, idx) => (
            <Badge key={idx} text={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
