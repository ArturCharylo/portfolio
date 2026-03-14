import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Marquee.module.css';

const ProjectMarquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calculate the width of one full set of items
    const trackWidth = track.scrollWidth / 2;

    // Infinite seamless loop
    const animation = gsap.to(track, {
      x: -trackWidth,
      duration: 30, // Adjust speed here
      ease: "none",
      repeat: -1,
      // Pause on hover for better UX
      paused: false,
    });

    const handleMouseEnter = () => animation.pause();
    const handleMouseLeave = () => animation.resume();

    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      animation.kill();
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const projects = [1, 2, 3, 4, 5]; // Your project data

  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.track} ref={trackRef}>
        {/* Render twice for seamless looping */}
        {[...projects, ...projects].map((id, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.cardContent}>
              Project {id}
              {/* Internal independent animations go here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};