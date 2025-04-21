import { TFunction } from "@/types/i18n";
import { headerLinks } from "./header-links";
import { Link } from "@/i18n/navigation";

export default function NavDesktop({ t }: { t: TFunction }) {
  return (
    <div className={`gap-5 flex items-center`}>
      {headerLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="transition text-text/80 font-medium hover:text-text/100 text-sm tracking-wide"
        >
          {t(link.name)}
        </Link>
      ))}
    </div>
  );
}
