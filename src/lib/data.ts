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
  key: "client" | "provider";
  images: string[];
};

export type Project = {
  id: "glowupApp" | "showcase" | "mhtravel";
  type: "mobile" | "web";
  tech: string[];
  github?: string;
  live?: string;
  hasScreenshots: boolean;
  images: string[];
  galleries?: ProjectGallery[];
  accent: string;
};

const glowupAppClientImages = [1, 2, 3, 4, 5, 6, 13, 14, 15, 16, 17, 18, 25, 26, 27, 28, 29].map(
  (n) => `/images/projects/glowup-app/${n}.jpg`
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
    period: "09.2024 — 08.2025",
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
