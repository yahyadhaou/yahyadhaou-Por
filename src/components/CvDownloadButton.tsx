"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const versions = [
  { key: "cvEnglish", href: "/cv/Yahya-Dhaou-CV-EN.pdf" },
  { key: "cvGerman", href: "/cv/Yahya-Dhaou-CV-DE.pdf" },
] as const;

export function CvDownloadButton() {
  const t = useTranslations("hero");
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        className="flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
      >
        {t("ctaCv")}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1v9m0 0L3.5 6.5M7 10l3.5-3.5M1 12.5h12"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="glass-card absolute left-0 top-full z-10 mt-2 min-w-[160px] overflow-hidden rounded-xl">
          <div className="border-b border-border px-3.5 py-2 font-mono text-[10px] uppercase tracking-wide text-muted">
            {t("cvChoose")}
          </div>
          {versions.map((v) => (
            <a
              key={v.key}
              href={v.href}
              download
              onMouseDown={() => setOpen(false)}
              className="block px-3.5 py-2.5 text-sm text-foreground/90 transition-colors hover:bg-white/5 hover:text-accent-b"
            >
              {t(v.key)}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
