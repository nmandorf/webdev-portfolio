import type {
  ExperienceItem,
  ProjectItem,
  ReviewItem,
  SocialItem,
} from "../types/content";
import { resolveAsset } from "../utils/assetUrl";

export const myProjects: ProjectItem[] = [
  {
    id: 1,
    title: "AI.SMCCD.EDU",
    description:
      "A district AI hub page built with Bootstrap 5 and JavaScript, designed in Figma.",
    subDescription: [
      "• Category: Web / Frontend",
      "• Built responsive page sections and reusable layouts with Bootstrap 5 for district web standards.",
      "• Implemented JavaScript-driven interactions for navigation and content presentation.",
      "• Translated Figma designs into production-ready frontend implementation with accessibility in mind.",
      "• Tools/Tech: Figma · JavaScript · Bootstrap 5",
    ],
    href: "https://ai.smccd.edu",
    logo: "",
    image: resolveAsset("projects/ai-smccd-edu.png"),
    year: "2025",
    tags: [
      {
        id: 1,
        name: "Figma",
        path: resolveAsset("logos/figma.svg"),
      },
      {
        id: 2,
        name: "JavaScript",
        path: resolveAsset("logos/javascript.svg"),
      },
      {
        id: 3,
        name: "Bootstrap 5",
        path: resolveAsset("logos/bootstrap5.svg"),
      },
    ],
  },
  {
    id: 2,
    title: "Ockham Official",
    description:
      "Built and maintain the Ockham Official website, a live production website for a music artist, managing the full " +
      "frontend experience" + "from design implementation to long-term maintenance. Focused on responsive design, " +
      "reusable UI systems, accessibility, and production-ready content management while supporting ongoing business " +
      "and promotional needs.",
    subDescription: [
      "• Built and maintain a live production website using React, Next.js, TypeScript, and responsive frontend development for a music artist’s official platform",
      "• Manage ongoing content updates including live shows, music releases, media assets, promotional content, and user-facing website improvements",
      "• Developed reusable UI components, scalable frontend architecture, and structured workflows to improve long-term maintainability and faster iteration",
      "• Improved accessibility, cross-browser performance, and mobile responsiveness while handling debugging, frontend QA, and production issue resolution",
    ],
    href: "https://www.ockhamofficial.com/",
    logo: "",
    image: resolveAsset("projects/ockham.png"),
    year: "2026",
    tags: [
      {
        id: 1,
        name: "React",
        path: resolveAsset("logos/react.svg"),
      },
      {
        id: 2,
        name: "GitHub",
        path: resolveAsset("logos/github.svg"),
      },
      {
        id: 3,
        name: "CSS",
        path: resolveAsset("logos/css3.svg"),
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: resolveAsset("logos/tailwindcss.svg"),
      },
      {
        id: 4,
        name: "Cursor",
        path: resolveAsset("logos/cursor.svg"),
      },
    ],
  },
  {
    id: 3,
    title: "PayMePal",
    description:
      "Built PayMePal, a full-stack trip expense tracker that helps groups log shared costs, split balances, and settle up " +
      "from one clean dashboard. Designed and implemented the frontend experience across web and mobile while building " +
      "shared TypeScript business logic for expense tracking, group trips, settlement calculations, and production-ready " +
      "user flows.",
    subDescription: [
      "• Built a full-stack expense tracking app using React Native, Next.js, TypeScript, Firebase, and shared cross-platform business logic",
      "• Designed group trip workflows for creating trips, adding shared expenses, viewing balances, and settling payments between travelers",
      "• Developed reusable UI components, responsive dashboard layouts, and structured state management for maintainable web and mobile experiences",
      "• Implemented expense splitting, settlement logic, authentication/data flows, debugging, QA, and production deployment for a live app",
    ],
    href: "https://paymepal.mandorf.org",
    logo: "",
    image: resolveAsset("projects/ockham.png"),
    year: "2026",
    tags: [
      {
        id: 1,
        name: "React Native",
        path: resolveAsset("logos/react.svg"),
      },
      {
        id: 2,
        name: "GitHub",
        path: resolveAsset("logos/github.svg"),
      },
      {
        id: 3,
        name: "CSS",
        path: resolveAsset("logos/css3.svg"),
      },
      {
        id: 4,
        name: "Cursor",
        path: resolveAsset("logos/cursor.svg"),
      },
    ],
  }
];

export const mySocials: SocialItem[] = [
  {
    name: "WhatsApp",
    href: "",
    icon: resolveAsset("socials/whatsApp.svg"),
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: resolveAsset("socials/linkedIn.svg"),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: resolveAsset("socials/instagram.svg"),
  },
];

export const experiences: ExperienceItem[] = [
  {
    title: "Customer Experience",
    job: "Autobahn Mercedes",
    date: "2022-2023",
    contents: [
      "Onboarded drivers to new car interfaces, ensuring they mastered controls and infotainment.",
      "Debugged and programmed garage-door remotes for seamless operation.",
      "Enhanced in-person onboarding workflows, improving feature comprehension by 15% and resolving key user pain points.",
      "Collected and actioned customer feedback, reducing follow-up support visits by 20%."
    ],
  },
  {
    title: "Audiovisual Technician ",
    job: "Preferred Connections",
    date: "2024-Present",
    contents: [
      "Audited audiovisual setups to identify inefficiencies.",
      "Streamlined system workflows for optimized maintenance.",
      "Reduced troubleshooting time by 20% through targeted process improvements.",
      "Boosted client satisfaction with consistently reliable AV performance."
    ],
  },
  {
    title: "Web Developer",
    job: "ITS Web Services",
    date: "2025-Present",
    contents: [
      "Maintained and updated the district website, ensuring content accuracy and timely releases.",
      "Created new web pages and online forms using CMS tools to streamline user interactions.",
      "Supported district-wide web applications and third-party platforms (e.g., Zoom, Canvas) to ensure seamless operation.",
      "Troubleshot and resolved web-related issues, improving site reliability and user satisfaction."
    ],
  },
];
export const reviews: ReviewItem[] = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
