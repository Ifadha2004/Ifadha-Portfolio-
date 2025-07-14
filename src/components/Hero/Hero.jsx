import React from 'react';
import './Hero.css';
import { Spotlight } from '../ui/spotlight-new';
import { TypewriterEffect } from '../ui/typewriter-effect';

const words = [
  {
    text: "Full-Stack",
  },
  {
    text: "\u00A0",
  },
  {
    text: "Developer",
    className: "text-gray-100 glow-dev",
  },
];

const Hero = () => {

  return (
    <section className="relative overflow-hidden">
      <div className="hero-gradient w-full h-screen flex items-center justify-center px-0 relative overflow-hidden">
        <Spotlight />
        {/* Blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="shape-blob absolute top-40 left-1/4 w-64 h-64 bg-gray-800 rounded-full mix-blend-overlay"></div>
          <div className="shape-blob absolute bottom-32 right-1/4 w-80 h-80 bg-gray-800 rounded-full mix-blend-overlay"></div>
          <div className="shape-blob absolute top-1/2 right-1/3 w-96 h-96 bg-gray-700 rounded-full mix-blend-overlay opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="mx-auto h-40 w-40 rounded-full overflow-hidden border-4 border-white/10 shadow-xl mb-8 glow-ring">
            <img
              src="./Meee.png"
              alt="Ifadha Imran"
              className="h-full w-full object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            <span className="glow-hi">Hi</span>, I'm <span className="text-gray-300">Ifadha Imran</span>
          </h1>

          <div className="flex items-center justify-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white/90 mr-2">
              {/* {roles[currentRoleIndex]} */}
              <TypewriterEffect words={words} />
            </h2>
            {/* <span className="typing-cursor text-white text-3xl">|</span> */}
          </div>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            I create beautiful, performant digital experiences focusing on user-centered design and clean code. Currently specializing in React ecosystems and design systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/My_CV.pdf"
              download="Mohamed_Imran_Ifadha_CV.pdf"
              className="download-cv-btn glow-btn px-8 py-3 bg-gray-800 text-gray-100 font-medium rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Download CV
            </a>
            <button
              className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
              onClick={() =>{
                const contactSection = document.getElementById('contact');
                if (contactSection)
                {
                  contactSection.scrollIntoView({behavior : "smooth"});
                }
              }}
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <button onClick={() =>{
            const nextSection = document.getElementById('about');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: "smooth"})
            }
          }}>
            <div className="animate-bounce">
              <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;