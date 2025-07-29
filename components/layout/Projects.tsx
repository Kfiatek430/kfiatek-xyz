import React from "react";
import ProjectCard from "../ui/ProjectCard";
import { featured, others } from "@/data/projects";

const Projects = () => {
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
