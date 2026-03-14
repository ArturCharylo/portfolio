'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  videoSrc?: string;
}

export const ProjectCard = ({ title, videoSrc }: ProjectCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.cardContainer} ref={containerRef}>
      {/* Background video that animates independently */}
      <video 
        className={styles.videoBg}
        src={videoSrc}
        autoPlay 
        loop 
        muted 
        playsInline 
      />
      
      {/* Overlay with info that appears on hover via Framer Motion */}
      <motion.div 
        className={styles.overlay}
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>View Project Details</p>
      </motion.div>
    </div>
  );
};