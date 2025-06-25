import React from "react";
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu, scrollToSection }) => {

  return (
    <div 
      className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className="mobile-menu-container">
        <img className="logo" src="./Logo.png" alt="Logo" />

        <ul>
          <li><a className="menu-item" onClick={() => scrollToSection("hero")}>Home</a></li>
          <li><a className="menu-item" onClick={() => scrollToSection("about")}>About Me</a></li>
          <li><a className="menu-item" onClick={() => scrollToSection("skills")}>Skills</a></li>
          <li><a className="menu-item" onClick={() => scrollToSection("experience")}>Education</a></li>
          <li><a className="menu-item" onClick={() => scrollToSection("projects")}>My Projects</a></li>
          <button className="contact-btn" onClick={() => scrollToSection("contact")}>
            Reach Me
          </button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;