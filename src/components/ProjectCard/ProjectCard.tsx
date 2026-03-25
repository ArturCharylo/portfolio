import styles from './ProjectCard.module.css';
import Link from 'next/link';
import type { ProjectCardProps } from '@/app/types';

export const ProjectCard = ({ title, description, videoSrc, posterSrc, url }: ProjectCardProps) => {
  return (
    <div className={`${styles.cardContainer} js-card`}>
      <Link href={`${url}`} className={styles.linkOverlay} aria-label={`View details about ${title}`} target='_blank'>
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
          <div className={`${styles.overlay} glass-card`}>
            <div className={styles.contentWrapper}>
              <div className={styles.textContent}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
              </div>
              <span className={styles.exploreBadge}>Explore</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};