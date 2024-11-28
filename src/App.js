import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LP from './components/LP';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import './styles/App.module.css';

const App = () => {
    const [currentSection, setCurrentSection] = useState('');

    const handleSectionEnter = (section) => {
        setCurrentSection(section);
    };

    return (
        <div className="app">
            <Navbar />
            <LP name="home" onEnter={handleSectionEnter}>
                <Home />
            </LP>
            <LP name="skills" onEnter={handleSectionEnter}>
                <Skills />
            </LP>
            <LP name="projects" onEnter={handleSectionEnter}>
                <Projects />
            </LP>
            <LP name="contact" onEnter={handleSectionEnter}>
                <Contact />
            </LP>
            <LP name="about" onEnter={handleSectionEnter}>
                <About />
            </LP>
        </div>
    );
};

export default App;
