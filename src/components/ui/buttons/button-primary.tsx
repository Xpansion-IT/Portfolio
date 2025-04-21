import { BaseButtonProps } from "@/types/buttons";
import { ButtonBase } from "./button-base";

const defaultButtonClasses =
  "bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:text-text/70 transition text-text border border-transparent";

const outlineButtonClasses =
  "bg-transparent hover:bg-primary disabled:border-primary/50 disabled:text-primary/50 transition text-primary hover:text-text border border-primary";

export default function ButtonPrimary({
  children,
  className = "",
  variant = "default",
  size,
  ...props
}: BaseButtonProps) {
  const selectedClasses =
    variant == "default" ? defaultButtonClasses : outlineButtonClasses;
  const mergedClassName = `${selectedClasses} ${className}`.trim();

  return (
    <ButtonBase className={mergedClassName} size={size} {...props}>
      {children}
    </ButtonBase>
  );
}
