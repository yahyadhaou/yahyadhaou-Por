import { useTranslations } from "next-intl";

export function EditorialFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="mx-auto mt-28 w-full max-w-[1280px] px-8 xl:px-16">
      <div className="flex justify-between gap-4 border-t border-ink pb-10 pt-7 text-sm text-muted">
        <span>© {new Date().getFullYear()} Yahya Dhaou</span>
        <span>{t("location")}</span>
        <span>{t("builtWith")}</span>
      </div>
    </footer>
  );
}
