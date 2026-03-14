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
    if (!trackRef.current || !containerRef.current) return;

    const track = trackRef.current;
    const cards = gsap.utils.toArray('.js-card', containerRef.current) as HTMLElement[];

    // Infinite horizontal loop
    const tl = gsap.to(track, {
      xPercent: -50,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    const hoverIn = () => tl.pause();
    const hoverOut = () => tl.play();
    track.addEventListener('mouseenter', hoverIn);
    track.addEventListener('mouseleave', hoverOut);

    const update3D = () => {
      const windowCenterX = window.innerWidth / 2;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const distance = cardCenterX - windowCenterX;
        const normalizedDistance = distance / (window.innerWidth / 2);
        const maxRotation = 35;
        const depth = -150;

        gsap.set(card, {
          rotationY: normalizedDistance * maxRotation,
          z: Math.abs(normalizedDistance) * depth,
          scale: 1 - Math.abs(normalizedDistance) * 0.1,
        });
      });
    };

    // Run the 3D calculation on every frame
    gsap.ticker.add(update3D);

    return () => {
      track.removeEventListener('mouseenter', hoverIn);
      track.removeEventListener('mouseleave', hoverOut);
      gsap.ticker.remove(update3D);
    };
  }, { scope: containerRef });

  return (
    <div className={styles.marqueeContainer} ref={containerRef}>
      <div className={styles.track} ref={trackRef}>
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