import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { ComponentProps } from "react";

export interface BaseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: ReactNode;
  linkProps?: Omit<ComponentProps<typeof Link>, "href">;
  className?: string;
}

const baseClasses =
  "h-10 px-4 py-2 rounded-md font-medium tracking-wide text-sm flex items-center gap-2 cursor-pointer";

export function ButtonBase({
  href,
  children,
  linkProps,
  className = "",
  ...props
}: BaseButtonProps) {
  const combinedClassName = `${baseClasses} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} {...linkProps}>
        <button className={combinedClassName}>{children}</button>
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
