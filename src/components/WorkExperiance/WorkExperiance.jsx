// import React, { useRef, useEffect } from "react";
// import Slider from "react-slick";
// import "./WorkExperiance.css";
// import WorkExperianceCard from "./WorkExperianceCard/WorkExperianceCard";
// import { WORK_EXPERIENCE } from "../../utils/data";
// import { motion, useAnimation, useInView } from "framer-motion";

// const WorkExperiance = () => {
//   const sliderRef = useRef();
//   const containerRef = useRef(null);
//   const inView = useInView(containerRef, { amount: 0.3 });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (inView) controls.start("show");
//     else controls.start("hidden");
//   }, [inView, controls]);

//   const settings = {
//     dots: true,
//     // dotsClass: "slick-dots custom-progress-bar",
//     infinite: true,
//     speed: 800,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 769,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   // Variants
//   const heading = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const sliderBox = {
//     hidden: { opacity: 0, y: 40 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
//     },
//   };

//   return (
//     <section className="experiance-container" ref={containerRef}>
//       <motion.h5
//         className="text-white"
//         variants={heading}
//         initial="hidden"
//         animate={controls}
//       >
//         Education
//       </motion.h5>

//       <motion.div
//         className="experiance-content"
//         variants={sliderBox}
//         initial="hidden"
//         animate={controls}
//       >
//         <Slider ref={sliderRef} {...settings}>
//           {WORK_EXPERIENCE.map((item) => (
//             <WorkExperianceCard key={item.title} details={item} />
//           ))}
//         </Slider>
//       </motion.div>
//     </section>
//   );
// };

// export default WorkExperiance;


import React, { useRef } from "react";
import "./WorkExperiance.css";
import WorkExperianceCard from "./WorkExperianceCard/WorkExperianceCard";
import { WORK_EXPERIENCE } from "../../utils/data";
import { motion, useScroll, useSpring } from "framer-motion";

const WorkExperiance = () => {
  const containerRef = useRef(null);

  // Scroll progress for the timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 90%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="experiance-container" ref={containerRef}>
      <motion.h5
        className="text-white"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Education
      </motion.h5>

      <div className="timeline-content">
        {/* The Vertical Line */}
        <motion.div 
          className="timeline-line"
          style={{ scaleY }}
        />

        <div className="timeline-items">
          {WORK_EXPERIENCE.map((item, index) => (
            <div className="timeline-item-wrapper" key={item.title}>
              {/* Animated Dot on the timeline */}
              <motion.div 
                className="timeline-dot"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="card-wrapper"
              >
                <WorkExperianceCard details={item} />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperiance;