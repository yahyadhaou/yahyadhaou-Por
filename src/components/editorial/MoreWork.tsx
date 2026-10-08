import { useTranslations } from "next-intl";
import { moreProjects } from "@/lib/data";
import { Gallery } from "../Gallery";
import { Reveal } from "../ui/Reveal";

const linkClass = "text-[15px] font-medium underline-offset-4 hover:text-accent hover:underline";

export function EditorialMoreWork() {
  const t = useTranslations("more");

  return (
    <section aria-labelledby="more-title" className="pt-28">
      <Reveal className="flex items-end justify-between gap-4 border-b border-ink pb-5">
        <h2 id="more-title" className="text-[clamp(40px,4vw,52px)] font-medium leading-none tracking-[-0.035em]">
          {t("titleStart")} <span className="serif-accent">{t("titleAccent")}</span>
        </h2>
        <span className="label">{t("count", { count: moreProjects.length })}</span>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-14">
        {moreProjects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 2) * 0.08}>
            <article className="flex h-full flex-col gap-4">
              <Gallery
                tone="editorial"
                galleries={project.galleries}
                title={t(`items.${project.id}.title`)}
                label={t(`items.${project.id}.title`)}
              />
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[26px] font-medium tracking-[-0.03em]">{t(`items.${project.id}.title`)}</h3>
                <span className="label shrink-0">{t(`items.${project.id}.tag`)}</span>
              </div>
              <p className="leading-relaxed text-text">{t(`items.${project.id}.description`)}</p>
              <ul className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <li key={tech} className="rounded-full border border-rule px-3 py-1 text-[13px] text-text">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-5 pt-1">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className={linkClass}>
                    {t("visitLive")} ↗
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className={linkClass}>
                    {t("viewCode")} ↗
                  </a>
                )}
                {!project.live && !project.github && (
                  <span className="text-[15px] text-muted">{t("privateCode")}</span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
