import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "../LocaleSwitcher";
import { ThemeToggle } from "../ThemeToggle";

const links = [
  { href: "#work", key: "work" },
  { href: "#engineering", key: "engineering" },
  { href: "#experience", key: "experience" },
  { href: "#contact", key: "contact" },
] as const;

export function EditorialNavbar() {
  const t = useTranslations("nav");
  const tHero = useTranslations("hero");

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        {t("skip")}
      </a>
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-8 py-3 xl:px-16">
        <a href="#top" className="flex items-baseline gap-2.5">
          <span className="text-[17px] font-semibold">Yahya Dhaou</span>
          <span className="label text-[11px]">{tHero("role")}</span>
        </a>
        <nav aria-label={t("primary")} className="flex items-center gap-7 text-[15px]">
          {links.map((l) => (
            <a key={l.key} href={l.href} className="transition-colors hover:text-accent">
              {t(l.key)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LocaleSwitcher tone="editorial" />
          <ThemeToggle tone="editorial" />
        </div>
      </div>
    </header>
  );
}
