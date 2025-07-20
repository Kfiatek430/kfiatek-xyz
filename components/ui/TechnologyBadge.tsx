interface TechnologyBadgeProps {
  text: string;
}

const TechnologyBadge = ({ text }: TechnologyBadgeProps) => {
  return (
    <div className="w-fit p-1 px-1.5 rounded text-primary bg-primary/20">
      {text}
    </div>
  );
};

export default TechnologyBadge;
