export const socials = {
  email: "dhaou.yahya98@gmail.com",
  phone: "+49 15757909481",
  github: "https://github.com/yahyadhaou",
  linkedin: "https://linkedin.com/in/yahya-dhaou-bb3862232",
};

export const cvFiles = {
  en: "/cv/Yahya-Dhaou-CV-EN.pdf",
  de: "/cv/Yahya-Dhaou-CV-DE.pdf",
};

export type GalleryKey =
  | "customer"
  | "manager"
  | "worker"
  | "admin"
  | "client"
  | "provider"
  | "site";

export type Gallery = {
  key: GalleryKey;
  type: "mobile" | "web";
  images: string[];
};

const range = (count: number) => Array.from({ length: count }, (_, i) => i + 1);
const pad = (n: number) => String(n).padStart(2, "0");

export const homeServicesGalleries: Gallery[] = [
  {
    key: "customer",
    type: "mobile",
    images: range(36).map((n) => `/images/projects/home-service-client/${pad(n)}.webp`),
  },
  {
    key: "manager",
    type: "mobile",
    images: range(14).map((n) => `/images/projects/home-service-manager/${pad(n)}.webp`),
  },
  {
    key: "worker",
    type: "mobile",
    images: range(4).map((n) => `/images/projects/home-service-coworker/${pad(n)}.webp`),
  },
  {
    key: "admin",
    type: "web",
    images: range(12).map((n) => `/images/projects/home-service-admin/${n}.webp`),
  },
];

export type MoreProject = {
  id: "glowupApp" | "homeServicesShowroom" | "glowupShowroom" | "mhtravel";
  tech: string[];
  live?: string;
  github?: string;
  galleries: Gallery[];
};

// TODO: set `live` for homeServicesShowroom once its Netlify URL is known.
export const moreProjects: MoreProject[] = [
  {
    id: "homeServicesShowroom",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Zod"],
    live: undefined,
    galleries: [
      {
        key: "site",
        type: "web",
        images: range(13).map((n) => `/images/projects/home-service-showcase/${n}.png`),
      },
    ],
  },
  {
    id: "glowupApp",
    tech: ["React Native", "Expo", "Node.js", "PostgreSQL"],
    galleries: [
      {
        key: "client",
        type: "mobile",
        images: [1, 2, 3, 4, 5, 6, 13, 14, 15, 16, 17, 18, 25, 26, 27, 28, 29].map(
          (n) => `/images/projects/glowup-app/${n}.jpg`
        ),
      },
      {
        key: "provider",
        type: "mobile",
        images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21].map(
          (n) => `/images/projects/glowup-pro/${n}.jpg`
        ),
      },
    ],
  },
  {
    id: "glowupShowroom",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS"],
    live: "https://glowup-beauty-app-showcase.netlify.app/",
    galleries: [
      {
        key: "site",
        type: "web",
        images: range(9).map((n) => `/images/projects/glowup-showcase/${n}.png`),
      },
    ],
  },
  {
    id: "mhtravel",
    tech: ["Next.js", "React", "Express", "MySQL"],
    github: "https://github.com/yahyadhaou/MhTravel",
    galleries: [
      {
        key: "site",
        type: "web",
        images: range(6).map((n) => `/images/projects/mhtravel/${n}.png`),
      },
    ],
  },
];

export const homeServicesStack = [
  "Expo",
  "React Native",
  "Next.js 16",
  "Node.js",
  "Express",
  "Sequelize",
  "MySQL 8",
];

export const decisionKeys = ["d1", "d2", "d3", "d4", "d5", "d6"] as const;

export const alsoInPlace = [
  "argon2id",
  "Zod",
  "Helmet + CORS allow-list",
  "rate limiting",
  "Winston",
  "Jest + Supertest",
];

export const lifecycle = ["pending", "upcoming", "in_progress", "completed"];

export const toolbox = [
  "React · Next.js · React Native · TypeScript · Tailwind CSS · MUI",
  "Node.js · Express · REST · Sequelize · Zod",
  "MySQL · PostgreSQL · MongoDB",
  "Jest · Supertest · Artillery · Docker · GitHub Actions · Figma",
];

export const experienceItems = [
  { id: "freelance", period: "09.2024 — " },
  { id: "tunidesign", period: "11.2023 — 09.2024" },
  { id: "croissantRouge", period: "06.2023 — 05.2024" },
  { id: "etafakna", period: "03.2023 — 08.2023" },
] as const;

export const stackMarquee = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "Node.js",
  "Express",
  "MySQL",
  "PostgreSQL",
  "Tailwind CSS",
  "Expo",
  "Zod",
  "Jest",
  "Docker",
  "Figma",
];
