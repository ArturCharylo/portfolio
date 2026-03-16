"use client";

import { useState, useEffect } from "react";
import styles from "./Stars.module.css";
import type { Star } from "@/app/types";

const starColors = ["252, 211, 211", "115, 138, 147", "201, 193, 193"];

export function GenerateStars() {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        const generatedStars = Array.from({ length: 6 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            color: starColors[Math.floor(Math.random() * starColors.length)],
            delay: `${Math.random() * 15}s`,
            duration: `${1 + Math.random() * 2}s`,
        }));

        setTimeout(() => {
            setStars(generatedStars);
        }, 0);
    }, []);

    const handleAnimationIteration = (id: number) => {
        setStars((prevStars) =>
            prevStars.map((star) =>
                star.id === id
                    ? {
                          ...star,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                      }
                    : star
            )
        );
    };

    return (
        <>
            {stars.length > 0 && (
                <style>{`
                    ${stars.map((star) => `
                        .star-${star.id} {
                            top: ${star.top};
                            left: ${star.left};
                            background-color: rgb(${star.color});
                            box-shadow: 0 0 8px 3px rgba(${star.color}, 1);
                            animation-duration: ${star.duration};
                            animation-delay: ${star.delay};
                        }
                    `).join('')}
                `}</style>
            )}

            <div className={styles.starsContainer}>
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className={`${styles.star} star-${star.id}`}
                        onAnimationIteration={() => handleAnimationIteration(star.id)}
                    />
                ))}
            </div>
        </>
    );
}