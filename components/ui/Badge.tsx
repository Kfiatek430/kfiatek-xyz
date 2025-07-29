interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => {
  return (
    <div className="w-fit p-1 px-1.5 rounded text-primary bg-primary/20">
      {text}
    </div>
  );
};

export default Badge;
