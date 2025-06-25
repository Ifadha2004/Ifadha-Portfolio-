import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';
import AboutMe from '../AboutMe/AboutMe';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    setOpenMenu(false); // Close mobile menu if open
  }
};

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} scrollToSection={scrollToSection}/> 

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./Logo.png" alt="Logo" />

          <ul>
            <li>
              <a className="menu-item" onClick={() => scrollToSection("hero")}>Home</a></li>
            <li>
              <a className='menu-item' onClick={() => scrollToSection("about")}>About Me</a>
            </li>

            <li>
              <a className='menu-item' onClick={() => scrollToSection("skills")}>Skills</a>
            </li>

            <li>
              <a className='menu-item' onClick={() => scrollToSection("experience")}>Education</a>
            </li>

            <li>
              <a className='menu-item' onClick={() => scrollToSection("projects")}>My Projects</a>
            </li>

            <button className='contact-btn' onClick={() => scrollToSection("contact")}>Reach Me</button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-icons"
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;