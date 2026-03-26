import styles from "./SkillCard.module.css";

interface SkillCards {
  id: "visual" | "structural" | "motion" | "neural";
  title: string;
  body: string;
  detail: string;
}

const CARDS: SkillCards[] = [
  {
    id: "visual",
    title: "Visual Intelligence",
    body: "Engineered precision through neural design frameworks. This capability leverages advanced aesthetic algorithms to predict user interaction paths and emotional resonance. By synthesising data-driven insights with modernist brutalism, we create layouts that aren't just seen—they are experienced.",
    detail:
      "Every pixel is calculated to maximize engagement while maintaining a serene, minimalist visual hierarchy. We deploy generative style-guides that adapt in real-time to user behavior, ensuring the interface remains balanced and authoritative across all digital touchpoints.",
  },
  {
    id: "structural",
    title: "Structural Core",
    body: "The architectural backbone of high-performance interfaces. Utilizing multi-layered system management, we build robust digital infrastructures that handle complex logic through elegant, streamlined pathways. This process involves deep-level component atomization and performance tuning.",
    detail:
      "Our proprietary tech-stack optimization ensures sub-100ms response times for global deployments. By prioritizing clean code architecture and modular scalability, we ensure your digital presence is built on a foundation of unshakeable stability and infinite growth potential.",
  },
  {
    id: "motion",
    title: "Ethereal Motion",
    body: "Curating the rhythm of interaction through temporal design. We treat motion not as an embellishment, but as a primary communicative tool. By implementing physics-based transitions and generative animation sequences, we inject a living 'soul' into every interface.",
    detail:
      "Movement is used to direct cognitive load and guide user focus with subconscious precision. Our motion systems are rooted in natural kinetics, creating a tactile fluid experience that makes the boundary between the physical and the virtual feel indistinguishable.",
  },
  {
    id: "neural",
    title: "Neural Experience",
    body: "Pioneering the next wave of anticipatory interfaces. We integrate machine-learning feedback loops directly into the UX layer, allowing platforms to evolve alongside their users. This is high-level behavioral architecture that solves needs before they are consciously recognized.",
    detail:
      "Our approach focuses on reducing cognitive friction through context-aware state management. By mapping user intent across high-dimensional data points, we create pathways that feel intuitive, seamless, and almost telepathic in their execution.",
  },
];

function VisualIllustration() {
  return (
    <div className={styles.illustration}>
      <div className={`${styles.illustrationGlow} ${styles.glowPrimary}`} />
      <div className={styles.discsWrapper}>
        <div className={`${styles.disc} ${styles.disc1}`} />
        <div className={`${styles.disc} ${styles.disc2}`} />
        <div className={`${styles.disc} ${styles.disc3}`} />
        <div className={`${styles.disc} ${styles.disc4}`} />
      </div>
    </div>
  );
}

function StructuralIllustration() {
  return (
    <div className={styles.illustration}>
      <div className={`${styles.illustrationGlow} ${styles.glowSecondary}`} />
      <div className={styles.squareWrapper}>
        <div className={styles.squareOuter} />
        <div className={styles.squareInner} />
        <div className={styles.squareDashed} />
      </div>
    </div>
  );
}

function MotionIllustration() {
  return (
    <div className={styles.illustration}>
      <div className={`${styles.illustrationGlow} ${styles.glowTertiary}`} />
      <div className={styles.orbitWrapper}>
        <div className={`${styles.orbitRing} ${styles.orbitRingLarge}`} />
        <div className={`${styles.orbitRing} ${styles.orbitRingSmall}`} />
        <div className={styles.orbitCore} />
      </div>
    </div>
  );
}

function NeuralIllustration() {
  return (
    <div className={styles.illustration}>
      <div className={`${styles.illustrationGlow} ${styles.glowNeutral}`} />
      <div className={styles.barsWrapper}>
        <div className={`${styles.bar} ${styles.barShort}`} style={{ animationDelay: "0.1s" }} />
        <div className={`${styles.bar} ${styles.barTall}`} style={{ animationDelay: "0.3s" }} />
        <div className={`${styles.bar} ${styles.barShort}`} style={{ animationDelay: "0.5s" }} />
      </div>
    </div>
  );
}

const illustrations: Record<SkillCards["id"], React.FC> = {
  visual: VisualIllustration,
  structural: StructuralIllustration,
  motion: MotionIllustration,
  neural: NeuralIllustration,
};

export function SkillCard() {
  return (
    <section className={styles.section}>
      {/* Background blobs */}
      <div className={`${styles.blob} ${styles.blobTopRight}`} />
      <div className={`${styles.blob} ${styles.blobBottomLeft}`} />

      <div className={styles.inner}>
        {/* Section header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Proprietary Expertise</span>
          <h2 className={styles.heading}>
            Modernist<br />Architecture
          </h2>
        </div>

        {/* 2×2 Grid */}
        <div className={styles.grid}>
          {CARDS.map((card) => {
            const Illus = illustrations[card.id];
            return (
              <div key={card.id} className={`${styles.card} ${styles[`card--${card.id}`]}`}>
                {/* Illustration box */}
                <div className={styles.illusBox}>
                  <Illus />
                </div>

                {/* Text */}
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardText}>{card.body}</p>
                  <p className={styles.cardDetail}>{card.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}