import Link from "next/link";
import { GoStack } from "react-icons/go";

export default function SiteLogo({ className }: { className?: string }) {
  return (
    <Link
      href={"/"}
      className={`${className} font-bold text-text text-xl flex gap-2 items-center tracking-wide`}
    >
      <GoStack className="text-primary text-3xl" /> XpansionIT
    </Link>
  );
}
