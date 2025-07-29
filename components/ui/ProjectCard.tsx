import Badge from "./Badge";

interface ProjectTileProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  featuredProject: boolean;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  github,
  featuredProject,
}: ProjectTileProps) => {
  const baseClasses =
    "bg-slate-800 shadow-xl flex justify-between flex-1 flex-col gap-5 p-5 rounded-xl transition-all duration-300 hover:shadow-2xl";
  const featuredClasses = "border-2 border-primary ring-1 ring-primary";

  return (
    <div className={`${baseClasses} ${featuredProject ? featuredClasses : ""}`}>
      <div className="flex flex-col gap-5">
        <h3 className="text-xl">{title}</h3>
        <p className="opacity-80">{description}</p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-1.5 flex-wrap">
          {technologies.map((tech, idx) => (
            <Badge key={idx} text={tech} />
          ))}
        </div>

        <a
          className="text-primary transition-colors inline-flex items-center gap-1"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Wyświetl na GitHubie
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
