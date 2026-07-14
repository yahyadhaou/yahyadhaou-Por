import { useTranslations } from "next-intl";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { skillCategories } from "@/lib/data";

export function Skills() {
  const t = useTranslations("skills");
  const catLabels = useTranslations("skills.categories");

  return (
    <Section id="skills" eyebrow={t("eyebrow")} title={t("title")}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.key} delay={i * 0.08}>
            <div className="glass-card group h-full rounded-2xl p-6 transition-colors hover:border-accent-a/40">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-b">
                {catLabels(cat.key)}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-white/[0.02] px-3 py-1.5 text-sm text-foreground/90 transition-colors group-hover:border-white/15"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
