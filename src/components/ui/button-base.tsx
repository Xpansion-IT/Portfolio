import { BaseButtonProps } from "@/types/buttons";

const baseClasses =
  "h-10 px-4 py-2 rounded-md font-medium tracking-wide text-sm flex items-center justify-center gap-2 cursor-pointer disabled:pointer-events-none active:scale-[0.98]";

export function ButtonBase({
  children,
  className = "",
  ...props
}: BaseButtonProps) {
  const combinedClassName = `${baseClasses} ${className}`.trim();

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
