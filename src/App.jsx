import React, {useEffect, useState} from 'react';
import './App.css';
// Component Imports
import Loader from './components/ui/Loader';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperiance/WorkExperiance';
import MyProjects from './components/MyProjects/MyProjects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import { FloatingNavDemo } from './components/Header';

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  // Show loader only on the first visit in a session
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("seen-intro");
    if (hasSeenIntro) {
      setShowLoader(false);
    }
  }, []);

  const handleIntroDone = () => {
    sessionStorage.setItem("seen-intro", "1");
    setShowLoader(false);
  };

  return (
    <>
      {showLoader ? (
        <Loader onDone={handleIntroDone} />
      ) : (
        <>
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
      )}
    </>
  );
};

export default App;
