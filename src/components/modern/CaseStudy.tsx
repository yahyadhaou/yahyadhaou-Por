import { useTranslations } from "next-intl";
import { ArrowUpRight, Hammer, Layers, UserRound } from "lucide-react";
import { homeServicesGalleries, homeServicesSite, homeServicesStack, lifecycle } from "@/lib/data";
import { Gallery } from "../Gallery";
import { Reveal } from "../ui/Reveal";

const views = ["customer", "manager", "worker", "admin"] as const;
const facts = [
  { label: "problemLabel", text: "problem", Icon: Hammer },
  { label: "builtLabel", text: "built", Icon: Layers },
  { label: "roleLabel", text: "role", Icon: UserRound },
] as const;

export function ModernCaseStudy() {
  const t = useTranslations("caseStudy");

  const aside = Object.fromEntries(
    views.map((key) => [
      key,
      <>
        <div className="label">{t(`views.${key}.kicker`)}</div>
        <h3 className="text-2xl font-semibold tracking-[-0.02em]">{t(`views.${key}.title`)}</h3>
        <p className="leading-relaxed text-text">{t(`views.${key}.text`)}</p>
        <div className="mt-auto rounded-2xl bg-paper-alt p-4">
          <div className="label">{t("lifecycleLabel")}</div>
          <ol className="mt-3 flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
            {lifecycle.map((state, i) => (
              <li key={state} className="flex items-center gap-1.5">
                <span className="rounded-full border border-rule bg-surface px-2.5 py-1">{state}</span>
                {i < lifecycle.length - 1 && (
                  <span aria-hidden="true" className="text-muted">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
          <p className="mt-3 text-[13px] leading-normal text-muted">{t("lifecycleNote")}</p>
        </div>
      </>,
    ])
  );

  return (
    <section id="m-work" className="pt-24 sm:pt-32">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[820px]">
          <p className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 text-[clamp(32px,4.6vw,60px)] font-semibold leading-[1.04] tracking-[-0.04em]">
            {t("titleStart")} <span className="text-highlight">{t("titleAccent")}</span>
          </h2>
        </div>
        <div className="flex max-w-[460px] flex-col items-start gap-3">
          <ul className="flex flex-wrap gap-1.5">
            {homeServicesStack.map((s) => (
              <li key={s} className="rounded-full border border-rule bg-surface px-3 py-1 font-mono text-xs text-text">
                {s}
              </li>
            ))}
          </ul>
          <a
            href={homeServicesSite}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-1.5 rounded-full bg-ink px-5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            {t("visitSite")}
            <ArrowUpRight size={15} />
          </a>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {facts.map(({ label, text, Icon }, i) => (
          <Reveal key={label} delay={0.06 * i} className="h-full">
            <div className="card card-hover h-full p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-paper-alt text-accent">
                <Icon size={18} />
              </span>
              <div className="label mt-5">{t(label)}</div>
              <p className="mt-2 text-[15px] leading-relaxed text-text">{t(text)}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-4">
        <Gallery
          variant="feature"
          galleries={homeServicesGalleries}
          title="HomeServices"
          label={t("galleryLabel")}
          aside={aside}
        />
      </Reveal>
    </section>
  );
}
