import { useTranslations } from "next-intl";
import { Section } from "./ui/Section";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/data";

export function Projects() {
  const t = useTranslations("projects");

  return (
    <Section
      id="projects"
      eyebrow={t("eyebrow")}
      title={t("title")}
      subtitle={t("subtitle")}
    >
      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
