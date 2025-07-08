"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "../../lib/utils";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className={cn(
          "flex max-w-fit fixed top-8 inset-x-0 mx-auto z-[5000] pr-3 pl-6 py-2 items-center justify-center space-x-4",
          "rounded-full border border-[#a993fe40] bg-[#0e0e1a]/70 backdrop-blur-md shadow-[0_0_20px_rgba(169,147,254,0.4)]",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center space-x-1 text-sm font-medium transition-all duration-300",
              "text-white hover:text-[#a993fe]"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block">{navItem.name}</span>
          </a>
        ))}

        <button
          onClick={() =>{
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth"});
            }
          }}
          className="relative text-sm font-medium px-4 py-2 rounded-full border border-[#a993fe80] text-white hover:text-[#a993fe] hover:border-[#a993fe] transition-all duration-300 shadow-md"
        >
          <span>Reach Me</span>
          <span
            className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#a993fe] to-transparent h-[1px]"
          />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};