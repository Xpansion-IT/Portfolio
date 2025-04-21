"use client";

import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTranslations } from "next-intl";
import { headerLinks } from "./header-links";
import { Link } from "@/i18n/navigation";

export default function NavMobile() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const t = useTranslations("SiteHeader");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div className="relative z-[600]">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-center"
      >
        {open ? (
          <IoMdClose className="text-text text-xl" />
        ) : (
          <GiHamburgerMenu className="text-text text-xl" />
        )}
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-[500]"
            onClick={() => setOpen(false)}
          />

          <div
            ref={menuRef}
            className="fixed top-16 right-0 w-full bg-background/90 backdrop:blur-2xl border border-secondary/10 shadow-lg p-4 z-[500] animate-fade-in-down"
          >
            {headerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-text/80 font-medium hover:text-text/100 text-base tracking-wide py-2 border-b border-secondary/10"
                onClick={() => setOpen(false)}
              >
                {t(link.name)}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
