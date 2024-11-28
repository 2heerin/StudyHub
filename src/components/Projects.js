import React,{useState, useEffect} from 'react';
import styles from '../styles/Projects.module.css';

const Projects = () => {
const [projects, setProjects] = useState([]);

        useEffect(() => {
            fetch('/api/projects')
                .then((response) => response.json())
                .then((data) => setProjects(data));
        }, []);    
    
    return (
        <section className={`${styles.section} ${styles.projects}`}>
            <h2>Projects Section1</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
