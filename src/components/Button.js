import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 import
import styles from "../styles/Button.module.css"; // 버튼의 CSS 모듈 import

const Button = ({ label, onClick, variant, to, external }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (onClick) onClick(); // onClick이 있을 경우 실행

        if (external && to) {
            window.open(to, '_blank'); // 외부 사이트로 새 탭에서 이동
        } else if (to) {
            navigate(to); // 내부 경로로 이동
        }
    };

    return (
        <button 
            className={`${styles.button} ${styles[variant]}`} 
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

export default Button;
