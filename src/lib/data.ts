import manifest from "./galleries.generated.json";

export const socials = {
  email: "dhaou.yahya98@gmail.com",
  phone: "+49 15757909481",
  github: "https://github.com/yahyadhaou",
  linkedin: "https://linkedin.com/in/yahya-dhaou-bb3862232",
};

export const homeServicesSite = "https://homeservicewebsite.netlify.app/";

export const cvFiles = {
  en: "/cv/Yahya-Dhaou-CV-EN.pdf",
  de: "/cv/yahyadhaoucv.pdf",
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

// Generated from the files in public/images/projects/ by scripts/gallery-manifest.mjs
// (runs before `dev` and `build`). Add, remove or rename screenshots freely.
const images = (folder: keyof typeof manifest) => manifest[folder];

export const homeServicesGalleries: Gallery[] = [
  {
    key: "customer",
    type: "mobile",
    images: images("home-service-client"),
  },
  {
    key: "manager",
    type: "mobile",
    images: images("home-service-manager"),
  },
  {
    key: "worker",
    type: "mobile",
    images: images("home-service-coworker"),
  },
  {
    key: "admin",
    type: "web",
    images: images("home-service-admin"),
  },
];

export type MoreProject = {
  id: "glowupApp" | "homeServicesShowroom" | "glowupShowroom" | "mhtravel";
  tech: string[];
  live?: string;
  github?: string;
  galleries: Gallery[];
};

export const moreProjects: MoreProject[] = [
  {
    id: "homeServicesShowroom",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Zod"],
    live: homeServicesSite,
    galleries: [
      {
        key: "site",
        type: "web",
        images: images("home-service-showcase"),
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
        images: images("glowup-app"),
      },
      {
        key: "provider",
        type: "mobile",
        images: images("glowup-pro"),
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
        images: images("glowup-showcase"),
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
        images: images("mhtravel"),
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
