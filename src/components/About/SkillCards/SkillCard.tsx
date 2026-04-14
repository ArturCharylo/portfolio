import styles from "./SkillCard.module.css";
import { CARDS, SkillCardData } from "./constants";

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
        <div className={`${styles.bar} ${styles.barShort} ${styles.delay1}`} />
        <div className={`${styles.bar} ${styles.barTall} ${styles.delay2}`} />
        <div className={`${styles.bar} ${styles.barShort} ${styles.delay3}`} />
      </div>
    </div>
  );
}

const illustrations: Record<SkillCardData["id"], React.FC> = {
  visual: VisualIllustration,
  structural: StructuralIllustration,
  motion: MotionIllustration,
  neural: NeuralIllustration,
};

export function SkillCard() {
  return (
    <section className={styles.section}>

      <div className={styles.inner}>
        {/* Section header */}
        <div className={styles.header}>
          <h2 className={styles.eyebrow}>Proprietary Expertise</h2>
          <h2 className={styles.heading}>
            Modernist Architecture
          </h2>
        </div>

        {/* 2×2 Grid */}
        <div className={styles.grid}>
          {CARDS.map((card) => {
            const Illus = illustrations[card.id];
            return (
              <div key={card.id} className={`${styles.card} ${styles[`card--${card.id}`]}`}>
                <div className={styles.illusBox}>
                  <Illus />
                </div>

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