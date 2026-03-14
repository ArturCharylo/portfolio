'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './Marquee.module.css';

gsap.registerPlugin(useGSAP);

const PROJECTS = [
  { id: 1, title: "Project Alpha", video: "/video1.mp4" },
  { id: 2, title: "Project Beta", video: "/video2.mp4" },
  { id: 3, title: "Project Gamma", video: "/video3.mp4" },
  { id: 4, title: "Project Delta", video: "/video4.mp4" },
];

export const Marquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current) return;

    const tl = gsap.to(trackRef.current, {
      xPercent: -50,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    // Pause on hover for better accessibility and focus
    const hoverIn = () => tl.pause();
    const hoverOut = () => tl.play();

    const track = trackRef.current;
    track.addEventListener('mouseenter', hoverIn);
    track.addEventListener('mouseleave', hoverOut);

    return () => {
      track.removeEventListener('mouseenter', hoverIn);
      track.removeEventListener('mouseleave', hoverOut);
    };
  }, { scope: containerRef });

  return (
    <div className={styles.marqueeContainer} ref={containerRef}>
      <div className={styles.track} ref={trackRef}>
        {/* Render the list twice to ensure seamless infinite scrolling */}
        {[...PROJECTS, ...PROJECTS].map((project, index) => (
          <ProjectCard 
            key={`${project.id}-${index}`} 
            title={project.title} 
            videoSrc={project.video} 
          />
        ))}
      </div>
    </div>
  );
};