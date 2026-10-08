"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { LocaleSwitcher } from "../LocaleSwitcher";
import { ThemeToggle } from "../ThemeToggle";

const links = [
  { href: "#m-work", key: "work" },
  { href: "#m-engineering", key: "engineering" },
  { href: "#m-experience", key: "experience" },
  { href: "#m-contact", key: "contact" },
] as const;

export function ModernNavbar() {
  const t = useTranslations("nav");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
      <a
        href="#m-main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-2 focus:z-10 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        {t("skip")}
      </a>
      <div className="mx-auto max-w-[1200px] rounded-[28px] border border-rule bg-surface/75 shadow-card backdrop-blur-xl supports-[backdrop-filter]:bg-surface/60">
        <div className="flex h-14 items-center justify-between gap-3 pl-5 pr-2">
          <a href="#m-top" className="flex items-center gap-2.5 font-semibold tracking-tight">
            <span
              aria-hidden="true"
              className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink text-[11px] font-bold text-paper"
            >
              YD
            </span>
            <span className="text-[15px]">Yahya Dhaou</span>
          </a>

          <nav aria-label={t("primary")} className="hidden items-center gap-1 text-sm md:flex">
            {links.map((l) => (
              <a
                key={l.key}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-text transition-colors hover:bg-paper-alt hover:text-ink"
              >
                {t(l.key)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <div className="hidden sm:block">
              <LocaleSwitcher />
            </div>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="m-mobile-menu"
              aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-rule md:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div id="m-mobile-menu" className="border-t border-rule px-3 pb-4 pt-2 md:hidden">
            <nav aria-label={t("primary")} className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.key}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-base transition-colors hover:bg-paper-alt"
                >
                  {t(l.key)}
                </a>
              ))}
            </nav>
            <div className="mt-2 px-3 sm:hidden">
              <LocaleSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
