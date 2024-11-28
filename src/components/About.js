import React, { useState } from 'react';
import styles from '../styles/About.module.css';

const About = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleSpin = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className={styles.container}>
            <div className={styles.lpContainer} onClick={toggleSpin}>
                <img 
                    src={require('../assets/rb_4131.png')}
                    alt="LP Record"
                    className={`${styles.lpImage} ${isPlaying ? styles.playing : ''}`}
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>About Me</h1>
                <p className={styles.description}>
                    LP판에서 영감을 받아, 제 음악적 여정과 이를 통해 얻은 개발 경험을 소개합니다.
                </p>
            </div>
        </div>
    );
};

export default About;
