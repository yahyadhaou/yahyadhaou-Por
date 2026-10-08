"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher({ tone = "modern" }: { tone?: "modern" | "editorial" }) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: (typeof routing.locales)[number]) {
    startTransition(() => {
      router.replace(pathname, { locale: next, scroll: false });
    });
  }

  return (
    <div
      role="group"
      aria-label={t("language")}
      aria-busy={isPending}
      className={
        tone === "modern"
          ? "inline-flex rounded-full border border-rule bg-paper-alt p-0.5 font-mono text-[11px]"
          : "flex gap-0.5 font-mono text-xs"
      }
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          aria-pressed={l === locale}
          onClick={() => switchTo(l)}
          className={
            tone === "modern"
              ? `h-9 min-w-9 rounded-full px-2.5 uppercase transition-colors ${
                  l === locale ? "bg-surface text-ink shadow-card" : "text-muted hover:text-ink"
                }`
              : `h-10 min-w-10 rounded border px-2 uppercase transition-colors ${
                  l === locale ? "border-ink bg-ink text-paper" : "border-transparent text-muted hover:text-ink"
                }`
          }
        >
          {l}
        </button>
      ))}
    </div>
  );
}
