"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./LocaleSwitcher";

const links = ["about", "skills", "projects", "experience", "contact"] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl px-5 transition-all duration-300 sm:px-6 ${
          scrolled ? "glass-card py-2.5 shadow-lg shadow-black/20" : "py-1"
        }`}
      >
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-foreground"
        >
          YD<span className="text-accent-b">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M0 1h16M0 6h16M0 11h16" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="glass-card mx-4 mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden">
          {links.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {t(key)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
