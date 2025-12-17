// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "./WorkExperiance.css";
// import WorkExperianceCard from "./WorkExperianceCard/WorkExperianceCard";
// import { WORK_EXPERIENCE } from '../../utils/data';

// const WorkExperiance = () => {

//     const sliderRef = useRef();

//     const settings = {
//         dots: true,  // Enabled dots for better navigation
//         infinite: true,  // Enable infinite scrolling
//         speed: 500,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         arrows: true,  // Disable default arrows, we are using custom arrows
//         responsive: [
//             {
//                 breakpoint: 769, 
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };

//     // const slideRight = () => {
//     //     sliderRef.current.slickNext();
//     // };

//     // const slideLeft = () => {
//     //     sliderRef.current.slickPrev();
//     // };

//     return (
//         <section className="experiance-container">
//             <h5>
//                 Education
//             </h5>

//             <div className="experiance-content">
//                 {/* <div className="arrow-left" onClick={slideLeft}>
//                     <span className="material-symbols-outlined">chevron_left</span>
//                 </div>

//                 <div className="arrow-right" onClick={slideRight}>
//                     <span className="material-symbols-outlined">chevron_right</span>
//                 </div> */}

//                 <Slider ref={sliderRef} {...settings}>
//                     {WORK_EXPERIENCE.map((item) => (
//                         <WorkExperianceCard key={item.title} details={item} />
//                     ))}
//                 </Slider>
//             </div>
//         </section>
//     );
// };

// export default WorkExperiance;


import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "./WorkExperiance.css";
import WorkExperianceCard from "./WorkExperianceCard/WorkExperianceCard";
import { WORK_EXPERIENCE } from "../../utils/data";
import { motion, useAnimation, useInView } from "framer-motion";

const WorkExperiance = () => {
  const sliderRef = useRef();
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("show");
    else controls.start("hidden");
  }, [inView, controls]);

  const settings = {
    dots: true,
    // dotsClass: "slick-dots custom-progress-bar",
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Variants
  const heading = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const sliderBox = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section className="experiance-container" ref={containerRef}>
      <motion.h5
        className="text-white"
        variants={heading}
        initial="hidden"
        animate={controls}
      >
        Education
      </motion.h5>

      <motion.div
        className="experiance-content"
        variants={sliderBox}
        initial="hidden"
        animate={controls}
      >
        <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <WorkExperianceCard key={item.title} details={item} />
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default WorkExperiance;
