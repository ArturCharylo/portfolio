import styles from './ProjectIntro.module.css'

export function ProjectIntro() {
  return (
    <div className={styles.projectIntro}>
      <p className={styles.description}>
        Explore a selection of my engineering projects, tools, and infrastructure designs. Each highlights practical problem-solving across cloud-native environments, automated delivery pipelines, and high-performance systems.
      </p>
    </div>
  );
}