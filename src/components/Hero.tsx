"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { socials } from "@/lib/data";

const socialLinks = [
  { href: socials.github, label: "GitHub", Icon: GithubIcon },
  { href: socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
];

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const cvHref =
    locale === "de" ? "/cv/Yahya-Dhaou-CV-DE.pdf" : "/cv/Yahya-Dhaou-CV-EN.pdf";

  const stats = [
    { value: t("statYears"), label: t("statYearsLabel") },
    { value: t("statProjects"), label: t("statProjectsLabel") },
    { value: t("statLanguages"), label: t("statLanguagesLabel") },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-28 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_65%_55%_at_50%_20%,black,transparent)]" />
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-accent-a/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[380px] w-[380px] rounded-full bg-accent-b/20 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-xs text-muted">{t("badge")}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {t("greeting")} <span className="text-gradient">{t("name")}</span>
            <br />
            {t("role")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 font-mono text-sm tracking-wide text-accent-b"
          >
            {t("roleHighlight")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {t("tagline")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              {t("ctaContact")}
            </a>
            <a
              href="#projects"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent-b/60 hover:text-accent-b"
            >
              {t("ctaProjects")}
            </a>
            <a
              href={cvHref}
              download
              className="flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {t("ctaCv")}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1v9m0 0L3.5 6.5M7 10l3.5-3.5M1 12.5h12"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.44 }}
            className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold text-foreground">
                  {s.value}
                </div>
                <div className="text-xs text-muted">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto flex w-full max-w-sm flex-col items-center gap-6"
        >
          <div className="glow-border relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-a/25 via-transparent to-accent-b/25" />
            <Image
              src="/images/yahya.jpg"
              alt="Yahya Dhaou"
              fill
              priority
              sizes="(max-width: 1024px) 60vw, 380px"
              className="object-cover"
            />
          </div>

          <div className="glass-card flex items-center gap-3 rounded-full px-3 py-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-accent-b"
              >
                <s.Icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
