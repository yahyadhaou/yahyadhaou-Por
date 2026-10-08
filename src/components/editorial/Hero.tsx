import Image from "next/image";
import { useTranslations } from "next-intl";
import { cvFiles } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

const factKeys = ["based", "experience", "languages", "stack", "openTo"] as const;
const resultKeys = ["r1", "r2", "r3", "r4"] as const;

export function EditorialHero() {
  const t = useTranslations("hero");
  const tr = useTranslations("results");

  return (
    <>
      <section
        id="top"
        className="grid grid-cols-[minmax(0,1fr)_minmax(300px,380px)] items-stretch gap-12 pb-14 pt-14 xl:gap-16 xl:pt-20"
      >
        <Reveal className="flex min-w-0 flex-col">
          <div className="inline-flex items-center gap-2.5 self-start rounded-full border border-rule px-3.5 py-1.5 font-mono text-xs text-text">
            <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
            {t("badge")}
          </div>
          <h1 className="mt-7 text-[clamp(52px,6.4vw,100px)] font-medium leading-[0.96] tracking-[-0.045em]">
            {t("titleStart")} <span className="serif-accent">{t("titleAccent")}</span>
          </h1>
          <p className="mt-7 max-w-[640px] text-[19px] leading-relaxed text-text">{t("intro")}</p>
          <div className="mt-auto flex flex-wrap gap-3 pt-9">
            <a
              href="#work"
              className="inline-flex min-h-[50px] items-center rounded-full bg-ink px-6 text-[15px] font-medium text-paper transition-opacity hover:opacity-85"
            >
              {t("ctaCase")}
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[50px] items-center rounded-full border border-ink px-6 text-[15px] font-medium transition-colors hover:bg-ink hover:text-paper"
            >
              {t("ctaContact")}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex">
          <aside aria-label={t("factsLabel")} className="flex w-full flex-col rounded-md border border-ink">
            <div className="flex items-center gap-4 border-b border-rule p-5">
              <Image
                src="/images/yahya.jpg"
                alt={t("photoAlt")}
                width={72}
                height={72}
                priority
                className="h-[72px] w-[72px] rounded-full object-cover"
              />
              <div>
                <div className="text-[17px] font-semibold">{t("name")}</div>
                <div className="mt-0.5 text-sm text-muted">{t("role")}</div>
              </div>
            </div>
            <dl className="px-5 py-1 text-[15px]">
              {factKeys.map((key, i) => (
                <div
                  key={key}
                  className={`flex justify-between gap-3 py-3 ${i < factKeys.length - 1 ? "border-b border-rule-soft" : ""}`}
                >
                  <dt className="text-muted">{t(`facts.${key}`)}</dt>
                  <dd className="text-right">{t(`facts.${key}Value`)}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-auto flex gap-2 p-5 pt-4">
              <a
                href={cvFiles.en}
                download
                className="flex min-h-[46px] flex-1 items-center justify-center rounded bg-ink px-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
              >
                {t("cvEn")} ↓
              </a>
              <a
                href={cvFiles.de}
                download
                className="flex min-h-[46px] flex-1 items-center justify-center rounded border border-ink px-3 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
              >
                {t("cvDe")} ↓
              </a>
            </div>
          </aside>
        </Reveal>
      </section>

      <section aria-label={tr("label")} className="grid grid-cols-4 border-y border-ink">
        {resultKeys.map((key) => (
          <div key={key} className="py-7 pr-6">
            <div className="text-[52px] font-medium leading-none tracking-[-0.04em]">{tr(`${key}.value`)}</div>
            <p className="mt-2.5 text-sm leading-snug text-text">{tr(`${key}.text`)}</p>
          </div>
        ))}
      </section>
    </>
  );
}
