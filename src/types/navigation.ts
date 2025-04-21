import { LinkProps } from "next/link";

export interface NavLinkProps extends LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}
