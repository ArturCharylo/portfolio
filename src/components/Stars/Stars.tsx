"use client";

import { useState, useEffect } from "react";
import styles from "./Stars.module.css";

const starColors = ["252, 211, 211", "115, 138, 147", "201, 193, 193"];

function SingleStar({ id }: { id: number }) {
    const [config, setConfig] = useState({
        top: '0%',
        left: '0%',
        color: '255, 255, 255',
        duration: '0s',
        delay: '0s',
        isReady: false
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setConfig({
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                color: starColors[Math.floor(Math.random() * starColors.length)],
                duration: `${2 + Math.random() * 4}s`,
                delay: `${Math.random() * 15}s`,
                isReady: true
            });
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    const handleIteration = () => {
        setConfig(prev => ({
            ...prev,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: `${2 + Math.random() * 4}s`,
            color: starColors[Math.floor(Math.random() * starColors.length)],
            delay: '0s'
        }));
    };

    if (!config.isReady) return null;

    return (
        <>
            <style>{`
                .star-${id} {
                    top: ${config.top};
                    left: ${config.left};
                    background-color: rgb(${config.color});
                    box-shadow: 0 0 8px 3px rgba(${config.color}, 1);
                    animation-duration: ${config.duration};
                    animation-delay: ${config.delay};
                }
            `}</style>
            <div
                className={`${styles.star} star-${id}`}
                onAnimationIteration={handleIteration}
            />
        </>
    );
}

export function GenerateStars() {
    const stars = Array.from({ length: 7 }).map((_, i) => i);

    return (
        <div className={styles.starsContainer}>
            {stars.map((id) => (
                <SingleStar key={id} id={id} />
            ))}
        </div>
    );
}