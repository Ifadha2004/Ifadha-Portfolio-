import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";

const INTRO_DURATION = 4400;

const Loader = ({ onDone }) => {
  // const [typedText, setTypedText] = useState("");
  const fullText = "<CraftingSolutions />";
  const [idx, setIdx] = useState(0);

  // useEffect(() => {
  //   let i = 0;
  //   setTypedText(fullText.charAt(0));
  //   i = 1;

  //   const typer = setInterval(() => {
  //     if (i < fullText.length) {
  //       setTypedText((prev) => prev + fullText.charAt(i));
  //       i++;
  //     } else {
  //       clearInterval(typer);
  //     }
  //   }, 100);

  //   const t = setTimeout(() => onDone?.(), INTRO_DURATION);
  //   return () => {
  //     clearInterval(typer);
  //     clearTimeout(t);
  //   };
  // }, [onDone]);

  useEffect(() => {
    let i = 0;
    const typer = setInterval(() => {
      i += 1;
      setIdx(i);
      if (i >= fullText.length) clearInterval(typer);
    }, 100);

    const t = setTimeout(() => onDone?.(), INTRO_DURATION);
    return () => {
      clearInterval(typer);
      clearTimeout(t);
    };
  }, [onDone, fullText]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0b0b14]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        aria-label="Intro animation"
      >
        {/* Beams behind everything */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <BackgroundBeamsWithCollision className="absolute inset-0 h-full w-full from-transparent to-transparent" />
        </div>

        {/* Your existing glow */}
        <motion.div
          className="absolute h-80 w-80 rounded-full blur-3xl bg-indigo-500/20"
          initial={{ scale: 0.6, opacity: 0.15 }}
          animate={{ scale: [0.6, 1.1, 1], opacity: [0.15, 0.35, 0.25] }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />

        {/* Typed tag */}
        <motion.h1
          className="relative z-10 text-3xl md:text-5xl font-mono text-indigo-400 tracking-tight"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {fullText.slice(0, idx)}
          <motion.span
            className="inline-block w-1 bg-indigo-300 ml-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="relative z-10 mt-6 text-lg md:text-xl font-medium text-white"
          style={{ textShadow: "0 0 18px rgba(167,139,250,0.5)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Ifadha Imran • Full-Stack Developer
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
