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
        <Hero />
        <AboutMe />
        <Skills />
        <WorkExperiance />
        <MyProjects />
        <ContactMe />
      </div>        
      <Footer />
    </>
  );
};

export default App;