import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { cvFiles, stackMarquee } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

const factKeys = ["based", "experience", "languages", "openTo"] as const;
const resultKeys = ["r1", "r2", "r3", "r4"] as const;

export function ModernHero() {
  const t = useTranslations("hero");
  const tr = useTranslations("results");

  return (
    <section id="m-top" className="relative pt-28 sm:pt-32 lg:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] dot-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[420px] w-[min(900px,90vw)] -translate-x-1/2 rounded-full bg-[var(--glow)] blur-3xl"
      />

      <div className="grid gap-4 lg:grid-cols-12">
        <Reveal className="flex flex-col justify-center lg:col-span-8 lg:pr-8">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-rule bg-surface px-3.5 py-1.5 text-[13px] text-text shadow-card">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            {t("badge")}
          </div>
          <h1 className="mt-6 text-[clamp(40px,6.2vw,84px)] font-semibold leading-[1.02] tracking-[-0.045em]">
            {t("titleStart")} <span className="text-highlight">{t("titleAccent")}</span>
          </h1>
          <p className="mt-6 max-w-[620px] text-lg leading-relaxed text-text">{t("intro")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#m-work"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[15px] font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              {t("ctaCase")}
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#m-contact"
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-rule bg-surface px-6 text-[15px] font-medium shadow-card transition-transform hover:-translate-y-0.5"
            >
              {t("ctaContact")}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-4">
          <aside
            aria-label={t("factsLabel")}
            className="card grid h-full gap-5 p-4 sm:grid-cols-[200px_1fr] sm:p-5 lg:grid-cols-1 lg:grid-rows-[auto_1fr]"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-auto sm:h-full lg:aspect-[4/3] lg:h-auto">
              <Image
                src="/images/yahya.jpg"
                alt={t("photoAlt")}
                fill
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 200px, 360px"
                className="object-cover object-[center_25%]"
              />
              <div className="absolute inset-x-3 bottom-3 rounded-xl bg-black/45 px-3 py-2 text-white backdrop-blur-md">
                <div className="text-[15px] font-semibold">{t("name")}</div>
                <div className="text-xs text-white/80">{t("role")}</div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <dl className="text-sm">
                {factKeys.map((key) => (
                  <div key={key} className="flex justify-between gap-3 border-b border-rule-soft py-2.5 last:border-0">
                    <dt className="text-muted">{t(`facts.${key}`)}</dt>
                    <dd className="text-right font-medium">{t(`facts.${key}Value`)}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <a
                  href={cvFiles.en}
                  download
                  className="inline-flex h-11 items-center justify-center gap-1.5 rounded-xl bg-ink px-3 text-[13px] font-medium text-paper transition-opacity hover:opacity-85"
                >
                  <Download size={14} />
                  {t("cvEn")}
                </a>
                <a
                  href={cvFiles.de}
                  download
                  className="inline-flex h-11 items-center justify-center gap-1.5 rounded-xl border border-rule px-3 text-[13px] font-medium transition-colors hover:bg-paper-alt"
                >
                  <Download size={14} />
                  {t("cvDe")}
                </a>
              </div>
            </div>
          </aside>
        </Reveal>
      </div>

      <section aria-label={tr("label")} className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {resultKeys.map((key, i) => (
          <Reveal key={key} delay={0.05 * i} className="h-full">
            <div className="card card-hover h-full p-5 sm:p-6">
              <div className="text-highlight text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                {tr(`${key}.value`)}
              </div>
              <p className="mt-3 text-sm leading-snug text-text">{tr(`${key}.text`)}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <div
        aria-hidden="true"
        className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
      >
        <div className="flex w-max animate-marquee gap-3">
          {[...stackMarquee, ...stackMarquee].map((item, i) => (
            <span
              key={i}
              className="rounded-full border border-rule bg-surface px-4 py-2 font-mono text-[13px] text-text"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
