export type SkillCategory = {
  key: "frontend" | "backend" | "database" | "tools";
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    key: "frontend",
    items: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "MUI",
      "HTML5 / CSS3",
    ],
  },
  {
    key: "backend",
    items: ["Node.js", "Express.js", "REST APIs", "Microservices"],
  },
  {
    key: "database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL"],
  },
  {
    key: "tools",
    items: [
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Docker",
      "Figma",
      "Jest",
      "Artillery",
      "Cursor / Claude Code",
    ],
  },
];

export type ProjectGallery = {
  key: "client" | "provider" | "coworker" | "admin";
  type?: "mobile" | "web";
  images: string[];
};

export type Project = {
  id: "Homeservice" | "homeServiceShowcase" | "glowupApp" | "showcase" | "mhtravel";
  type: "mobile" | "web";
  tech: string[];
  github?: string;
  live?: string;
  hasScreenshots: boolean;
  images: string[];
  galleries?: ProjectGallery[];
  accent: string;
};

const range = (count: number) => Array.from({ length: count }, (_, i) => i + 1);
const pad = (n: number) => String(n).padStart(2, "0");

const glowupAppClientImages = [1, 2, 3, 4, 5, 6, 13, 14, 15, 16, 17, 18, 25, 26, 27, 28, 29].map(
  (n) => `/images/projects/glowup-app/${n}.jpg`
);

const homeServiceClientImages = range(37).map(
  (n) => `/images/projects/home-service-client/${pad(n)}.webp`
);
const homeServiceManagerImages = range(14).map(
  (n) => `/images/projects/home-service-manager/${pad(n)}.webp`
);
const homeServiceCoworkerImages = range(4).map(
  (n) => `/images/projects/home-service-coworker/${pad(n)}.webp`
);
const homeServiceAdminImages = range(12).map(
  (n) => `/images/projects/home-service-admin/${n}.webp`
);
const homeServiceShowcaseImages = range(13).map(
  (n) => `/images/projects/home-service-showcase/${n}.png`
);

const glowupProviderImages = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21,
].map((n) => `/images/projects/glowup-pro/${n}.jpg`);

const mhtravelImages = [1, 2, 3, 4, 5, 6].map(
  (n) => `/images/projects/mhtravel/${n}.png`
);
const showcaseImages = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
  (n) => `/images/projects/glowup-showcase/${n}.png`
);

export const projects: Project[] = [
  {
    id: "Homeservice",
    type: "mobile",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express",
      "MySQL",
      "Next.js",
    ],
    hasScreenshots: true,
    images: homeServiceClientImages,
    galleries: [
      { key: "client", images: homeServiceClientImages },
      { key: "provider", images: homeServiceManagerImages },
      { key: "coworker", images: homeServiceCoworkerImages },
      { key: "admin", type: "web", images: homeServiceAdminImages },
    ],
    accent: "from-sky-400 to-indigo-600",
  },
  {
    id: "homeServiceShowcase",
    type: "web",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    hasScreenshots: true,
    images: homeServiceShowcaseImages,
    accent: "from-sky-400 to-indigo-600",
  },
  {
    id: "glowupApp",
    type: "mobile",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    hasScreenshots: true,
    images: glowupAppClientImages,
    galleries: [
      { key: "client", images: glowupAppClientImages },
      { key: "provider", images: glowupProviderImages },
    ],
    accent: "from-fuchsia-500 to-purple-600",
  },
  {
    id: "showcase",
    type: "web",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS"],
    live: "https://glowup-beauty-app-showcase.netlify.app/",
    hasScreenshots: true,
    images: showcaseImages,
    accent: "from-cyan-400 to-blue-600",
  },
  {
    id: "mhtravel",
    type: "web",
    tech: ["Next.js", "React", "Node.js", "Express.js", "MySQL"],
    github: "https://github.com/yahyadhaou/MhTravel",
    hasScreenshots: true,
    images: mhtravelImages,
    accent: "from-amber-400 to-orange-600",
  },
];

export type ExperienceItem = {
  id: "freelance" | "tunidesign" | "croissantRouge" | "etafakna";
  period: string;
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "freelance",
    period: "09.2024 — Now ",
    tags: ["React", "TypeScript", "Next.js", "React Native", "Node.js", "MySQL"],
  },
  {
    id: "tunidesign",
    period: "11.2023 — 09.2024",
    tags: ["React", "TypeScript", "React Native", "Node.js", "MySQL", "Figma"],
  },
  {
    id: "croissantRouge",
    period: "06.2023 — 05.2024",
    tags: ["React", "Next.js", "TypeScript", "Figma", "Sass"],
  },
  {
    id: "etafakna",
    period: "03.2023 — 08.2023",
    tags: ["React", "Node.js", "MySQL", "MUI", "Sass"],
  },
];

export const socials = {
  email: "dhaou.yahya98@gmail.com",
  phone: "+49 15757909481",
  github: "https://github.com/yahyadhaou",
  linkedin: "https://linkedin.com/in/yahya-dhaou-bb3862232",
};
