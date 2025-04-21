import { BaseButtonProps } from "@/types/buttons";

const baseClasses =
  "rounded-md font-medium tracking-wide flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer disabled:pointer-events-none active:scale-[0.98]";

const defaultSize = "h-10 px-4 py-2 text-sm";
const smSize = "h-9 px-3 py-2 text-xs";
const lgSize = "h-12 px-8 py-2 text-[14px]";

export function ButtonBase({
  children,
  className = "",
  size = "default",
  ...props
}: BaseButtonProps) {
  const sizeClasses =
    size === "sm" ? smSize : size === "lg" ? lgSize : defaultSize;

  const combinedClassName = `${baseClasses} ${sizeClasses} ${className}`.trim();

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
