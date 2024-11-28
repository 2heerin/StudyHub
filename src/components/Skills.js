import React from 'react';
import styles from '../styles/Skills.module.css';
import Navbar from './Navbar';
const Skills = () => {
    // 스킬 목록 배열
    const skills = [
        "JavaScript",
        "React",
        "CSS",
        "HTML",
        "Node.js",
        "Git"
    ];

    return (
        <section className={`${styles.section} ${styles.skills}`}>
            <Navbar/>
            <h2>Skills Section</h2>
            <div className={styles.skillsList}>
                {skills.map(skill => (
                    <div className={styles.skillItem} key={skill}>
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
