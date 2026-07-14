import { useTranslations } from "next-intl";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  const t = useTranslations("experience");
  const item = useTranslations("experience.items");

  return (
    <Section id="experience" eyebrow={t("eyebrow")} title={t("title")}>
      <div className="relative">
        <div className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-accent-a via-border to-transparent sm:left-[9px]" />

        <div className="flex flex-col gap-10">
          {experience.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 0.08}>
              <div className="relative pl-8 sm:pl-10">
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent-b bg-background sm:h-[18px] sm:w-[18px]" />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">
                    {item(`${exp.id}.title`)}
                    <span className="text-muted"> · {item(`${exp.id}.company`)}</span>
                  </h3>
                  <span className="font-mono text-xs text-accent-b">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted">{item(`${exp.id}.location`)}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {item(`${exp.id}.description`)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
