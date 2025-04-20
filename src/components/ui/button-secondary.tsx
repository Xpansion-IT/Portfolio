import { BaseButtonProps } from "@/types/buttons";
import { ButtonBase } from "./button-base";

const defaultButtonClasses =
  "bg-accent hover:bg-accent/90 disabled:bg-accent/50 disabled:text-text/70 transition text-text border border-transparent";

const outlineButtonClasses =
  "bg-transparent hover:bg-accent disabled:border-accent/50 disabled:text-accent/50 transition text-accent hover:text-text border border-accent";

export default function ButtonSecondary({
  children,
  className = "",
  variant = "default",
  ...props
}: BaseButtonProps) {
  const selectedClasses =
    variant == "default" ? defaultButtonClasses : outlineButtonClasses;
  const mergedClassName = `${selectedClasses} ${className}`.trim();

  return (
    <ButtonBase className={mergedClassName} {...props}>
      {children}
    </ButtonBase>
  );
}
