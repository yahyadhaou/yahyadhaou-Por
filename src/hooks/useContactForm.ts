"use client";

import { useLocale } from "next-intl";
import { useState, type FormEvent } from "react";

export type ContactStatus = "idle" | "sending" | "success" | "error";

export const contactTopics = [
  { value: "job", label: "topicJob" },
  { value: "freelance", label: "topicFreelance" },
  { value: "other", label: "topicOther" },
] as const;

// Shared by the desktop and mobile contact sections: posts the form to /api/contact,
// which emails Yahya and sends the visitor a confirmation in their language.
export function useContactForm() {
  const locale = useLocale();
  const [status, setStatus] = useState<ContactStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: "unknown" }));
        throw new Error(
          error === "not_configured"
            ? "Contact form is not configured: set GMAIL_USER and GMAIL_APP_PASSWORD (see README)."
            : `Contact API responded ${res.status} (${error})`
        );
      }
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return { status, handleSubmit };
}
