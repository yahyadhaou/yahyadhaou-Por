import { useTranslations } from "next-intl";
import { alsoInPlace, decisionKeys } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

const clientNodes = ["customer", "provider", "admin"] as const;
const nextSteps = ["next1", "next2", "next3"] as const;

export function EditorialEngineering() {
  const t = useTranslations("engineering");

  return (
    <section id="engineering" aria-labelledby="engineering-title" className="bp-grid mt-28 text-bp-text">
      <div className="mx-auto max-w-[1280px] px-8 py-24 xl:px-16">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 border-b border-bp-border pb-5">
          <div>
            <p className="eyebrow !text-bp-amber">{t("eyebrow")}</p>
            <h2
              id="engineering-title"
              className="mt-3.5 text-[clamp(30px,4vw,54px)] font-medium leading-none tracking-[-0.03em]"
            >
              {t("titleStart")} <span className="serif-accent text-bp-cyan">{t("titleAccent")}</span>
            </h2>
          </div>
          <span className="font-mono text-[13px] text-bp-muted">{t("meta")}</span>
        </Reveal>

        <Reveal className="mt-11">
          <figure aria-label={t("diagramLabel")} className="m-0">
            <div className="grid grid-cols-3 gap-5">
              {clientNodes.map((key) => (
                <div key={key} className="border border-bp-cyan bg-bp-surface p-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-bp-cyan">
                    {t(`nodes.${key}.tag`)}
                  </div>
                  <div className="mt-2.5 text-xl font-medium">{t(`nodes.${key}.title`)}</div>
                  <div className="mt-3 font-mono text-xs text-bp-muted">{t(`nodes.${key}.meta`)}</div>
                </div>
              ))}
            </div>
            <div className="flex h-16 items-center justify-center gap-3.5">
              <div className="h-full w-px bg-bp-cyan" aria-hidden="true" />
              <span className="font-mono text-xs text-bp-amber">{t("flow")}</span>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
              <div className="flex-[0_1_520px] border border-bp-amber bg-[#1a1f2a] px-6 py-5">
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-bp-amber">{t("api.tag")}</div>
                <div className="mt-2.5 text-[22px] font-medium">{t("api.title")}</div>
                <p className="mt-1.5 text-sm leading-normal text-bp-soft">{t("api.text")}</p>
              </div>
              <div className="flex-[0_1_260px] border border-dashed border-bp-muted px-6 py-5">
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-bp-muted">{t("push.tag")}</div>
                <div className="mt-2.5 text-lg font-medium">{t("push.title")}</div>
                <p className="mt-1.5 text-[13px] leading-normal text-bp-soft">{t("push.text")}</p>
              </div>
            </div>
            <div className="flex h-12 justify-center" aria-hidden="true">
              <div className="h-full w-px bg-bp-amber" />
            </div>
            <div className="flex justify-center">
              <div className="flex-[0_1_320px] border border-dashed border-bp-muted px-5 py-4 text-center">
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-bp-muted">{t("db.tag")}</div>
                <div className="mt-2 text-xl font-medium">{t("db.title")}</div>
              </div>
            </div>
          </figure>
        </Reveal>

        <h3 className="mb-6 mt-20 font-mono text-[13px] font-medium uppercase tracking-[0.08em] text-bp-muted">
          {t("decisionsTitle")}
        </h3>
        <div className="grid grid-cols-2 gap-5 xl:grid-cols-3">
          {decisionKeys.map((key, i) => (
            <Reveal key={key} delay={(i % 3) * 0.06}>
              <article className="flex h-full flex-col gap-2.5 border border-bp-border bg-bp-surface p-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-bp-amber">
                  {String(i + 1).padStart(2, "0")} · {t(`decisions.${key}.tag`)}
                </div>
                <h4 className="text-xl font-medium leading-snug">{t(`decisions.${key}.title`)}</h4>
                <p className="text-[15px] leading-relaxed text-bp-soft">{t(`decisions.${key}.text`)}</p>
                <p className="mt-auto pt-1 text-sm leading-normal text-bp-muted">{t(`decisions.${key}.note`)}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-5">
          <div className="flex-[1_1_380px] border border-bp-border p-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-bp-cyan">{t("alsoTitle")}</div>
            <ul className="mt-3.5 flex flex-wrap gap-2 font-mono text-xs">
              {alsoInPlace.map((item) => (
                <li key={item} className="border border-bp-border px-2.5 py-1.5 text-bp-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-[1_1_380px] border border-dashed border-bp-amber p-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-bp-amber">{t("nextTitle")}</div>
            <ul className="mt-3.5 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-bp-soft">
              {nextSteps.map((key) => (
                <li key={key}>{t(key)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
