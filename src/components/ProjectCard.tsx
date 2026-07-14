"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data";
import { Reveal } from "./ui/Reveal";

function DeviceMockup({ project }: { project: Project }) {
  if (project.type === "mobile") {
    return (
      <div className="flex h-full items-center justify-center py-8">
        <div
          className={`relative h-full w-[46%] rounded-[2rem] border-[6px] border-white/10 bg-gradient-to-br ${project.accent} shadow-2xl`}
        >
          <div className="absolute left-1/2 top-3 h-1.5 w-10 -translate-x-1/2 rounded-full bg-black/30" />
          <div className="absolute inset-4 top-8 flex flex-col items-center justify-center gap-2 text-center">
            <span className="font-display text-4xl font-extrabold text-white/90">
              GU
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full items-center justify-center px-8">
      <div
        className={`w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${project.accent} shadow-2xl`}
      >
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-black/20 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/40" />
          <span className="h-2 w-2 rounded-full bg-white/40" />
          <span className="h-2 w-2 rounded-full bg-white/40" />
        </div>
        <div className="flex aspect-[16/10] items-center justify-center">
          <span className="font-display text-3xl font-extrabold text-white/90">
            {project.id === "mhtravel" ? "MH" : "GU"}
          </span>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const t = useTranslations("projects");
  const item = useTranslations(`projects.items.${project.id}`);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [active, setActive] = useState(0);

  const gallery = project.galleries?.[galleryIndex];
  const images = gallery ? gallery.images : project.images;

  function selectGallery(i: number) {
    setGalleryIndex(i);
    setActive(0);
  }

  function prev() {
    setActive((i) => (i - 1 + images.length) % images.length);
  }

  function next() {
    setActive((i) => (i + 1) % images.length);
  }

  return (
    <Reveal delay={index * 0.1}>
      <div className="glass-card group grid grid-cols-1 overflow-hidden rounded-3xl lg:grid-cols-2">
        <div className="relative aspect-[16/10] overflow-hidden bg-background-alt lg:aspect-auto">
          {project.hasScreenshots && images.length > 0 ? (
            <>
              <Image
                src={images[active]}
                alt={item("title")}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={`${
                  project.type === "mobile" ? "object-contain py-6" : "object-cover"
                } transition-transform duration-500`}
              />

              {project.galleries && (
                <div className="absolute left-3 top-3 flex gap-1.5">
                  {project.galleries.map((g, i) => (
                    <button
                      key={g.key}
                      onClick={() => selectGallery(i)}
                      className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wide backdrop-blur transition-colors ${
                        i === galleryIndex
                          ? "border-white/30 bg-white text-black"
                          : "border-white/15 bg-black/40 text-white/70 hover:text-white"
                      }`}
                    >
                      {t(g.key === "client" ? "tabClient" : "tabProvider")}
                    </button>
                  ))}
                </div>
              )}

              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Previous screenshot"
                    className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur transition-colors hover:bg-black/60"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next screenshot"
                    className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur transition-colors hover:bg-black/60"
                  >
                    <ChevronRight size={16} />
                  </button>
                  <span className="absolute bottom-3 right-3 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[10px] text-white/70 backdrop-blur">
                    {active + 1} / {images.length}
                  </span>
                </>
              )}
            </>
          ) : project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="block h-full w-full"
            >
              <DeviceMockup project={project} />
              <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[10px] text-white/80 backdrop-blur transition-colors group-hover:text-white">
                {t("visitSite")}
                <ExternalLink size={11} />
              </span>
            </a>
          ) : (
            <>
              <DeviceMockup project={project} />
              <span className="absolute bottom-3 right-3 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[10px] text-white/70 backdrop-blur">
                {t("screenshotsSoon")}
              </span>
            </>
          )}
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-9">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-b">
            {item("tag")}
          </span>
          <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
            {item("title")}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {item("description")}
          </p>
          <p className="mt-4 text-xs text-foreground/70">
            <span className="text-muted">{t("role")}: </span>
            {item("role")}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-white/[0.02] px-2.5 py-1 text-xs text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-accent-b"
              >
                {t("viewLive")} →
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {t("viewCode")}
              </a>
            )}
            {!project.live && !project.github && (
              <span className="text-sm text-muted">{t("privateCode")}</span>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
