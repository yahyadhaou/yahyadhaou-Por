"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { socials } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      if (!res.ok) throw new Error(`Contact API responded ${res.status}`);
      setStatus("success");
      form.current?.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  const infoItems = [
    { label: t("emailLabel"), value: socials.email, href: `mailto:${socials.email}` },
    { label: t("phoneLabel"), value: socials.phone, href: `tel:${socials.phone.replace(/\s/g, "")}` },
    { label: t("locationLabel"), value: t("locationValue") },
  ];

  return (
    <Section
      id="contact"
      eyebrow={t("eyebrow")}
      title={t("title")}
      subtitle={t("subtitle")}
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal delay={0.1}>
          <div className="glass-card flex h-full flex-col justify-between gap-8 rounded-3xl p-7 sm:p-9">
            <div className="space-y-6">
              {infoItems.map((info) => (
                <div key={info.label}>
                  <div className="text-xs uppercase tracking-[0.15em] text-muted">
                    {info.label}
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="mt-1 block text-base font-medium text-foreground transition-colors hover:text-accent-b sm:text-lg"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="mt-1 text-base font-medium text-foreground sm:text-lg">
                      {info.value}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm text-muted">{t("availability")}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="glass-card flex h-full flex-col gap-4 rounded-3xl p-7 sm:p-9"
          >
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-muted">
                {t("formName")}
              </label>
              <input
                required
                name="name"
                autoComplete="name"
                suppressHydrationWarning
                className="w-full rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent-b/60"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-muted">
                {t("formEmail")}
              </label>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                suppressHydrationWarning
                className="w-full rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent-b/60"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-muted">
                {t("formMessage")}
              </label>
              <textarea
                required
                rows={4}
                name="message"
                suppressHydrationWarning
                className="w-full resize-none rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent-b/60"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? t("formSending") : t("formSend")}
            </button>

            {status === "success" && (
              <p className="text-sm text-emerald-400">{t("formSuccess")}</p>
            )}
            {status === "error" && (
              <p className="text-sm text-rose-400">{t("formError")}</p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
