export interface SkillCardData {
  id: "visual" | "structural" | "motion" | "neural";
  title: string;
  body: string;
  detail: string;
}

export const CARDS: SkillCardData[] = [
  {
    id: "visual",
    title: "Visual Intelligence",
    body: "Engineered precision through neural design frameworks. This capability leverages advanced aesthetic algorithms to predict user interaction paths and emotional resonance. By synthesising data-driven insights with modernist brutalism, I create layouts that aren't just seen—they are experienced.",
    detail:
      "Every pixel is calculated to maximize engagement while maintaining a serene, minimalist visual hierarchy. I deploy generative style-guides that adapt in real-time to user behavior, ensuring the interface remains balanced and authoritative across all digital touchpoints.",
  },
  {
    id: "structural",
    title: "Structural Core",
    body: "The architectural backbone of high-performance interfaces. Utilizing multi-layered system management, I build robust digital infrastructures that handle complex logic through elegant, streamlined pathways. This process involves deep-level component atomization and performance tuning.",
    detail:
      "My proprietary tech-stack optimization ensures sub-100ms response times for global deployments. By prioritizing clean code architecture and modular scalability, I ensure your digital presence is built on a foundation of unshakeable stability and infinite growth potential.",
  },
  {
    id: "motion",
    title: "Ethereal Motion",
    body: "Curating the rhythm of interaction through temporal design. I treat motion not as an embellishment, but as a primary communicative tool. By implementing physics-based transitions and generative animation sequences, I inject a living 'soul' into every interface.",
    detail:
      "Movement is used to direct cognitive load and guide user focus with subconscious precision. My motion systems are rooted in natural kinetics, creating a tactile fluid experience that makes the boundary between the physical and the virtual feel indistinguishable.",
  },
  {
    id: "neural",
    title: "Neural Experience",
    body: "Pioneering the next wave of anticipatory interfaces. I integrate machine-learning feedback loops directly into the UX layer, allowing platforms to evolve alongside their users. This is high-level behavioral architecture that solves needs before they are consciously recognized.",
    detail:
      "My approach focuses on reducing cognitive friction through context-aware state management. By mapping user intent across high-dimensional data points, I create pathways that feel intuitive, seamless, and almost telepathic in their execution.",
  },
];