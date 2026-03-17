import styles from './ProjectIntro.module.css'

export function ProjectIntro() {
  return (
    <div className={styles.projectIntro}>
      <h2 className={styles.description}>Products</h2>
      <p className={styles.description}>
        Explore a selection of my products, showcasing my skills and creativity in various domains. Each product highlights unique challenges and innovative solutions, reflecting my passion for technology and design.
      </p>
    </div>
  );
}