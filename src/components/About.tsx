import { useTranslations } from "next-intl";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

export function About() {
  const t = useTranslations("about");
  const values = t.raw("values") as { title: string; description: string }[];

  return (
    <Section id="about" eyebrow={t("eyebrow")} title={t("title")}>
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          <p>{t("paragraph1")}</p>
          <p>{t("paragraph2")}</p>
          <p>{t("paragraph3")}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={0.15 + i * 0.06}>
              <div className="glass-card h-full rounded-2xl p-5">
                <h3 className="font-display text-sm font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {v.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
