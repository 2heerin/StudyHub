import React, { useEffect, useState } from 'react';
import styles from '../styles/LP.module.css';

const LP = ({ name, children, onEnter }) => {
    const [isInView, setIsInView] = useState(false);

    // 스크롤 이벤트로 요소가 뷰포트에 존재하는지를 추적
    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector(`.${styles[name]}`);
            const rect = element.getBoundingClientRect();
            setIsInView(rect.top >= 0 && rect.bottom <= window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [name]);

    useEffect(() => {
        if (isInView && onEnter) {
            onEnter(name); // 뷰포트에 들어왔을 때 콜백 전달
        }
    }, [isInView, onEnter, name]);

    return (
        <div className={`${styles.lpElement} ${styles[name]} ${isInView ? styles.inView : ''}`}>
            {children}
        </div>
    );
};

export default LP;
