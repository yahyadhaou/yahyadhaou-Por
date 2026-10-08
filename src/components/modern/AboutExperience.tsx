import { useTranslations } from "next-intl";
import { experienceItems, toolbox } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

export function ModernAboutExperience() {
  const t = useTranslations("about");
  const te = useTranslations("experience");

  return (
    <section id="m-experience" className="grid gap-4 pt-24 sm:pt-32 lg:grid-cols-12">
      <Reveal className="lg:col-span-5">
        <div className="card flex h-full flex-col p-6 sm:p-8">
          <p className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 text-[clamp(30px,3.6vw,46px)] font-semibold leading-[1.05] tracking-[-0.04em]">
            {t("titleStart")} <span className="text-highlight">{t("titleAccent")}</span>
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-text">{t("text")}</p>
          <div className="mt-auto pt-8">
            <div className="label">{t("toolboxLabel")}</div>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {toolbox
                .flatMap((line) => line.split(" · "))
                .map((tool) => (
                  <li key={tool} className="rounded-full bg-paper-alt px-3 py-1 font-mono text-xs text-text">
                    {tool}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08} className="lg:col-span-7">
        <div className="card h-full p-6 sm:p-8">
          <h3 className="label">{te("label")}</h3>
          <ol className="relative mt-6 space-y-8 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-rule">
            {experienceItems.map((item, i) => (
              <li key={item.id} className="relative pl-9">
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-[3px] border-surface ${
                    i === 0 ? "bg-accent ring-4 ring-[var(--glow)]" : "bg-rule"
                  }`}
                />
                <span className="font-mono text-xs text-muted">
                  {item.period}
                  {item.id === "freelance" && te("now")}
                </span>
                <div className="mt-1 text-lg font-semibold tracking-[-0.01em]">
                  {te(`items.${item.id}.title`)}
                </div>
                <p className="mt-1.5 text-[15px] leading-relaxed text-text">
                  {te(`items.${item.id}.description`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
