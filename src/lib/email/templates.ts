import { socials } from "@/lib/data";

export type EmailLocale = "en" | "fr" | "de";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  locale: EmailLocale;
};

type Copy = {
  subject: string;
  preheader: string;
  greeting: (name: string) => string;
  paragraphs: string[];
  summaryTitle: string;
  closing: string;
  role: string;
  location: string;
  portfolio: string;
  footer: string;
};

const copy: Record<EmailLocale, Copy> = {
  en: {
    subject: "Thanks for reaching out — Yahya Dhaou",
    preheader: "Your message arrived safely. I'll get back to you personally, usually within one business day.",
    greeting: (name) => `Hi ${name},`,
    paragraphs: [
      "Thank you for getting in touch — it's a pleasure to hear from you.",
      "Your message has arrived safely and I'm reviewing it now. I'll get back to you personally, usually within one business day.",
      "Whether it's a full-time role, a freelance project or a technical question, I'm looking forward to finding out how I can help.",
    ],
    summaryTitle: "Your message",
    closing: "Kind regards,",
    role: "Full-Stack Developer · React, React Native, Next.js, Node.js",
    location: "Essen, Germany",
    portfolio: "Portfolio",
    footer: "You're receiving this email because you submitted the contact form on my portfolio. No further action is needed.",
  },
  fr: {
    subject: "Merci pour votre message — Yahya Dhaou",
    preheader: "Votre message est bien arrivé. Je vous répondrai personnellement, généralement sous un jour ouvré.",
    greeting: (name) => `Bonjour ${name},`,
    paragraphs: [
      "Merci de m'avoir contacté — c'est un plaisir d'avoir de vos nouvelles.",
      "Votre message est bien arrivé et je suis en train d'en prendre connaissance. Je vous répondrai personnellement, généralement sous un jour ouvré.",
      "Qu'il s'agisse d'un poste, d'une mission freelance ou d'une question technique, j'ai hâte de voir comment je peux vous aider.",
    ],
    summaryTitle: "Votre message",
    closing: "Bien cordialement,",
    role: "Développeur Full-Stack · React, React Native, Next.js, Node.js",
    location: "Essen, Allemagne",
    portfolio: "Portfolio",
    footer: "Vous recevez cet email car vous avez rempli le formulaire de contact de mon portfolio. Aucune action n'est requise.",
  },
  de: {
    subject: "Vielen Dank für Ihre Nachricht — Yahya Dhaou",
    preheader: "Ihre Nachricht ist angekommen. Ich melde mich persönlich bei Ihnen, in der Regel innerhalb eines Werktages.",
    greeting: (name) => `Hallo ${name},`,
    paragraphs: [
      "vielen Dank für Ihre Nachricht — es freut mich sehr, von Ihnen zu hören.",
      "Ihre Nachricht ist sicher bei mir angekommen und ich sehe sie mir gerade an. Ich melde mich persönlich bei Ihnen, in der Regel innerhalb eines Werktages.",
      "Ob Festanstellung, Freelance-Projekt oder technische Frage — ich freue mich darauf, gemeinsam die passende Lösung zu finden.",
    ],
    summaryTitle: "Ihre Nachricht",
    closing: "Mit freundlichen Grüßen",
    role: "Full-Stack-Entwickler · React, React Native, Next.js, Node.js",
    location: "Essen, Deutschland",
    portfolio: "Portfolio",
    footer: "Sie erhalten diese E-Mail, weil Sie das Kontaktformular auf meinem Portfolio ausgefüllt haben. Es ist keine weitere Aktion erforderlich.",
  },
};

const localeNames: Record<EmailLocale, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
};

const colors = {
  page: "#eef0f4",
  card: "#ffffff",
  dark: "#0a0c12",
  text: "#1c1f26",
  muted: "#6b7280",
  border: "#e5e7eb",
  soft: "#f6f7f9",
  purple: "#a855f7",
  cyan: "#22d3ee",
};

const fontStack =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

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

function layout({
  lang,
  preheader,
  eyebrow,
  body,
  footer,
}: {
  lang: string;
  preheader: string;
  eyebrow: string;
  body: string;
  footer: string;
}) {
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="color-scheme" content="light" />
<title>Yahya Dhaou</title>
</head>
<body style="margin:0;padding:0;background:${colors.page};font-family:${fontStack};-webkit-font-smoothing:antialiased;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${colors.page};padding:32px 12px;">
  <tr>
    <td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:${colors.card};border-radius:16px;overflow:hidden;border:1px solid ${colors.border};">
        <tr>
          <td style="background:${colors.dark};padding:28px 36px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">YD<span style="color:${colors.cyan};">.</span></td>
                <td align="right" style="font-family:'SFMono-Regular',Menlo,Consolas,monospace;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${colors.cyan};">${escapeHtml(eyebrow)}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="height:3px;line-height:3px;font-size:0;background:${colors.purple};background-image:linear-gradient(90deg, ${colors.purple}, ${colors.cyan});">&nbsp;</td>
        </tr>
        <tr>
          <td style="padding:36px 36px 28px;color:${colors.text};font-size:15px;line-height:1.65;">
            ${body}
          </td>
        </tr>
        <tr>
          <td style="padding:20px 36px 28px;border-top:1px solid ${colors.border};font-size:12px;line-height:1.6;color:${colors.muted};">
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

function signature(c: Copy, siteUrl: string) {
  const link = (href: string, label: string) =>
    `<a href="${href}" style="color:${colors.text};text-decoration:none;font-weight:600;">${label}</a>`;

  return `
<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;">
  <tr>
    <td style="padding-left:14px;border-left:3px solid ${colors.purple};">
      <div style="font-size:16px;font-weight:700;color:${colors.text};">Yahya Dhaou</div>
      <div style="font-size:13px;color:${colors.muted};margin-top:2px;">${c.role}</div>
      <div style="font-size:13px;color:${colors.muted};margin-top:2px;">${c.location}</div>
      <div style="font-size:13px;margin-top:10px;">
        ${link(siteUrl, c.portfolio)}
        <span style="color:${colors.border};">&nbsp;|&nbsp;</span>
        ${link(socials.linkedin, "LinkedIn")}
        <span style="color:${colors.border};">&nbsp;|&nbsp;</span>
        ${link(socials.github, "GitHub")}
      </div>
    </td>
  </tr>
</table>`;
}

export function autoReplyEmail(payload: ContactPayload, siteUrl: string) {
  const c = copy[payload.locale];
  const paragraphs = c.paragraphs
    .map((p) => `<p style="margin:0 0 16px;">${p}</p>`)
    .join("");

  const body = `
<p style="margin:0 0 16px;font-size:17px;font-weight:600;">${escapeHtml(c.greeting(payload.name))}</p>
${paragraphs}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0 4px;background:${colors.soft};border:1px solid ${colors.border};border-radius:12px;">
  <tr>
    <td style="padding:18px 20px;">
      <div style="font-family:'SFMono-Regular',Menlo,Consolas,monospace;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${colors.muted};margin-bottom:8px;">${c.summaryTitle}</div>
      <div style="font-size:14px;line-height:1.6;color:${colors.text};">${formatMessage(payload.message)}</div>
    </td>
  </tr>
</table>
<p style="margin:28px 0 0;">${c.closing}</p>
${signature(c, siteUrl)}`;

  const text = [
    c.greeting(payload.name),
    "",
    ...c.paragraphs.flatMap((p) => [p, ""]),
    `${c.summaryTitle}:`,
    payload.message,
    "",
    c.closing,
    "Yahya Dhaou",
    c.role,
    c.location,
    `${c.portfolio}: ${siteUrl}`,
    `LinkedIn: ${socials.linkedin}`,
    `GitHub: ${socials.github}`,
  ].join("\n");

  return {
    subject: c.subject,
    html: layout({
      lang: payload.locale,
      preheader: c.preheader,
      eyebrow: "Full-Stack Developer",
      body,
      footer: c.footer,
    }),
    text,
  };
}

export function ownerNotificationEmail(payload: ContactPayload, receivedAt: Date) {
  const date = receivedAt.toLocaleString("de-DE", { timeZone: "Europe/Berlin" });

  const row = (label: string, value: string) => `
<tr>
  <td style="padding:10px 0;border-bottom:1px solid ${colors.border};width:110px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:${colors.muted};vertical-align:top;">${label}</td>
  <td style="padding:10px 0;border-bottom:1px solid ${colors.border};font-size:14px;color:${colors.text};">${value}</td>
</tr>`;

  const body = `
<p style="margin:0 0 6px;font-size:20px;font-weight:700;">New message from ${escapeHtml(payload.name)}</p>
<p style="margin:0 0 24px;color:${colors.muted};font-size:14px;">Sent via the contact form on your portfolio.</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
  ${row("Name", escapeHtml(payload.name))}
  ${row("Email", `<a href="mailto:${escapeHtml(payload.email)}" style="color:${colors.purple};text-decoration:none;">${escapeHtml(payload.email)}</a>`)}
  ${row("Language", localeNames[payload.locale])}
  ${row("Received", date)}
</table>
<div style="margin:24px 0 0;padding:18px 20px;background:${colors.soft};border:1px solid ${colors.border};border-left:3px solid ${colors.purple};border-radius:12px;font-size:14px;line-height:1.65;">${formatMessage(payload.message)}</div>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;">
  <tr>
    <td style="background:${colors.dark};border-radius:999px;">
      <a href="mailto:${escapeHtml(payload.email)}?subject=${encodeURIComponent("Re: Your message")}" style="display:inline-block;padding:12px 26px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;">Reply to ${escapeHtml(payload.name)} →</a>
    </td>
  </tr>
</table>`;

  const text = [
    `New message from ${payload.name}`,
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Language: ${localeNames[payload.locale]}`,
    `Received: ${date}`,
    "",
    payload.message,
  ].join("\n");

  return {
    subject: `New contact: ${payload.name}`,
    html: layout({
      lang: "en",
      preheader: payload.message.slice(0, 120),
      eyebrow: "Portfolio · Contact",
      body,
      footer: "An automatic confirmation was sent to the sender in their language. Just hit reply to answer them directly.",
    }),
    text,
  };
}
