// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";

// const INTRO_DURATION = 4400;

// const Loader = ({ onDone }) => {
//   const fullText = "<CraftingSolutions />";
//   const [idx, setIdx] = useState(0);

//   useEffect(() => {
//     let i = 0;
//     const typer = setInterval(() => {
//       i += 1;
//       setIdx(i);
//       if (i >= fullText.length) clearInterval(typer);
//     }, 90);

//     const t = setTimeout(() => onDone?.(), INTRO_DURATION);
//     return () => {
//       clearInterval(typer);
//       clearTimeout(t);
//     };
//   }, [onDone]);

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a13] loader-vignette loader-noise"
//         initial={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.6 }}
//         aria-label="Intro animation"
//       >
//         {/* Beams */}
//         <div className="absolute inset-0 z-0 pointer-events-none">
//           <BackgroundBeamsWithCollision className="absolute inset-0 h-full w-full from-transparent to-transparent" />
//         </div>

//         {/* Soft backdrop glow */}
//         <motion.div
//           className="absolute h-[22rem] w-[22rem] rounded-full blur-3xl bg-indigo-500/25"
//           initial={{ scale: 0.6, opacity: 0.15 }}
//           animate={{ scale: [0.6, 1.08, 1], opacity: [0.15, 0.35, 0.25] }}
//           transition={{ duration: 2.2, ease: "easeInOut" }}
//         />

//         {/* Tag — premium gradient + mono font */}
//         <motion.h1
//           className="relative z-10 text-3xl md:text-6xl font-[700] tracking-tight
//                      [font-family:'JetBrains_Mono',monospace]
//                      bg-gradient-to-r from-[#b3a4ff] via-[#8f79ff] to-[#6c5ce7]
//                      bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(167,139,250,0.35)]"
//           initial={{ opacity: 0, y: 14 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           style={{ letterSpacing: "0.5px" }}
//         >
//           {fullText.slice(0, idx)}
//           <motion.span
//             className="inline-block w-[2px] md:w-[3px] h-[1.2em] align-[-0.25em] ml-1 bg-gradient-to-b from-[#C7B5FF] to-[#7B61FF] shadow-[0_0_14px_var(--glow)]"
//             animate={{ opacity: [0, 1, 0] }}
//             transition={{ duration: 0.8, repeat: Infinity }}
//           />
//         </motion.h1>

//         {/* Subtitle — cleaner typographic system */}
//         <motion.p
//           className="relative z-10 mt-6 text-[15px] md:text-lg text-[var(--ink)]
//                      [font-family:'Space_Grotesk',system-ui,sans-serif]"
//           style={{ textShadow: "0 0 16px var(--glow)" }}
//           initial={{ opacity: 0, y: 8 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.9, duration: 0.7 }}
//         >
//           Ifadha Imran • Full-Stack Developer
//         </motion.p>

//         {/* Skip button (UX nicety) */}
//         <motion.button
//           onClick={() => onDone?.()}
//           className="absolute bottom-6 right-6 text-xs md:text-sm rounded-full border border-white/15
//                      px-4 py-2 text-white/80 hover:text-white hover:border-white/30
//                      backdrop-blur-md bg-white/5 transition"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.85 }}
//           whileHover={{ scale: 1.03 }}
//         >
//           Skip intro
//         </motion.button>

//         {/* Reduced motion: keep content visible */}
//         <motion.div
//           className="sr-only"
//           aria-hidden="true"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         />
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default Loader;


import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";

const Loader = ({ onDone }) => {
  const sequences = useMemo(() => [
    "< Hello World />", 
    "Designing & Developing Experiences"
  ], []);

  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = sequences[currentWordIdx];
    
    // Dynamic Speed Logic
    let typingSpeed = 70; // Default for first word
    if (currentWordIdx === 1) typingSpeed = 35; // Fastened for second word
    if (isDeleting) typingSpeed = 20; // Very fast deletion

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.slice(0, displayText.length + 1));
        
        if (displayText === currentFullText) {
          if (currentWordIdx === sequences.length - 1) {
            setTimeout(() => onDone?.(), 1600);
            return;
          }
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(currentFullText.slice(0, displayText.length - 1));
        
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => prev + 1);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIdx, onDone, sequences]);

  const containerVariants = {
    exit: { 
      y: "-100%", 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050508] overflow-hidden"
        variants={containerVariants}
        initial={{ opacity: 1 }}
        exit="exit"
      >
        <div className="absolute inset-0 z-0">
          <BackgroundBeamsWithCollision className="opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050508]/80 to-[#050508]" />
        </div>

        <motion.div
          className="absolute h-[25rem] w-[25rem] rounded-full blur-[120px] bg-indigo-600/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        <div className="relative z-10 flex flex-col items-center px-4">
          <motion.h1
            key={currentWordIdx}
            className="text-2xl md:text-5xl tracking-tight text-white text-center min-h-[1.2em]"
            style={{ 
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500
            }}
          >
            {displayText}
            <motion.span
              className="inline-block w-[2px] md:w-[3px] h-[1.1em] ml-2 align-middle bg-indigo-500 shadow-[0_0_15px_#6366f1]"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </motion.h1>

          <motion.div 
            className="h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent mt-12"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "280px", opacity: 1 }}
            transition={{ delay: 0.2, duration: 3 }}
          />

          <motion.div
            className="mt-8 flex flex-col items-center space-y-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-indigo-300/60 font-medium text-center">
              Portfolio Experience
            </span>
            <h2 className="text-lg md:text-2xl font-medium tracking-tight text-white/90 text-center">
              Ifadha Imran <span className="text-white/20 font-light mx-2">|</span> Software Engineer
            </h2>
          </motion.div>
        </div>

        <motion.button
          onClick={() => onDone?.()}
          className="absolute bottom-10 px-6 py-2 rounded-full border border-white/10 text-white/40 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Skip intro
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;