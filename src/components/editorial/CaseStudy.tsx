import { useTranslations } from "next-intl";
import { homeServicesGalleries, homeServicesSite, homeServicesStack, lifecycle } from "@/lib/data";
import { Gallery } from "../Gallery";
import { Reveal } from "../ui/Reveal";

const views = ["customer", "manager", "worker", "admin"] as const;
const facts = [
  ["problemLabel", "problem"],
  ["builtLabel", "built"],
  ["roleLabel", "role"],
] as const;

export function EditorialCaseStudy() {
  const t = useTranslations("caseStudy");

  const aside = Object.fromEntries(
    views.map((key) => [
      key,
      <>
        <div className="label">{t(`views.${key}.kicker`)}</div>
        <h3 className="text-[26px] font-medium tracking-[-0.02em]">{t(`views.${key}.title`)}</h3>
        <p className="leading-relaxed text-text">{t(`views.${key}.text`)}</p>
        <div className="mt-auto border-t border-rule pt-5">
          <div className="label">{t("lifecycleLabel")}</div>
          <ol className="mt-2.5 flex flex-wrap items-center gap-1.5 font-mono text-xs">
            {lifecycle.map((state, i) => (
              <li key={state} className="flex items-center gap-1.5">
                <span className="rounded-full border border-rule px-2.5 py-1">{state}</span>
                {i < lifecycle.length - 1 && <span aria-hidden="true">→</span>}
              </li>
            ))}
          </ol>
          <p className="mt-2.5 text-[13px] leading-normal text-muted">{t("lifecycleNote")}</p>
        </div>
      </>,
    ])
  );

  return (
    <section id="work" className="pt-28">
      <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[820px]">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="mt-4 text-[clamp(44px,5vw,68px)] font-medium leading-none tracking-[-0.04em]">
            {t("titleStart")} <span className="serif-accent">{t("titleAccent")}</span>
          </h2>
        </div>
        <div className="flex max-w-[440px] flex-col items-start gap-3">
          <p className="font-mono text-[13px] leading-relaxed text-text">{homeServicesStack.join(" · ")}</p>
          <a
            href={homeServicesSite}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center rounded-full border border-ink px-5 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
          >
            {t("visitSite")} ↗
          </a>
        </div>
      </Reveal>

      <Reveal className="mb-10 grid grid-cols-3 gap-9">
        {facts.map(([label, text]) => (
          <div key={label}>
            <div className="label">{t(label)}</div>
            <p className="mt-2.5 text-[17px] leading-relaxed">{t(text)}</p>
          </div>
        ))}
      </Reveal>

      <Reveal>
        <Gallery
          tone="editorial"
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
