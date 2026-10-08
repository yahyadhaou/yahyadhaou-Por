import { useTranslations } from "next-intl";
import { ArrowUpRight, Lock } from "lucide-react";
import { moreProjects } from "@/lib/data";
import { Gallery } from "../Gallery";
import { Reveal } from "../ui/Reveal";

export function ModernMoreWork() {
  const t = useTranslations("more");

  return (
    <section aria-labelledby="m-more-title" className="pt-24 sm:pt-32">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <h2
          id="m-more-title"
          className="text-[clamp(32px,4.6vw,60px)] font-semibold leading-none tracking-[-0.04em]"
        >
          {t("titleStart")} <span className="text-highlight">{t("titleAccent")}</span>
        </h2>
        <span className="label rounded-full border border-rule bg-surface px-3 py-1.5">
          {t("count", { count: moreProjects.length })}
        </span>
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {moreProjects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 2) * 0.08} className="h-full">
            <article className="card card-hover flex h-full flex-col gap-4 p-3 sm:p-4">
              <Gallery
                galleries={project.galleries}
                title={t(`items.${project.id}.title`)}
                label={t(`items.${project.id}.title`)}
              />
              <div className="flex items-baseline justify-between gap-3 px-2 pt-2">
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                  {t(`items.${project.id}.title`)}
                </h3>
                <span className="label shrink-0">{t(`items.${project.id}.tag`)}</span>
              </div>
              <p className="px-2 text-[15px] leading-relaxed text-text">{t(`items.${project.id}.description`)}</p>
              <ul className="flex flex-wrap gap-1.5 px-2">
                {project.tech.map((tech) => (
                  <li key={tech} className="rounded-full bg-paper-alt px-3 py-1 font-mono text-xs text-text">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 px-2 pb-2 pt-1 text-sm font-medium">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center gap-1.5 rounded-full bg-ink px-4 text-paper transition-opacity hover:opacity-85">
                    {t("visitLive")}
                    <ArrowUpRight size={15} />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center gap-1.5 rounded-full bg-ink px-4 text-paper transition-opacity hover:opacity-85">
                    {t("viewCode")}
                    <ArrowUpRight size={15} />
                  </a>
                )}
                {!project.live && !project.github && (
                  <span className="inline-flex h-10 items-center gap-1.5 font-normal text-muted">
                    <Lock size={14} />
                    {t("privateCode")}
                  </span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
