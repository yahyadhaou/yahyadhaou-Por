import { cvFiles, socials } from "@/lib/data";

export type EmailLocale = "en" | "fr" | "de";
export type ContactTopic = "job" | "freelance" | "other";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  locale: EmailLocale;
  topic: ContactTopic;
};

type Copy = {
  subject: string;
  preheader: string;
  headline: (firstName: string) => string;
  intro: string;
  topicLine: Record<ContactTopic, string>;
  nextTitle: string;
  steps: string[];
  summaryTitle: string;
  portfolioCta: string;
  cvCta: string;
  closing: string;
  role: string;
  location: string;
  footer: string;
};

const copy: Record<EmailLocale, Copy> = {
  en: {
    subject: "Thanks for reaching out — Yahya Dhaou",
    preheader: "Your message arrived safely. I'll reply personally within one business day.",
    headline: (n) => `Thank you, ${n}.`,
    intro:
      "It's a pleasure to hear from you. Your message arrived safely, and I'll get back to you personally — no templates, no auto-pilot.",
    topicLine: {
      job: "I'm glad you thought of me for the role. I'll come back with my availability and anything you need for the next step.",
      freelance: "I'm glad you thought of me for your project. I'll come back with first questions and an idea of how we could work together.",
      other: "I'll read it carefully and come back to you with a proper answer.",
    },
    nextTitle: "What happens next",
    steps: [
      "I read your message personally.",
      "You get my reply within one business day.",
      "If it's a fit, we set up a short call at a time that suits you.",
    ],
    summaryTitle: "Your message",
    portfolioCta: "View my work",
    cvCta: "Download my CV",
    closing: "Talk soon,",
    role: "Full-stack developer · React, React Native, Next.js, Node.js",
    location: "Essen, Germany",
    footer: "You're receiving this because you used the contact form on my portfolio. There's nothing else you need to do.",
  },
  fr: {
    subject: "Merci pour votre message — Yahya Dhaou",
    preheader: "Votre message est bien arrivé. Je vous réponds personnellement sous un jour ouvré.",
    headline: (n) => `Merci, ${n}.`,
    intro:
      "C'est un plaisir d'avoir de vos nouvelles. Votre message est bien arrivé et je vous répondrai personnellement — pas de réponse automatique.",
    topicLine: {
      job: "Merci d'avoir pensé à moi pour ce poste. Je reviens vers vous avec mes disponibilités et tout ce qu'il faut pour la suite.",
      freelance: "Merci d'avoir pensé à moi pour votre projet. Je reviens vers vous avec mes premières questions et une proposition pour travailler ensemble.",
      other: "Je vais le lire attentivement et vous apporter une vraie réponse.",
    },
    nextTitle: "La suite",
    steps: [
      "Je lis votre message personnellement.",
      "Vous recevez ma réponse sous un jour ouvré.",
      "Si cela correspond, nous fixons un court appel au moment qui vous convient.",
    ],
    summaryTitle: "Votre message",
    portfolioCta: "Voir mes projets",
    cvCta: "Télécharger mon CV",
    closing: "À très vite,",
    role: "Développeur Full-Stack · React, React Native, Next.js, Node.js",
    location: "Essen, Allemagne",
    footer: "Vous recevez cet email car vous avez utilisé le formulaire de contact de mon portfolio. Aucune action n'est nécessaire.",
  },
  de: {
    subject: "Vielen Dank für Ihre Nachricht — Yahya Dhaou",
    preheader: "Ihre Nachricht ist angekommen. Ich antworte Ihnen persönlich innerhalb eines Werktages.",
    headline: (n) => `Vielen Dank, ${n}.`,
    intro:
      "Es freut mich sehr, von Ihnen zu hören. Ihre Nachricht ist sicher angekommen und ich melde mich persönlich bei Ihnen — keine Vorlagen, kein Autopilot.",
    topicLine: {
      job: "Danke, dass Sie bei der Stelle an mich gedacht haben. Ich melde mich mit meiner Verfügbarkeit und allem, was Sie für den nächsten Schritt brauchen.",
      freelance: "Danke, dass Sie bei Ihrem Projekt an mich gedacht haben. Ich melde mich mit ersten Fragen und einem Vorschlag für die Zusammenarbeit.",
      other: "Ich lese sie aufmerksam und melde mich mit einer fundierten Antwort.",
    },
    nextTitle: "So geht es weiter",
    steps: [
      "Ich lese Ihre Nachricht persönlich.",
      "Sie erhalten meine Antwort innerhalb eines Werktages.",
      "Wenn es passt, vereinbaren wir ein kurzes Gespräch zu einem Termin Ihrer Wahl.",
    ],
    summaryTitle: "Ihre Nachricht",
    portfolioCta: "Meine Projekte ansehen",
    cvCta: "Lebenslauf herunterladen",
    closing: "Mit freundlichen Grüßen",
    role: "Full-Stack-Entwickler · React, React Native, Next.js, Node.js",
    location: "Essen, Deutschland",
    footer: "Sie erhalten diese E-Mail, weil Sie das Kontaktformular auf meinem Portfolio genutzt haben. Es ist nichts weiter zu tun.",
  },
};

const topicNames: Record<ContactTopic, string> = {
  job: "Full-time role",
  freelance: "Freelance project",
  other: "Other",
};

const localeNames: Record<EmailLocale, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
};

const c = {
  page: "#F3F3F0",
  card: "#FFFFFF",
  ink: "#111111",
  text: "#2E2E2A",
  muted: "#62625D",
  rule: "#E2E2DC",
  soft: "#F7F7F4",
  accent: "#A8321C",
};

const sans = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";
const serif = "Georgia, 'Times New Roman', serif";
const mono = "'SFMono-Regular', Menlo, Consolas, monospace";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatMessage(message: string) {
  return escapeHtml(message).replace(/\r?\n/g, "<br />");
}

function firstName(name: string) {
  return name.split(/\s+/)[0] || name;
}

function label(text: string, color = c.muted) {
  return `<div style="font-family:${mono};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${color};">${text}</div>`;
}

function button(href: string, text: string, primary: boolean) {
  const style = primary
    ? `background:${c.ink};color:#FFFFFF;border:1px solid ${c.ink};`
    : `background:#FFFFFF;color:${c.ink};border:1px solid ${c.ink};`;
  return `<a href="${href}" style="display:inline-block;padding:13px 24px;border-radius:999px;font-family:${sans};font-size:14px;font-weight:600;text-decoration:none;${style}">${text}</a>`;
}

function layout({
  lang,
  preheader,
  tagline,
  body,
  footer,
}: {
  lang: string;
  preheader: string;
  tagline: string;
  body: string;
  footer: string;
}) {
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="color-scheme" content="light only" />
<title>Yahya Dhaou</title>
</head>
<body style="margin:0;padding:0;background:${c.page};font-family:${sans};-webkit-font-smoothing:antialiased;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${c.page};padding:40px 12px;">
  <tr>
    <td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">
        <tr>
          <td style="padding:0 4px 16px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="font-family:${sans};font-size:16px;font-weight:600;color:${c.ink};">Yahya Dhaou</td>
                <td align="right" style="font-family:${mono};font-size:11px;letter-spacing:1px;text-transform:uppercase;color:${c.muted};">${escapeHtml(tagline)}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:${c.card};border:1px solid ${c.rule};border-top:2px solid ${c.ink};border-radius:4px;padding:44px 40px 36px;color:${c.text};font-size:16px;line-height:1.65;">
            ${body}
          </td>
        </tr>
        <tr>
          <td style="padding:20px 4px 0;font-family:${sans};font-size:12px;line-height:1.6;color:${c.muted};">
            ${footer}
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

export function autoReplyEmail(payload: ContactPayload, siteUrl: string) {
  const t = copy[payload.locale];
  const name = firstName(payload.name);
  const cvUrl = `${siteUrl}${payload.locale === "de" ? cvFiles.de : cvFiles.en}`;
  const portfolioUrl = `${siteUrl}/${payload.locale}`;

  const steps = t.steps
    .map(
      (step, i) => `
<tr>
  <td style="width:36px;padding:10px 0;vertical-align:top;font-family:${serif};font-style:italic;font-size:20px;color:${c.accent};">${i + 1}.</td>
  <td style="padding:12px 0;border-bottom:${i < t.steps.length - 1 ? `1px solid ${c.rule}` : "0"};font-size:15px;color:${c.text};">${step}</td>
</tr>`
    )
    .join("");

  const body = `
<h1 style="margin:0;font-family:${serif};font-style:italic;font-weight:400;font-size:40px;line-height:1.1;letter-spacing:-0.5px;color:${c.ink};">${escapeHtml(t.headline(name))}</h1>
<p style="margin:22px 0 0;">${t.intro}</p>
<p style="margin:14px 0 0;">${t.topicLine[payload.topic]}</p>

<div style="margin:32px 0 0;">${label(t.nextTitle, c.accent)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:6px;">${steps}</table>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0 0;background:${c.soft};border:1px solid ${c.rule};border-radius:4px;">
  <tr>
    <td style="padding:18px 20px;">
      ${label(t.summaryTitle)}
      <div style="margin-top:10px;font-size:14px;line-height:1.65;color:${c.text};">${formatMessage(payload.message)}</div>
    </td>
  </tr>
</table>

<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:32px;">
  <tr>
    <td style="padding:0 8px 8px 0;">${button(portfolioUrl, t.portfolioCta, true)}</td>
    <td style="padding:0 0 8px 0;">${button(cvUrl, t.cvCta, false)}</td>
  </tr>
</table>

<p style="margin:32px 0 0;">${t.closing}</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:14px;border-top:1px solid ${c.rule};">
  <tr>
    <td style="padding-top:18px;">
      <div style="font-family:${serif};font-style:italic;font-size:24px;color:${c.ink};">Yahya Dhaou</div>
      <div style="margin-top:4px;font-size:13px;color:${c.muted};">${t.role}</div>
      <div style="margin-top:2px;font-size:13px;color:${c.muted};">${t.location} · <a href="tel:${socials.phone.replace(/\s/g, "")}" style="color:${c.muted};text-decoration:none;">${socials.phone}</a></div>
      <div style="margin-top:12px;font-size:13px;">
        <a href="${portfolioUrl}" style="color:${c.ink};font-weight:600;text-decoration:none;">Portfolio</a>
        <span style="color:${c.rule};">&nbsp;/&nbsp;</span>
        <a href="${socials.linkedin}" style="color:${c.ink};font-weight:600;text-decoration:none;">LinkedIn</a>
        <span style="color:${c.rule};">&nbsp;/&nbsp;</span>
        <a href="${socials.github}" style="color:${c.ink};font-weight:600;text-decoration:none;">GitHub</a>
      </div>
    </td>
  </tr>
</table>`;

  const text = [
    t.headline(name),
    "",
    t.intro,
    "",
    t.topicLine[payload.topic],
    "",
    `${t.nextTitle}:`,
    ...t.steps.map((s, i) => `${i + 1}. ${s}`),
    "",
    `${t.summaryTitle}:`,
    payload.message,
    "",
    `${t.portfolioCta}: ${portfolioUrl}`,
    `${t.cvCta}: ${cvUrl}`,
    "",
    t.closing,
    "Yahya Dhaou",
    t.role,
    `${t.location} · ${socials.phone}`,
    `LinkedIn: ${socials.linkedin}`,
    `GitHub: ${socials.github}`,
  ].join("\n");

  return {
    subject: t.subject,
    html: layout({
      lang: payload.locale,
      preheader: t.preheader,
      tagline: "Full-stack developer",
      body,
      footer: t.footer,
    }),
    text,
  };
}

export function ownerNotificationEmail(payload: ContactPayload, receivedAt: Date) {
  const date = receivedAt.toLocaleString("de-DE", {
    timeZone: "Europe/Berlin",
    dateStyle: "medium",
    timeStyle: "short",
  });
  const topic = topicNames[payload.topic];
  const replySubject = encodeURIComponent(copy[payload.locale].subject.replace(/ — .*/, ""));

  const row = (name: string, value: string) => `
<tr>
  <td style="padding:12px 0;border-bottom:1px solid ${c.rule};width:110px;vertical-align:top;">${label(name)}</td>
  <td style="padding:12px 0;border-bottom:1px solid ${c.rule};font-size:15px;color:${c.ink};">${value}</td>
</tr>`;

  const body = `
<div style="display:inline-block;padding:5px 12px;border:1px solid ${c.accent};border-radius:999px;font-family:${mono};font-size:11px;letter-spacing:1px;text-transform:uppercase;color:${c.accent};">${topic}</div>
<h1 style="margin:18px 0 0;font-family:${serif};font-style:italic;font-weight:400;font-size:34px;line-height:1.15;color:${c.ink};">${escapeHtml(payload.name)} wrote to you.</h1>
<p style="margin:10px 0 0;font-size:15px;color:${c.muted};">New message from the contact form on your portfolio.</p>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;border-top:1px solid ${c.ink};">
  ${row("Name", escapeHtml(payload.name))}
  ${row("Email", `<a href="mailto:${escapeHtml(payload.email)}" style="color:${c.accent};text-decoration:none;">${escapeHtml(payload.email)}</a>`)}
  ${row("Topic", topic)}
  ${row("Language", localeNames[payload.locale])}
  ${row("Received", date)}
</table>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0 0;background:${c.soft};border:1px solid ${c.rule};border-radius:4px;">
  <tr>
    <td style="padding:20px 22px;font-size:15px;line-height:1.7;color:${c.text};">${formatMessage(payload.message)}</td>
  </tr>
</table>

<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;">
  <tr><td>${button(`mailto:${escapeHtml(payload.email)}?subject=${replySubject}`, `Reply to ${escapeHtml(firstName(payload.name))} →`, true)}</td></tr>
</table>`;

  const text = [
    `[${topic}] New message from ${payload.name}`,
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Topic: ${topic}`,
    `Language: ${localeNames[payload.locale]}`,
    `Received: ${date}`,
    "",
    payload.message,
  ].join("\n");

  return {
    subject: `[${topic}] New message from ${payload.name}`,
    html: layout({
      lang: "en",
      preheader: payload.message.slice(0, 120),
      tagline: "Portfolio · Contact",
      body,
      footer:
        "A confirmation was sent to the sender in their language. Hit reply to answer them directly.",
    }),
    text,
  };
}
