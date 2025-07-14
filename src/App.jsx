import React from 'react';
import './App.css';

// Component Imports
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperiance/WorkExperiance';
import MyProjects from './components/MyProjects/MyProjects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import { FloatingNavDemo } from './components/Header';

const App = () => {
  return (
    <>
      {/* Navigation Bar */}
      {/* <Navbar /> */}
      <FloatingNavDemo />

      {/* Main Content Sections */}
      <main className="container">
        <section id="hero"><Hero /></section>
        <section id="about"><AboutMe /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><WorkExperience /></section>
        <section id="projects"><MyProjects /></section>
        <section id="contact"><ContactMe /></section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
