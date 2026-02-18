import React, { useState, useEffect, useMemo } from 'react';

interface SlotTextProps {
    text: string;
    delay?: number;
    duration?: number;
    className?: string;
}

const SlotText: React.FC<SlotTextProps> = ({ text, delay = 0, duration = 1000, className = "" }) => {
    const [displayText, setDisplayText] = useState('');
    const [isStarted, setIsStarted] = useState(false);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

    // Randomize reveal order/time for each character
    const characterMetadata = useMemo(() => {
        return text.split('').map(() => ({
            stopAt: Math.random() * 0.8 + 0.2, // Between 20% and 100% of duration
        }));
    }, [text]);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setIsStarted(true);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!isStarted) return;

        let startTime = Date.now();
        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            setDisplayText(
                text
                    .split('')
                    .map((char, index) => {
                        if (progress >= characterMetadata[index].stopAt || char === ' ') {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('')
            );

            if (progress >= 1) {
                setDisplayText(text);
                clearInterval(interval);
            }
        }, 40);

        return () => clearInterval(interval);
    }, [isStarted, text, duration, characterMetadata]);

    return (
        <span className={`${className} inline-block min-w-[1ch]`}>
            {displayText.split('').map((char, i) => {
                const isRevealed = isStarted && (text[i] === char || text[i] === ' ');
                return (
                    <span
                        key={i}
                        className={`transition-all duration-75 ${!isRevealed ? 'opacity-70 blur-[0.5px]' : ''}`}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                );
            })}
        </span>
    );
};

export default SlotText;
