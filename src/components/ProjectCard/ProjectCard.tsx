import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  videoSrc?: string;
}

export const ProjectCard = ({ title, videoSrc }: ProjectCardProps) => {
  return (
    <div className={`${styles.cardContainer} js-card`}>
      <video 
        className={styles.videoBg}
        src={videoSrc}
        autoPlay 
        loop 
        muted 
        playsInline 
      />
      <div className={styles.overlay}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
};