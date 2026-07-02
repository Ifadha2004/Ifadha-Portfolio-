// import React from "react";
// import { motion } from "framer-motion";
// import { BentoGrid } from "../ui/bento-grid"; 
// import { Code2, Database, Cpu, ShieldCheck } from "lucide-react";
// import "./Experience.css";

// const Experience = () => {
//   const experienceItems = [
//     {
//       title: "Full-Stack Developer",
//       meta: "VisualSoft (Pvt) Ltd • Oct 2023 – Dec 2025",

//       description:
//         "Designed, developed, and maintained enterprise ERP applications used across procurement, finance, inventory, and business operations. Collaborated with cross-functional teams to deliver scalable solutions while ensuring clean architecture, performance, and production stability.",

//       icon: <Code2 className="w-5 h-5 text-purple-500" />,

//       status: "2+ Years",

//       tags: [
//         "React",
//         "Node.js",
//         "Express",
//         "MySQL",
//         "REST APIs",
//         "Git",
//         "ERP"
//       ],

//       colSpan: 3,

//       hasPersistentHover: true,
//     },

//     {
//       title: "Backend Development",

//       meta: "Node.js • REST APIs",

//       description:
//         "Designed scalable backend services, implemented RESTful APIs, handled authentication, business logic, and secure communication between frontend and database layers.",

//       icon: <Cpu className="w-4 h-4 text-blue-500" />,

//       tags: [
//         "Node.js",
//         "Express",
//         "JWT"
//       ],

//       colSpan: 1,
//     },

//     {
//       title: "Database Engineering",

//       meta: "MySQL",

//       description:
//         "Optimized SQL queries, improved database performance, designed efficient schemas, and ensured reliable data integrity across enterprise ERP modules.",

//       icon: <Database className="w-4 h-4 text-emerald-500" />,

//       tags: [
//         "MySQL",
//         "SQL",
//         "Performance"
//       ],

//       colSpan: 1,
//     },

//     {
//       title: "Code Quality & Collaboration",

//       meta: "Production Ready",

//       description:
//         "Maintained clean, maintainable code through Git workflows, peer reviews, debugging, validation, and continuous improvements across production systems.",

//       icon: <ShieldCheck className="w-4 h-4 text-sky-500" />,

//       tags: [
//         "Git",
//         "Clean Code",
//         "Debugging"
//       ],

//       colSpan: 1,
//     },
//   ];

//   return (
//     <section id="experience" className="experience-section">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="section-title">
//             Professional <span className="name-gradient">Experience</span>
//           </h2>
//           <p className="max-w-2xl mx-auto text-gray-400 mt-4 text-lg">
//             Designing and building scalable, production-ready ERP solutions with a focus on efficiency and clean architecture.
//           </p>
//         </motion.div>
        
//         <BentoGrid items={experienceItems} />
//       </div>
//     </section>
//   );
// };

// export default Experience;


import React, { useState } from "react";
import { motion } from "framer-motion";
import { BentoGrid } from "../ui/bento-grid";
import { Code2, Database, Cpu, ShieldCheck } from "lucide-react";
import ExperienceModal from "./ExperienceModal";
import "./Experience.css";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (item) => {
    setSelectedExperience(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const experienceItems = [
    {
      title: "Full-Stack Developer",
      meta: "VisualSoft (Pvt) Ltd • Oct 2023 – Dec 2025",

      description:
        "Designed, developed, and maintained enterprise ERP applications used across procurement, finance, inventory, and business operations. Collaborated with cross-functional teams to deliver scalable solutions while ensuring clean architecture, performance, and production stability.",

      achievements: [
        "Contributed across both front-end and back-end layers of production-grade ERP systems, spanning procurement, finance, inventory, and core business operations.",
        "Worked cross-functionally with teams to translate business requirements into scalable, maintainable technical solutions.",
        "Applied a strong problem-solving mindset to resolve critical bugs and improve system reliability under production conditions.",
        "Consistently met project deadlines while balancing feature development with code quality and architectural consistency.",
      ],

      icon: <Code2 className="w-5 h-5 text-purple-500" />,
      status: "2+ Years",
      tags: ["React", "Node.js", "Express", "MySQL", "REST APIs", "Git", "ERP"],
      colSpan: 3,
      hasPersistentHover: true,
      verifiedBy: "VisualSoft (Pvt) Ltd",
    },

    {
      title: "Backend Development",
      meta: "Node.js • REST APIs",
      description:
        "Designed scalable backend services, implemented RESTful APIs, handled authentication, business logic, and secure communication between frontend and database layers.",
      icon: <Cpu className="w-4 h-4 text-blue-500" />,
      tags: ["Node.js", "Express", "JWT"],
      colSpan: 1,
    },

    {
      title: "Database Engineering",
      meta: "MySQL",
      description:
        "Optimized SQL queries, improved database performance, designed efficient schemas, and ensured reliable data integrity across enterprise ERP modules.",
      icon: <Database className="w-4 h-4 text-emerald-500" />,
      tags: ["MySQL", "SQL", "Performance"],
      colSpan: 1,
    },

    {
      title: "Code Quality & Collaboration",
      meta: "Production Ready",
      description:
        "Maintained clean, maintainable code through Git workflows, peer reviews, debugging, validation, and continuous improvements across production systems.",
      icon: <ShieldCheck className="w-4 h-4 text-sky-500" />,
      tags: ["Git", "Clean Code", "Debugging"],
      colSpan: 1,
    },
  ];

  // Only the main featured card gets a "View Details" click handler
  experienceItems[0].onViewDetails = () => handleViewDetails(experienceItems[0]);

  return (
    <section id="experience" className="experience-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Professional <span className="name-gradient">Experience</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 mt-4 text-lg">
            Designing and building scalable, production-ready ERP solutions with a focus on efficiency and clean architecture.
          </p>
        </motion.div>

        <BentoGrid items={experienceItems} />
      </div>

      <ExperienceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        experience={selectedExperience}
      />
    </section>
  );
};

export default Experience;