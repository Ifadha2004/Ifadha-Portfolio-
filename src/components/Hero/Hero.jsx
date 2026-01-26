// import React, { useEffect, useRef } from "react";
// import "./Hero.css";
// import { Spotlight } from "../ui/spotlight-new";
// import { TypewriterEffect } from "../ui/typewriter-effect";
// import { motion, useAnimation, useInView } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const words = [
//   { text: "Full-Stack" },
//   { text: "\u00A0" },
//   { text: "Developer", className: "text-gray-100 glow-dev" },
// ];

// const Hero = () => {
//   const sectionRef = useRef(null);
//   const blobRefs = useRef([]);
//   const addBlobRef = (el) => el && !blobRefs.current.includes(el) && blobRefs.current.push(el);

//   // 🔥 Framer Motion scroll controls
//   const containerRef = useRef(null);
//   const inView = useInView(containerRef, { amount: 0.4, margin: "0px 0px -10% 0px" });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (!sectionRef.current) return;

//     // GSAP context keeps things tidy
//     const ctx = gsap.context(() => {
//       // Scroll-based parallax for blobs
//       gsap.to(".shape-blob", {
//         y: (i) => (i % 2 === 0 ? -80 : -40),
//         opacity: 0.3,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//         },
//       });

//       // Mouse-based parallax
//       const onMove = (e) => {
//         const rect = sectionRef.current.getBoundingClientRect();
//         const mx = e.clientX - rect.left - rect.width / 2;
//         const my = e.clientY - rect.top - rect.height / 2;
//         blobRefs.current.forEach((b, i) => {
//           gsap.to(b, {
//             x: mx / (30 + i * 10),
//             y: my / (40 + i * 10),
//             duration: 0.6,
//             ease: "power2.out",
//           });
//         });
//       };
//       sectionRef.current.addEventListener("mousemove", onMove);

//       return () => {
//         sectionRef.current?.removeEventListener("mousemove", onMove);
//       };
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   // Toggle animation on scroll in/out
//   useEffect(() => {
//     if (inView) controls.start("show");
//     else controls.start("hidden");
//   }, [inView, controls]);

//   // Variants
//   const container = {
//     hidden: { opacity: 0, y: 20 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { staggerChildren: 0.12, duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 24 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   return (
//     <section ref={sectionRef} className="relative overflow-hidden">
//       <div className="hero-gradient w-full h-screen flex items-center justify-center px-0 relative overflow-hidden">
//         <Spotlight />

//         {/* Blobs */}
//         <div className="absolute inset-0 opacity-20 pointer-events-none">
//           <div
//             ref={addBlobRef}
//             className="shape-blob absolute top-40 left-1/4 w-64 h-64 bg-gray-800 rounded-full mix-blend-overlay will-change-transform"
//           ></div>
//           <div
//             ref={addBlobRef}
//             className="shape-blob absolute bottom-32 right-1/4 w-80 h-80 bg-gray-800 rounded-full mix-blend-overlay will-change-transform"
//           ></div>
//           <div
//             ref={addBlobRef}
//             className="shape-blob absolute top-1/2 right-1/3 w-96 h-96 bg-gray-700 rounded-full mix-blend-overlay opacity-50 will-change-transform"
//           ></div>
//         </div>

//         {/* Content (scroll-driven) */}
//         <motion.div
//           ref={containerRef}
//           variants={container}
//           initial="hidden"
//           animate={controls}
//           className="max-w-7xl mx-auto relative z-10 text-center"
//         >
//           <motion.div
//             variants={item}
//             className="mx-auto h-40 w-40 rounded-full overflow-hidden border-4 border-white/10 shadow-xl mb-8 glow-ring"
//           >
//             <img
//               src="./4Z7A9620.jpg"
//               alt="Ifadha Imran"
//               className="h-full w-full object-cover"
//               loading="eager"
//               decoding="async"
//             />
//           </motion.div>

//           <motion.h1
//             variants={item}
//             className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
//           >
//             <span className="glow-hi">Hi</span>, I'm{" "}
//             <span className="text-gray-300">Ifadha Imran</span>
//           </motion.h1>

//           <motion.div variants={item} className="flex items-center justify-center mb-8">
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white/90 mr-2">
//               <TypewriterEffect words={words} />
//             </h2>
//           </motion.div>

//           <motion.p
//             variants={item}
//             className="max-w-3xl mx-auto text-lg md:text-lg text-white/70 mb-10 leading-relaxed"
//           >
//             As a dedicated full-stack developer, I craft end-to-end digital solutions with a strong focus on
//             clean, maintainable code and user-centric design—delivering experiences that are both visually
//             compelling and technically robust.
//           </motion.p>

//           <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
//             <motion.a
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.98 }}
//               href="/MY_Resume.pdf"
//               download="Mohamed_Imran_Ifadha_CV.pdf"
//               className="download-cv-btn glow-btn px-8 py-3 bg-gray-800 text-gray-100 font-medium rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
//             >
//               Download CV
//             </motion.a>

//             <motion.button
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.98 }}
//               className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
//               onClick={() => {
//                 const contactSection = document.getElementById("contact");
//                 if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
//               }}
//             >
//               Contact Me
//             </motion.button>
//           </motion.div>
//         </motion.div>

        // {/* Scroll cue */}
        // <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        //   <button
        //     aria-label="Scroll to About section"
        //     onClick={() => {
        //       const nextSection = document.getElementById("about");
        //       if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
        //     }}
        //   >
        //     <div className="animate-bounce">
        //       <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        //       </svg>
        //     </div>
        //   </button>
        // </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useEffect, useRef } from "react";
import "./Hero.css";
import { Spotlight } from "../ui/spotlight-new";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { motion, useAnimation, useInView } from "framer-motion";
import { HiOutlineLocationMarker } from "react-icons/hi"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = [
  { text: "Full-Stack" },
  { text: "\u00A0" },
  { text: "Developer", className: "text-gray-100 glow-dev" },
];

const Hero = () => {
  const sectionRef = useRef(null);
  const blobRefs = useRef([]);
  const addBlobRef = (el) => el && !blobRefs.current.includes(el) && blobRefs.current.push(el);

  const containerRef = useRef(null);
  const inView = useInView(containerRef, { amount: 0.4, margin: "0px 0px -10% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Original GSAP Parallax Logic
      gsap.to(".shape-blob", {
        y: (i) => (i % 2 === 0 ? -80 : -40),
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const onMove = (e) => {
        const rect = sectionRef.current.getBoundingClientRect();
        const mx = e.clientX - rect.left - rect.width / 2;
        const my = e.clientY - rect.top - rect.height / 2;
        blobRefs.current.forEach((b, i) => {
          gsap.to(b, {
            x: mx / (30 + i * 10),
            y: my / (40 + i * 10),
            duration: 0.6,
            ease: "power2.out",
          });
        });
      };
      sectionRef.current.addEventListener("mousemove", onMove);
      return () => sectionRef.current?.removeEventListener("mousemove", onMove);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (inView) controls.start("show");
    else controls.start("hidden");
  }, [inView, controls]);

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, duration: 0.6, ease: "easeOut" },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="hero-gradient w-full h-screen flex items-center justify-center px-0 relative overflow-hidden">
        <Spotlight />

        {/* Blobs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div
            ref={addBlobRef}
            className="shape-blob absolute top-40 left-1/4 w-64 h-64 bg-gray-800 rounded-full mix-blend-overlay will-change-transform"
          ></div>
          <div
            ref={addBlobRef}
            className="shape-blob absolute bottom-32 right-1/4 w-80 h-80 bg-gray-800 rounded-full mix-blend-overlay will-change-transform"
          ></div>
          <div
            ref={addBlobRef}
            className="shape-blob absolute top-1/2 right-1/3 w-96 h-96 bg-gray-700 rounded-full mix-blend-overlay opacity-50 will-change-transform"
          ></div>
        </div>

        <motion.div
          ref={containerRef}
          variants={container}
          initial="hidden"
          animate={controls}
          className="max-w-7xl mx-auto relative z-10 text-center"
        >
          {/* Profile Image with Glow */}
          <motion.div variants={item} className="profile-img-wrapper">
            <div className="glow-background"></div>
            <img
              src="./4Z7A9620.jpg"
              alt="Ifadha Imran"
              className="profile-img"
            />
          </motion.div>

          <motion.h1 variants={item} className="hero-name">
            <span className="glow-hi">Hi</span>, I'm{" "}
            <span className="name-gradient">Ifadha Imran</span>
          </motion.h1>

          <motion.div variants={item} className="typewriter-container flex justify-center mb-8">
            <h2 className="hero-subtitle mr-2">
              <TypewriterEffect words={words} />
            </h2>
          </motion.div>

          <motion.p variants={item} className="hero-description mx-auto mb-10">
            A passionate Full-Stack Developer specializing in Data Science & AI. 
            I build intelligent, high-performance digital solutions that bridge 
            the gap between complex data and elegant user experiences.
          </motion.p>

          {/* Status Badges */}
          <motion.div variants={item} className="status-container">
             <div className="glass-badge location">
                <HiOutlineLocationMarker className="icon" />
                <span>Based in Dubai, UAE</span>
             </div>
             <div className="glass-badge availability">
                <span className="pulse-dot"></span>
                <span>Available for work</span>
             </div>
          </motion.div>

          <motion.div variants={item} className="hero-actions flex flex-wrap items-center justify-center gap-4 mt-8">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              href="/MY_Resume.pdf"
              className="primary-action-btn"
            >
              Download CV
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="secondary-action-btn px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RESTORED: Original Scroll Cue */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <button
            aria-label="Scroll to About section"
            onClick={() => {
              const nextSection = document.getElementById("about");
              if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
            }}
          >
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