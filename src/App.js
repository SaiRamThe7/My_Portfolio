// src/App.js
import React from 'react';
import Introduction from './Introduction';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import './App.css';



function App() {
    return (
        <div className="app-container"> 
            <Introduction />
            <Skills />
            <Projects />
            <Contact /> 
        </div>
    );
}

export default App;
