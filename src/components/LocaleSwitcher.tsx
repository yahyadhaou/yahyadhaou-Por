"use client";

import { useLocale } from "next-intl";
import { useState, useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const labels: Record<string, string> = {
  en: "EN",
  fr: "FR",
  de: "DE",
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [, startTransition] = useTransition();

  function switchTo(next: string) {
    setOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent-b/50 hover:text-foreground"
        aria-label="Change language"
      >
        {labels[locale]}
        <svg width="10" height="10" viewBox="0 0 10 10" className="opacity-60">
          <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" />
        </svg>
      </button>
      {open && (
        <div className="glass-card absolute right-0 top-full mt-2 min-w-[84px] overflow-hidden rounded-xl">
          {routing.locales.map((l) => (
            <button
              key={l}
              type="button"
              onMouseDown={() => switchTo(l)}
              className={`block w-full px-3.5 py-2 text-left font-mono text-xs transition-colors hover:bg-white/5 ${
                l === locale ? "text-accent-b" : "text-muted"
              }`}
            >
              {labels[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
