import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import {
  autoReplyEmail,
  ownerNotificationEmail,
  type ContactPayload,
  type EmailLocale,
} from "@/lib/email/templates";

export const runtime = "nodejs";

const LOCALES: EmailLocale[] = ["en", "fr", "de"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    console.error("Contact form: GMAIL_USER or GMAIL_APP_PASSWORD is not set.");
    return NextResponse.json({ error: "not_configured" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (clean(body.company, 200)) {
    return NextResponse.json({ ok: true });
  }

  const payload: ContactPayload = {
    name: clean(body.name, 100).replace(/[\r\n]+/g, " "),
    email: clean(body.email, 200),
    message: clean(body.message, 5000),
    locale: LOCALES.includes(body.locale as EmailLocale)
      ? (body.locale as EmailLocale)
      : "en",
  };

  if (!payload.name || !EMAIL_RE.test(payload.email) || payload.message.length < 2) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const from = { name: "Yahya Dhaou", address: user };
  const siteUrl = process.env.SITE_URL ?? new URL(request.url).origin;

  try {
    const notification = ownerNotificationEmail(payload, new Date());
    await transporter.sendMail({
      from: { name: "Portfolio Contact", address: user },
      to: process.env.CONTACT_TO_EMAIL ?? user,
      replyTo: { name: payload.name, address: payload.email },
      ...notification,
    });
  } catch (error) {
    console.error("Contact form: failed to send notification", error);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  // The message already reached the inbox, so a failed confirmation is only logged.
  try {
    const reply = autoReplyEmail(payload, siteUrl);
    await transporter.sendMail({
      from,
      to: { name: payload.name, address: payload.email },
      ...reply,
    });
  } catch (error) {
    console.error("Contact form: failed to send auto-reply", error);
  }

  return NextResponse.json({ ok: true });
}
