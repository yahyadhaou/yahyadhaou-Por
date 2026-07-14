import { useTranslations } from "next-intl";
import { socials } from "@/lib/data";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} Yahya Dhaou. {t("rights")}</p>
        <div className="flex items-center gap-6">
          <a href={socials.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
            GitHub
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
