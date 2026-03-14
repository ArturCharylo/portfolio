import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  videoSrc?: string;
  // Added poster prop for immediate visual feedback
  posterSrc?: string; 
}

export const ProjectCard = ({ title, description, videoSrc, posterSrc }: ProjectCardProps) => {
  return (
    <div className={`${styles.cardContainer} js-card`}>
      <div className={styles.cardInner}>
        <video 
          className={styles.videoBg}
          src={videoSrc}
          poster={posterSrc}
          autoPlay 
          loop 
          muted 
          playsInline
          preload="metadata" 
        />
        <div className={styles.overlay}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};