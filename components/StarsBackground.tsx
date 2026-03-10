'use client';

import { useEffect, useState } from 'react';

export default function StarsBackground({ count = 80 }: { count?: number }) {
    const [stars, setStars] = useState<{ size: number; left: number; top: number; dur: string; delay: string }[]>([]);

    useEffect(() => {
        const newStars = Array.from({ length: count }).map(() => ({
            size: Math.random() * 2.5 + 0.5,
            left: Math.random() * 100,
            top: Math.random() * 100,
            dur: (Math.random() * 3 + 2).toFixed(1) + 's',
            delay: (Math.random() * 4).toFixed(1) + 's',
        }));
        setStars(newStars);
    }, [count]);

    return (
        <div className="stars-bg z-0" aria-hidden="true">
            {stars.map((star, i) => (
                <div
                    key={i}
                    className="star"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        animationDuration: star.dur,
                        animationDelay: star.delay,
                    }}
                />
            ))}
        </div>
    );
}
