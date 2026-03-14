'use client';

import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  videoSrc?: string;
}

export const ProjectCard = ({ title, videoSrc }: ProjectCardProps) => {
  return (
    <div className={styles.cardContainer}>
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
        <p style={{ color: '#aaa', fontSize: '0.8rem', margin: 0 }}>
          View Case Study
        </p>
      </div>
    </div>
  );
};