export interface SkillCardData {
  id: "visual" | "structural" | "motion" | "neural";
  title: string;
  body: string;
  detail: string;
}

export const CARDS: SkillCardData[] = [
  {
    id: "visual",
    title: "Frontend Engineering",
    body: "Crafting secure and responsive user interfaces using React, TypeScript, and Vite. My approach to the frontend focuses on bridging the gap between high-level aesthetics and robust session protection, ensuring that performance never comes at the cost of security.",
    detail:
      "I implement advanced patterns like i18n dynamic translations and Anti-XSS protections. Whether it's a PWA or a complex E-commerce solution, I ensure sub-second rendering and a seamless user experience across all modern browsers.",
  },
  {
    id: "structural",
    title: "High-Performance Core",
    body: "The architectural backbone of my work lies in low-level systems and high-performance web tech. By leveraging C++, Rust, and WebAssembly, I build core modules that handle heavy computations—like encryption and data compression—with near-native efficiency.",
    detail:
      "From developing WASM-based Argon2id libraries to solving Content Security Policy (CSP) restrictions in Manifest V3, I focus on building unshakeable foundations that scale. My code is rooted in clean architecture and rigorous performance tuning.",
  },
  {
    id: "motion",
    title: "DevOps & Automation",
    body: "Orchestrating the rhythm of deployment through automated pipelines and containerization. I view DevOps not as a secondary task, but as the vital 'motion' that keeps software alive and evolving through CI/CD, Docker, and Linux-based infrastructure.",
    detail:
      "I specialize in automating deployment workflows using GitHub Actions and GitLab CI. By managing environments with Docker Compose and Nginx, I create fluid, self-healing systems that reduce technical debt and accelerate the delivery cycle.",
  },
  {
    id: "neural",
    title: "Intelligent Systems",
    body: "Pioneering the integration of AI and scalable logic. I design multi-provider AI architectures and non-linear learning algorithms that adapt to user behavior. This is about creating systems that are not just functional, but context-aware and extensible.",
    detail:
      "Through my contributions to Open Source (like quote-cli), I've implemented OOP design patterns to support diverse AI APIs including OpenAI and Anthropic. My focus is on reducing cognitive friction by building intelligent, predictive backend logic.",
  },
];