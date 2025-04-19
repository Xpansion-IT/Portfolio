import { BaseButtonProps, ButtonBase } from "./button-base";

const buttonClasses = "bg-primary hover:bg-primary/90 transition text-text";

export default function ButtonPrimary({
  href,
  children,
  linkProps,
  className = "",
  ...props
}: BaseButtonProps) {
  const mergedClassName = `${buttonClasses} ${className}`.trim();

  return (
    <ButtonBase
      href={href}
      linkProps={linkProps}
      className={mergedClassName}
      {...props}
    >
      {children}
    </ButtonBase>
  );
}
