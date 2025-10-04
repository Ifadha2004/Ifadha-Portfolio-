// import React, { useState } from 'react';
// import './Skills.css';
// import { SKILLS } from '../../utils/data';
// import SkillCard from './SkillCard/SkillCard';
// import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';
// import {motion, useAnimation, useInView} from 'framer-motion';

// const Skills = () => {
//     const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
//     const handleSelectedSkill = (data) => {
//         setSelectedSkill(data);
//     }
//     const containerRef = React.useRef(null);
//     const isInView = useInView(containerRef, { amount: 0.3, margin: "0px 0px -10% 0px" });
//     const mainControls = useAnimation();

//     return (
//         <section className='skills-container'>
//             <h5>Technical Proficiency</h5>
//             <div className='skills-content'>
//                 <div className='skills'>
//                     {SKILLS.map((item) => (
//                         <SkillCard
//                             key={item.title}
//                             icon={item.icon} // Pass the icon component
//                             title={item.title}
//                             isActive={selectedSkill.title === item.title}
//                             onClick={() => {
//                                 handleSelectedSkill(item);
//                             }}
//                         />
//                     ))}
//                 </div>
//                 <div className='skills-info'>
//                     <SkillsInfoCard 
//                         heading={selectedSkill.title}
//                         skills={selectedSkill.skills}
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Skills;


import React, { useState, useRef, useEffect } from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";
import { motion, useAnimation, useInView } from "framer-motion";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  // 🔥 Framer Motion scroll control
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { amount: 0.3, margin: "0px 0px -10% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("show");
    else controls.start("hidden"); // reset when out of view
  }, [inView, controls]);

  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  };

  // 🔹 variants
  const heading = {
    hidden: { opacity: 0, y: 20 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const infoCard = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } },
  };

  return (
    <section className="skills-container" ref={containerRef}>
      <motion.h5
        className="text-white"
        variants={heading}
        initial="hidden"
        animate={controls}
      >
        Technical Proficiency
      </motion.h5>

      <div className="skills-content">
        {/* Skill Cards Grid */}
        <motion.div
          className="skills"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {SKILLS.map((item) => (
            <motion.div key={item.title} variants={cardItem}>
              <SkillCard
                icon={item.icon}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={() => handleSelectedSkill(item)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Info Card */}
        <motion.div
          className="skills-info"
          variants={infoCard}
          initial="hidden"
          animate={controls}
        >
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;