"use client";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { LuLoaderCircle } from "react-icons/lu";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <>
      {isPending ? (
        <>
          <div className="h-10 px-4 text-text py-2 flex items-center justify-center animate-spin">
            <LuLoaderCircle />
          </div>
        </>
      ) : (
        <>
          <select
            onChange={handleChange}
            defaultValue={currentLocale}
            className="h-10 px-4 text-text py-2 text-xs rounded-md font-medium tracking-wide flex items-center justify-center gap-2 cursor-pointer appearance-none outline-none border-none"
          >
            {routing.locales.map((locale) => (
              <option
                key={locale}
                value={locale}
                className="text-text bg-background"
              >
                {locale.toUpperCase()}
              </option>
            ))}
          </select>
        </>
      )}
    </>
  );
}
