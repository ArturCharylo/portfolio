'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './Marquee.module.css';

gsap.registerPlugin(useGSAP);

const PROJECTS = [
  { id: 1, title: "Cryptono", description: "Password manager in an extension", video: "/video1.webm", poster: "/video1.webm", url: "https://github.com/ArturCharylo/Cryptono" },
  { id: 2, title: "Portfolio", description: "This site", video: "/video2.webm", poster: "/video2.webm", url: "https://github.com/ArturCharylo" },
  { id: 3, title: "Github", description: "My github overview", video: "/video3.webm", poster: "/video3.webm", url: "https://github.com/ArturCharylo" },
  { id: 4, title: "PyScripts", description: "Combination of Python scripts", video: "/video4.webm", poster: "/video4.webm", url: "https://github.com/ArturCharylo/Python_projects" },
];
// Projects section prepared for future personalizaton, need to prepare videos and upgrade descriptions. For now, it'll be commented out
// const PROJECTS = [
//   { 
//     id: 1, 
//     title: "Argon2 MV3", 
//     description: "NPM Library: High-performance WASM encryption solving CSP for Chrome Manifest V3.", // 
//     video: "/videos/argon2.webm", 
//     url: "https://github.com/ArturCharylo/argon2-extension-mv3" 
//   },
//   { 
//     id: 2, 
//     title: "Cryptono", 
//     description: "Vault engine using Rust-powered search and Brotli compression for near-native performance.", // [cite: 28, 36]
//     video: "/videos/cryptono.webm", 
//     url: "https://github.com/ArturCharylo/Cryptono" 
//   },
//   { 
//     id: 3, 
//     title: "Quote-CLI", 
//     description: "Open Source AI agent with multi-provider architecture using TypeScript OOP patterns.", // [cite: 53, 58]
//     video: "/videos/quote-cli.webm", 
//     url: "https://github.com/ArturCharylo/quote-cli" 
//   },
//   { 
//     id: 4, 
//     title: "E-commerce Sys", 
//     description: "Full-stack production app with Stripe webhooks, Docker, and automated CI pipelines.", // [cite: 44, 51, 52]
//     video: "/videos/ecommerce.webm", 
//     url: "https://github.com/ArturCharylo" 
//   },
//   { 
//     id: 5, 
//     title: "ToDo Python", 
//     description: "Decoupled ecosystem featuring Django REST, React, and Desktop GUI clients.", // [cite: 112, 113]
//     video: "/videos/todo.webm", 
//     url: "https://github.com/ArturCharylo/ToDo_python" 
//   },
// ];

// Moved outside component — stable reference, never recreated
const RENDER_PROJECTS = [...PROJECTS, ...PROJECTS];

export const Marquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current || !containerRef.current) return;

    const track = trackRef.current;
    const cylinderRadius = 1000;

    let cardCache: { el: HTMLElement; centerOffset: number }[] = [];
    let trackWidth = 0;

    const updateCache = () => {
      if (!trackRef.current || !containerRef.current) return;
      const cards = gsap.utils.toArray('.js-card', containerRef.current) as HTMLElement[];
      cardCache = cards.map((card) => ({
        el: card,
        centerOffset: card.offsetLeft + card.offsetWidth / 2,
      }));
      trackWidth = trackRef.current.scrollWidth;
    };
    updateCache(); // initial

    const tl = gsap.to(trackRef.current, {
      xPercent: -50,
      duration: 60,
      ease: "none",
      repeat: -1,
    });

    const hoverIn = () => tl.pause();
    const hoverOut = () => tl.play();
    track.addEventListener('mouseenter', hoverIn);
    track.addEventListener('mouseleave', hoverOut);

    const update3D = () => {
      if (!trackRef.current) return;
      const windowCenterX = window.innerWidth / 2;
      const progress = tl.progress();
      const trackX = -(progress * trackWidth * 0.5);

      cardCache.forEach(({ el, centerOffset }) => {
        const cardCenterX = trackX + centerOffset;
        const distance = cardCenterX - windowCenterX;
        const theta = distance / cylinderRadius;
        const targetX = cylinderRadius * Math.sin(theta);
        const xOffset = targetX - distance;
        const targetZ = cylinderRadius * (1 - Math.cos(theta));

        gsap.set(el, {
          x: xOffset,
          z: targetZ,
          rotationY: -theta * (180 / Math.PI),
        });
      });
    };

    const handleResize = () => {
      updateCache();
      // Force an immediate update to avoid a jump
      update3D();
    };
    window.addEventListener('resize', handleResize);

    gsap.ticker.add(update3D);
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const nowVisible = entry.isIntersecting;
          if (nowVisible === isVisible) return;
          isVisible = nowVisible;

          if (isVisible) {
            tl.play();
            gsap.ticker.add(update3D);
          } else {
            tl.pause();
            gsap.ticker.remove(update3D);
          }
        });
      },
      { threshold: 0.1 } // trigger when at least 10% visible
    );
    observer.observe(containerRef.current);


    return () => {
      track.removeEventListener('mouseenter', hoverIn);
      track.removeEventListener('mouseleave', hoverOut);
      gsap.ticker.remove(update3D);
      window.removeEventListener('resize', handleResize);
    };
  }, { scope: containerRef });

  return (
    <div className={styles.marqueeContainer} ref={containerRef}>
      <div className={styles.track} ref={trackRef}>
        {RENDER_PROJECTS.map((project, index) => (
          <ProjectCard
            key={`${project.id}-${index}`}
            title={project.title}
            description={project.description}
            videoSrc={project.video}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
};