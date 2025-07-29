import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
};

const Button = ({ children, href }: ButtonProps) => {
  return (
    <Link
      href={href}
      className="text-primary border-2 border-primary p-3 rounded cursor-pointer hover:bg-primary/20 transition-colors duration-300"
    >
      {children}
    </Link>
  );
};

export default Button;
