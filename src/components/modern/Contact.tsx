"use client";

import { useTranslations } from "next-intl";
import { contactTopics, useContactForm } from "@/hooks/useContactForm";
import { Mail, Phone, Send } from "lucide-react";
import { socials } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { Reveal } from "../ui/Reveal";

const inputClass =
  "min-h-12 w-full rounded-xl border border-rule bg-field px-3.5 text-base text-ink outline-none transition-colors placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-[var(--glow)]";

export function ModernContact() {
  const t = useTranslations("contact");
  const { status, handleSubmit } = useContactForm();

  return (
    <section id="m-contact" className="pt-24 sm:pt-32">
      <div className="card relative grid gap-10 overflow-hidden p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-32 h-[380px] w-[380px] rounded-full bg-[var(--glow)] blur-3xl"
        />
      <Reveal className="relative flex flex-col gap-5 lg:col-span-5">
        <p className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {t("eyebrow")}
        </p>
        <h2 className="text-[clamp(36px,4.6vw,60px)] font-semibold leading-[1.02] tracking-[-0.045em]">
          {t("titleStart")} <span className="text-highlight">{t("titleAccent")}</span>
        </h2>
        <p className="text-[16px] leading-relaxed text-text">{t("subtitle")}</p>
        <ul className="mt-2 grid gap-2 text-[15px]">
          <li>
            <a
              href={`mailto:${socials.email}`}
              className="flex items-center gap-3 rounded-2xl border border-rule bg-paper px-4 py-3 transition-colors hover:border-accent"
            >
              <Mail size={17} className="text-accent" aria-hidden="true" />
              <span className="sr-only">{t("emailLabel")}: </span>
              {socials.email}
            </a>
          </li>
          <li>
            <a
              href={`tel:${socials.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 rounded-2xl border border-rule bg-paper px-4 py-3 transition-colors hover:border-accent"
            >
              <Phone size={17} className="text-accent" aria-hidden="true" />
              <span className="sr-only">{t("phoneLabel")}: </span>
              {socials.phone}
            </a>
          </li>
          <li className="grid grid-cols-2 gap-2">
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border border-rule bg-paper px-4 py-3 transition-colors hover:border-accent"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border border-rule bg-paper px-4 py-3 transition-colors hover:border-accent"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </li>
        </ul>
      </Reveal>

      <Reveal delay={0.08} className="relative min-w-0 lg:col-span-7">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-3xl border border-rule bg-paper p-5 sm:p-7"
        >
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <fieldset>
            <legend className="label mb-2.5">{t("formTopic")}</legend>
            <div className="flex flex-wrap gap-2">
              {contactTopics.map((topic) => (
                <label key={topic.value} className="cursor-pointer">
                  <input
                    type="radio"
                    name="topic"
                    value={topic.value}
                    defaultChecked={topic.value === "job"}
                    className="peer sr-only"
                  />
                  <span className="inline-flex min-h-10 items-center rounded-full border border-rule bg-surface px-4 text-sm font-medium text-text transition-colors hover:border-ink peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                    {t(topic.label)}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="label">{t("formName")}</span>
              <input required name="name" autoComplete="name" className={inputClass} suppressHydrationWarning />
            </label>
            <label className="flex flex-col gap-2">
              <span className="label">{t("formEmail")}</span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className={inputClass}
                suppressHydrationWarning
              />
            </label>
          </div>
          <label className="flex flex-col gap-2">
            <span className="label">{t("formMessage")}</span>
            <textarea
              required
              rows={5}
              name="message"
              placeholder={t("formPlaceholder")}
              className={`${inputClass} resize-y py-3.5`}
              suppressHydrationWarning
            />
          </label>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-ink px-7 text-[15px] font-medium text-paper transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? t("formSending") : t("formSend")}
              <Send size={15} aria-hidden="true" />
            </button>
            <span className="max-w-[280px] text-[13px] leading-normal text-muted">{t("formNote")}</span>
          </div>

          <div aria-live="polite">
            {status === "success" && <p className="text-sm text-success">{t("formSuccess")}</p>}
            {status === "error" && <p className="text-sm text-accent">{t("formError")}</p>}
          </div>
        </form>
      </Reveal>
      </div>
    </section>
  );
}
