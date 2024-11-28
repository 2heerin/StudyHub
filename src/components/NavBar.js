import React from 'react';
import { Link } from 'react-scroll'; // react-scroll 사용
import styles from '../styles/Navbar.module.css'; // CSS 모듈 import

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}><Link to="home" smooth={true} duration={500} className={styles.navLink}>Home</Link></li>
                <li className={styles.navItem}><Link to="skills" smooth={true} duration={500} className={styles.navLink}>Skills</Link></li>
                <li className={styles.navItem}><Link to="projects" smooth={true} duration={500} className={styles.navLink}>Projects</Link></li>
                <li className={styles.navItem}><Link to="contact" smooth={true} duration={500} className={styles.navLink}>Contact</Link></li>
                <li className={styles.navItem}><Link to="about" smooth={true} duration={500} className={styles.navLink}>About</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
