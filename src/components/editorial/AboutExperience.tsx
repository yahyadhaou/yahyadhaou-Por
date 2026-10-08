import { useTranslations } from "next-intl";
import { experienceItems, toolbox } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

export function EditorialAboutExperience() {
  const t = useTranslations("about");
  const te = useTranslations("experience");

  return (
    <section id="experience" className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-12 pt-28">
      <Reveal>
        <p className="eyebrow">{t("eyebrow")}</p>
        <h2 className="mt-4 text-[clamp(38px,4vw,52px)] font-medium leading-[1.02] tracking-[-0.035em]">
          {t("titleStart")} <span className="serif-accent">{t("titleAccent")}</span>
        </h2>
        <p className="mt-5 text-[17px] leading-relaxed text-text">{t("text")}</p>
        <div className="mt-7">
          <div className="label">{t("toolboxLabel")}</div>
          <ul className="mt-2.5 text-[15px] leading-loose text-text">
            {toolbox.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.08} className="min-w-0">
        <h3 className="label border-b border-ink pb-3.5">{te("label")}</h3>
        <ol>
          {experienceItems.map((item) => (
            <li
              key={item.id}
              className="grid grid-cols-[minmax(130px,0.6fr)_minmax(0,2fr)] gap-x-7 border-b border-rule py-5"
            >
              <span className="font-mono text-[13px] text-accent">
                {item.period}
                {item.id === "freelance" && te("now")}
              </span>
              <div>
                <div className="text-lg font-medium">{te(`items.${item.id}.title`)}</div>
                <p className="mt-1.5 text-[15px] leading-relaxed text-text">{te(`items.${item.id}.description`)}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
