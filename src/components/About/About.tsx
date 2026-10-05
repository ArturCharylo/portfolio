'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
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
            rootMargin: '0px 0px 0px 0px',
            threshold: 0.05
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
            id="about"
        >
            <Link href="/projects" className={styles.viewAllLink}>
                <span className={styles.viewAllLinkText}>See my experience</span>
                <svg
                    className={styles.ctaArrow}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
            </Link>
            <p className={styles.description}>
                I&apos;m a Cloud & DevOps Engineer specializing in scalable infrastructure, automated CI/CD pipelines, and enterprise DevSecOps. From designing Kubernetes environments and hardened release gates to provisioning cloud architectures with Terraform, I focus on turning complex deployment workflows into reliable, observable systems. Passionate about systems performance and security, I continuously explore high-efficiency backends and cloud-native tech.
            </p>

            <div className={styles.skills}>
                <SkillCard />
            </div>
        </div>
    );
};