import Link from "next/link";

interface NavbarItemProps {
  text: string;
  href: string;
  isActive: boolean;
}

const NavbarItem = ({ text, href, isActive }: NavbarItemProps) => {
  const baseClasses = "p-2 text-lg text-foreground transition-colors";
  const activeClasses = "link text-primary border-b-2";
  const inactiveClasses = "hover:link hover:text-primary";

  return (
    <Link
      href={href}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      aria-current={isActive ? "page" : undefined}
    >
      {text}
    </Link>
  );
};

export default NavbarItem;
