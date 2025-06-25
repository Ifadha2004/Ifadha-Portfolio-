import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import WorkExperiance from './components/WorkExperiance/WorkExperiance';
import MyProjects from './components/MyProjects/MyProjects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      
      <div className='container'>
        <section id="hero"><Hero /></section>
        <section id="about"><AboutMe /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><WorkExperiance /></section>
        <section id="projects"><MyProjects /></section>
        <section id="contact"><ContactMe /></section>
      </div>   

      <Footer />
    </>
  );
};

export default App;