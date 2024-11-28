import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Navbar from './Navbar';
import Button from './Button';

const Home = () => {

    // LP 이미지 회전을 위한 스크롤 이벤트 등록
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const rotation = scrollTop / 5; // 회전 정도 설정

            const lpImage = document.querySelector(`.${styles.circle} img`);
            if (lpImage) {
                lpImage.style.transform = `rotate(${rotation}deg)`; // 이미지 회전
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={`${styles.section} ${styles.home}`}>
            <Navbar />
            <h2 className={styles.h2}>프론트 엔드 개발자 포트폴리오 웹사이트</h2>
            <div className={styles.box}>
                <div className={styles.empCard}>
                    여백
                </div>
                <div className={styles.contentCard}>
                    <div className={styles.columAlign}>
                        <div className={styles.topCard}>
                            <p>소개</p>
                        </div>
                        <div className={styles.centerCard}>
                            <div className={styles.rowAlign}>
                                <div className={styles.circle}>
                                    <img 
                                        src={require('../assets/미모티콘 700.png')} 
                                        alt="미모티콘 이미지" // 이미지 설명
                                    />
                                </div>

                                <div className={styles.card}>
                                    <div className={styles.columAlign}>
                                        <p>2003.02.24 - 이우석</p>
                                        <p>아주대학교 E-Business</p>
                                    </div>
                                    <div className={styles.buttonContainer}>
                                        <Button
                                            label="Email" 
                                            variant="primary"
                                            external={false} 
                                        />
                                        <Button 
                                            label="GitHub" 
                                            onClick={() => console.log('GitHub Clicked')} 
                                            variant="primary"
                                            to="https://github.com/2heerin"
                                            external={true}
                                        />
                                        <Button
                                            label="Blog" 
                                            onClick={() => console.log('Blog Clicked')} 
                                            variant="primary" 
                                            to="https://blog.naver.com/dldntjr0302"
                                            external={true}
                                        />
                                        <Button
                                            label="Notion" 
                                            onClick={() => console.log('Notion Clicked')} 
                                            variant="primary"                                    
                                            to="https://www.notion.so/java-script-2515ab1fa7cd49069a4f5f440235217b"
                                            external={true}
                                        />
                                        <Button
                                            label="Instagram" 
                                            onClick={() => console.log('Instagram Clicked')} 
                                            variant="primary" 
                                            to="https://www.instagram.com/dldntjr0302/"
                                            external={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardBottom}>
                            <p>Frontend를 깊이 있게 다져나가고자 하는 주니어 개발자입니다. 다양한 기술을 배우고, 여러 프로젝트를 진행하며 경험을 쌓고 있습니다.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.empCard}>
                    여백
                </div>
            </div>
        </section>
    );
};

export default Home;
