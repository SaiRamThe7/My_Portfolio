// src/Header.js
import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-text">
                    <h1>Your Name</h1>
                    <p>Web Developer | Passionate about creating awesome web experiences</p>
                </div>
                <div className="header-photo">
                    <img src="path/to/your/photo.jpg" alt="Your Photo" />
                </div>
            </div>
        </header>
    );
}

export default Header;
