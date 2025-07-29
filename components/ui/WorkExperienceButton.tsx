interface WorkExperienceButtonProps {
  text: string;
  idx: number;
  handleChange: (idx: number) => void;
  isActive: boolean;
}

const WorkExperienceButton = ({
  text,
  idx,
  handleChange,
  isActive,
}: WorkExperienceButtonProps) => {
  const baseClasses =
    "p-3 cursor-pointer transition-all duration-300 border-b-2 md:border-l-2 md:border-b-0 text-start flex-1 md:flex-none";
  const activeClasses = "border-primary text-primary bg-secondary";
  const inactiveClasses =
    "border-transparent hover:bg-secondary hover:text-primary";

  return (
    <button
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      onClick={() => handleChange(idx)}
      role="tab"
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
    >
      {text}
    </button>
  );
};

export default WorkExperienceButton;
