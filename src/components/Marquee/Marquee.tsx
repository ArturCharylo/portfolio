'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './Marquee.module.css';

gsap.registerPlugin(useGSAP);

const PROJECTS = [
  { id: 1, title: "Cryptono", description: "Password manager in an extension", video: "/video1.mp4" },
  { id: 2, title: "Portfolio", description: "This site", video: "/video2.mp4" },
  { id: 3, title: "Github", description: "My github overview", video: "/video3.mp4" },
  { id: 4, title: "PyScripts", description: "Combination of Python scripts", video: "/video4.mp4" },
];

export const Marquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current || !containerRef.current) return;

    const track = trackRef.current;
    const cards = gsap.utils.toArray('.js-card', containerRef.current) as HTMLElement[];

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
      const trackRect = track.getBoundingClientRect();
      const cylinderRadius = 1000; 

      cards.forEach((card) => {
        const cardCenterX = trackRect.left + card.offsetLeft + (card.offsetWidth / 2);
        
        const distance = cardCenterX - windowCenterX;
        const theta = distance / cylinderRadius; 

        const targetX = cylinderRadius * Math.sin(theta);
        const xOffset = targetX - distance;

        const targetZ = cylinderRadius * (1 - Math.cos(theta));

        gsap.set(card, {
          x: xOffset,
          z: targetZ,
          rotationY: -theta * (180 / Math.PI),
        });
      });
    };
    gsap.ticker.add(update3D);

    return () => {
      track.removeEventListener('mouseenter', hoverIn);
      track.removeEventListener('mouseleave', hoverOut);
      gsap.ticker.remove(update3D);
    };
  }, { scope: containerRef });
  const renderProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS, ...PROJECTS];

  return (
    <div className={styles.marqueeContainer} ref={containerRef}>
      <div className={styles.track} ref={trackRef}>
        {renderProjects.map((project, index) => (
          <ProjectCard 
            key={`${project.id}-${index}`} 
            title={project.title}
            description={project.description}
            videoSrc={project.video} 
          />
        ))}
      </div>
    </div>
  );
};