import { NavLinkProps } from "@/types/navigation";
import Link from "next/link";

export default function NavLink({
  children,
  href,
  className,
  ...props
}: NavLinkProps) {
  return (
    <Link
      href={href}
      {...props}
      className={`${className} transition text-text/80 font-medium hover:text-text/100 text-sm tracking-wide`}
    >
      {children}
    </Link>
  );
}
