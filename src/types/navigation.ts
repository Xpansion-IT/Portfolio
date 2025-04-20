import { LinkProps } from "next/link";
import { ReactNode } from "react";

export interface NavLinkProps extends LinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}
