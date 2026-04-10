'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './Timeline.module.css';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const PROJECTS = [
  { id: 1, title: "Cryptono", role: "Fullstack Developer", description: "Password manager in an extension", video: "/video1.webm", poster: "/video1.webm", url: "https://github.com/ArturCharylo/Cryptono" },
  { id: 2, title: "Portfolio", role: "Frontend Developer", description: "This site", video: "/video2.webm", poster: "/video2.webm", url: "https://github.com/ArturCharylo" },
  { id: 3, title: "Github", role: "Open Source Contributor", description: "My github overview", video: "/video3.webm", poster: "/video3.webm", url: "https://github.com/ArturCharylo" },
  { id: 4, title: "PyScripts", role: "Python Developer", description: "Combination of Python scripts", video: "/video4.webm", poster: "/video4.webm", url: "https://github.com/ArturCharylo/Python_projects" },
];

export const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray('.js-timeline-card', containerRef.current) as HTMLElement[];

    // Animate the central line drawing down
    gsap.fromTo('.js-timeline-line',
      { height: 0 },
      {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        }
      }
    );

    // Animate each card
    cards.forEach((card, i) => {
      const isLeft = i % 2 === 0;

      gsap.fromTo(card,
        {
          opacity: 0,
          x: isLeft ? -50 : 50,
          y: 50,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate the dot on the line
      const dot = card.parentElement?.querySelector('.js-timeline-dot');
      if(dot) {
          gsap.fromTo(dot,
              { scale: 0, opacity: 0 },
              {
                  scale: 1,
                  opacity: 1,
                  duration: 0.5,
                  ease: 'back.out(1.7)',
                  scrollTrigger: {
                      trigger: card,
                      start: 'top 80%',
                      toggleActions: 'play none none reverse'
                  }
              }
          );
      }
    });

  }, { scope: containerRef });

  return (
    <div className={styles.timelineContainer} ref={containerRef}>
      <div className={styles.lineWrapper}>
          <div className={`${styles.line} js-timeline-line`}></div>
      </div>

      <div className={styles.projectsList}>
        {PROJECTS.map((project, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={project.id} className={`${styles.timelineItem} ${isLeft ? styles.itemLeft : styles.itemRight}`}>

              <div className={`${styles.dot} js-timeline-dot`}></div>

              <div className={`${styles.cardWrapper} js-timeline-card`}>
                <ProjectCard
                  title={project.title}
                  role={project.role}
                  description={project.description}
                  videoSrc={project.video}
                  url={project.url}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};