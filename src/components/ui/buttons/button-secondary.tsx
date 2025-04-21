import { BaseButtonProps } from "@/types/buttons";
import { ButtonBase } from "./button-base";

const defaultButtonClasses =
  "bg-text hover:bg-text/90 disabled:bg-text/50 disabled:text-background/70 transition text-background border border-transparent";

const outlineButtonClasses =
  "bg-transparent hover:bg-text disabled:border-text/50 disabled:text-text/50 transition text-text hover:text-background border border-text";

export default function Buttontext({
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
