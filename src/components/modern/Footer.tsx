import { useTranslations } from "next-intl";

export function ModernFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="mx-auto mt-24 w-full max-w-[1200px] px-4 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-rule py-8 text-sm text-muted">
        <span>© {new Date().getFullYear()} Yahya Dhaou</span>
        <span>{t("location")}</span>
        <span>{t("builtWith")}</span>
      </div>
    </footer>
  );
}
