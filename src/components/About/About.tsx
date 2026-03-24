'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';

import { SkillCard } from './SkillCards/SkillCard';

export const About = () => {
    const domRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (domRef.current) observer.unobserve(domRef.current);
                }
            });
        }, {
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.2
        });

        const currentRef = domRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`${styles.about} ${isVisible ? styles.visible : styles.hidden}`}
        >
            <p className={styles.description}>
                This is a simple React application that demonstrates the use of React Router for navigation and SCSS for styling. It includes a home page, an about page, and a contact page. The application is designed to be responsive and user-friendly.
            </p>

            <div className={styles.skills}>
                <SkillCard
                    title="React"
                    description=''
                />
                <SkillCard
                    title="TypeScript"
                    description=''
                />
                <SkillCard
                    title="CSS Modules"
                    description=''
                />
            </div>
        </div>
    );
};