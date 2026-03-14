import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  videoSrc?: string;
}

export const ProjectCard = ({ title, description, videoSrc }: ProjectCardProps) => {
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
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};