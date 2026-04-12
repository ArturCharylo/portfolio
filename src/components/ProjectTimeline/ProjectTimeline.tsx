'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import styles from './ProjectTimeline.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export interface TimelineProject {
  id: number;
  title: string;
  role: string;
  description: string;
  videoSrc?: string;
  posterSrc?: string;
  url?: string;
}

interface ProjectTimelineProps {
  projects: TimelineProject[];
}

export const ProjectTimeline = ({ projects }: ProjectTimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineProgressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !lineProgressRef.current) return;

    // Animate the vertical timeline line progress
    gsap.to(lineProgressRef.current, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    // Animate each timeline item
    const items = gsap.utils.toArray('.js-timeline-item') as HTMLElement[];
    items.forEach((item, index) => {
      // Determine if item is on the left or right (odd vs even in CSS, 0-indexed here)
      const isLeft = index % 2 === 0;
      const xOffset = isLeft ? -100 : 100;

      gsap.from(item, {
        opacity: 0,
        x: xOffset,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 75%',
          end: 'top 15%',
          toggleActions: 'play reverse play reverse',
        },
      });

      // Animate the node border color to light up when reached
      const node = item.querySelector('.js-timeline-node');
      if (node) {
        gsap.to(node, {
          borderColor: 'var(--secondary)',
          backgroundColor: 'var(--timeline-highlight)',
          boxShadow: '0 0 15px rgba(var(--secondary-rgb), 0.8)',
          scrollTrigger: {
            trigger: item,
            start: 'top 65%',
            toggleActions: 'play reverse play reverse',
          },
        });
      }
    });

  }, { scope: containerRef });

  return (
    <div className={styles.timelineContainer} ref={containerRef}>
      <div className={styles.timelineLine}>
        <div className={styles.timelineLineProgress} ref={lineProgressRef}></div>
      </div>

      {projects.map((project) => (
        <div key={project.id} className={`${styles.timelineItem} js-timeline-item`}>
          <div className={`${styles.timelineNode} js-timeline-node`}></div>
          <div className={styles.timelineContent}>
            <div className={styles.timelineRole}>{project.role}</div>
            <h2 className={styles.timelineTitle}>{project.title}</h2>
            <p className={styles.timelineDescription}>{project.description}</p>

            {project.url && (
              <Link href={project.url} className={styles.timelineLink} target='_blank' rel="noopener noreferrer">
                View Project
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
