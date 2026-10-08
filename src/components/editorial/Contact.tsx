"use client";

import { useTranslations } from "next-intl";
import { contactTopics, useContactForm } from "@/hooks/useContactForm";
import { socials } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

const inputClass =
  "min-h-12 w-full rounded border border-rule bg-field px-3.5 text-base text-ink outline-none transition-colors placeholder:text-muted focus:border-ink";

export function EditorialContact() {
  const t = useTranslations("contact");
  const { status, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-14 pt-32">
      <Reveal className="flex flex-col gap-6">
        <p className="eyebrow">{t("eyebrow")}</p>
        <h2 className="text-[clamp(48px,5.4vw,76px)] font-medium leading-[0.98] tracking-[-0.045em]">
          {t("titleStart")} <span className="serif-accent">{t("titleAccent")}</span>
        </h2>
        <p className="text-[17px] leading-relaxed text-text">{t("subtitle")}</p>
        <dl className="mt-2 text-base">
          <div className="border-t border-rule py-3">
            <dt className="label">{t("emailLabel")}</dt>
            <dd className="mt-1.5">
              <a href={`mailto:${socials.email}`} className="hover:text-accent">
                {socials.email}
              </a>
            </dd>
          </div>
          <div className="border-t border-rule py-3">
            <dt className="label">{t("phoneLabel")}</dt>
            <dd className="mt-1.5">
              <a href={`tel:${socials.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                {socials.phone}
              </a>
            </dd>
          </div>
          <div className="border-y border-rule py-3">
            <dt className="label">{t("elsewhereLabel")}</dt>
            <dd className="mt-1.5 flex gap-5">
              <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
                LinkedIn
              </a>
              <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-accent">
                GitHub
              </a>
            </dd>
          </div>
        </dl>
      </Reveal>

      <Reveal delay={0.08} className="min-w-0">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-md border border-ink bg-surface p-9">
          <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

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
                  <span className="inline-flex min-h-10 items-center rounded-full border border-rule px-4 text-sm font-medium text-text transition-colors hover:border-ink peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                    {t(topic.label)}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid grid-cols-2 gap-4">
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
              className="min-h-[52px] rounded-full bg-ink px-7 text-[15px] font-medium text-paper transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? t("formSending") : `${t("formSend")} →`}
            </button>
            <span className="max-w-[280px] text-[13px] leading-normal text-muted">{t("formNote")}</span>
          </div>

          <div aria-live="polite">
            {status === "success" && <p className="text-sm text-success">{t("formSuccess")}</p>}
            {status === "error" && <p className="text-sm text-accent">{t("formError")}</p>}
          </div>
        </form>
      </Reveal>
    </section>
  );
}
