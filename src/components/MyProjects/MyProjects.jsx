import React, { useState, useEffect, useRef } from "react";
import "./MyProjects.css";
import ProjectCards from "./Project_Cards/Project_Cards";
import ProjectModal from "./ProjectModal/ProjectModal";
import { MY_PROJECTS } from "../../utils/data";
import { motion, useAnimation, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Framer Motion: animate section/heading on scroll in
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("show");
    else controls.start("hidden");
  }, [inView, controls]);

  // GSAP: stagger reveal of cards when the section is visible
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // batch all .project-card inside this section
      ScrollTrigger.batch(".project-card", {
        start: "top 85%",
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power2.out" }
          ),
        onEnterBack: (els) =>
          gsap.fromTo(
            els,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" }
          ),
        onLeave: (els) => gsap.to(els, { opacity: 0, duration: 0.2 }), // reset so it replays
        onLeaveBack: (els) => gsap.to(els, { opacity: 0, duration: 0.2 }),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // FM variants
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="MyProjects" ref={sectionRef}>
      <motion.div
        className="Projects-Container"
        variants={container}
        initial="hidden"
        animate={controls}
      >
        <h5 className="projects-title">My Projects</h5>
      </motion.div>

      <motion.div
        className="Projects"
        variants={container}
        initial="hidden"
        animate={controls}
        transition={{ delay: 0.1 }}
      >
        <div className="horizontal-scroll">
          {/* Ensure each card root has className="project-card" inside ProjectCards */}
          <ProjectCards
            projects={MY_PROJECTS}
            onCardClick={(project) => setSelectedProject(project)}
          />
        </div>
      </motion.div>

      <ProjectModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default MyProjects;
