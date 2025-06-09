import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} /> {/* Corrected toggleMenu prop */}

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./Logo.png" alt="Logo" />

          <ul>
            {/* <li>
              <a className='menu-item'>Home</a>
            </li> */}

            <li>
              <a className='menu-item'>About Me</a>
            </li>

            <li>
              <a className='menu-item'>Skills</a>
            </li>

            <li>
              <a className='menu-item'>Education</a>
            </li>

            <li>
              <a className='menu-item'>My Projects</a>
            </li>

            <li>
              <a className='menu-item'>Contact Me</a>
            </li>

            <button className='contact-btn' onClick={() => {}}>Reach Me</button>
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