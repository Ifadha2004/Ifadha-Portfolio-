import React from "react";
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div 
      className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className="mobile-menu-container">
        <img className="logo" src="./Logo.png" alt="Logo" />

        <ul>
          <li>
            <a className="menu-item" href="#">Home</a>
          </li>
          <li>
            <a className="menu-item" href="#">About Me</a>
          </li>
          <li>
            <a className="menu-item" href="#">Skills</a>
          </li>
          <li>
            <a className="menu-item" href="#">Education</a>
          </li>
          <li>
            <a className="menu-item" href="#">My Projects</a>
          </li>
          <li>
            <a className="menu-item" href="#">Contact Me</a>
          </li>
          <button className="contact-btn" onClick={() => {}}>
            Reach Me
          </button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
