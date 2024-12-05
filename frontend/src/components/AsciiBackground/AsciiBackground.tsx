'use client';

import React, {useEffect, useRef, useState} from 'react';

import styles from './AsciiArtGenerator.module.scss';

const selectedCharacterSet =
    "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,^`'. .:░▒▓█";
const characterSetLength = selectedCharacterSet.length;

const calculateCharacter = (
    x: number,
    y: number,
    cols: number,
    rows: number,
    aspect: number,
    time: number,
): string => {
    const timeFactor = time * 0.000_08;
    const size = Math.min(cols, rows);
    const aspectRatio = aspect * 0.2;
    const position = {
        x: -((5 * (x - cols / 4.5)) / size) * aspectRatio,
        y: -(5 * (y - rows / 4)) / size,
    };

    const index =
        Math.floor(
            Math.abs(Math.cos(position.x * position.x + position.y * position.y) - timeFactor) *
                characterSetLength +
                (Math.floor(x) % 2) * 2,
        ) % characterSetLength;
    return selectedCharacterSet[index];
};

type Size = {
    height: null | number;
    width: null | number;
};

const AsciiArtGenerator: React.FC = () => {
    const textRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState<Size>({height: null, width: null});

    useEffect(() => {
        const handleResize = () => {
            setSize({height: window.innerHeight, width: window.innerWidth});
        };

        // Initial size setting
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const element = textRef.current;
        if (!element || !size.width || !size.height) return undefined;

        const cols = Math.floor(size.width / 12) * 1.6;
        const rows = Math.floor(size.height / 12);
        const aspectRatio = cols / rows;

        const intervalId = setInterval(() => {
            let content = '';

            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    content += calculateCharacter(x, y, cols, rows, aspectRatio, Date.now());
                }

                content += '\n';
            }

            element.textContent = content;
        }, 1_000 / 60); // 60 fps

        return () => {
            clearInterval(intervalId);
        };
    }, [size]);

    return (
        <div className={styles.asciiContainer}>
            <div
                className={styles.art}
                ref={textRef}
                style={{
                    height: '100%',
                    overflow: 'hidden',
                    whiteSpace: 'pre',
                    width: '100%',
                }}
            />
        </div>
    );
};

export default () => {
    return <AsciiArtGenerator />;
};
