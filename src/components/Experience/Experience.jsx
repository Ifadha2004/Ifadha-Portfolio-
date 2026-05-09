// import React from "react";
// import { motion } from "framer-motion";
// import "./Experience.css";

// const Experience = () => {
//   const experiences = [
//     {
//       role: "Full-Stack Developer",
//       company: "VisualSoft (Pvt) Ltd",
//       period: "2+ Years of Experience", // Adjusted based on summary
//       points: [
//         "Designed, developed, and maintained ERP-based web applications using modern full-stack technologies.",
//         "Worked across both front-end and back-end layers, contributing to system architecture, feature development, and bug fixes.",
//         "Optimized SQL queries and database schemas to improve system performance and reliability.",
//         "Built RESTful APIs and integrated them with frontend systems to support secure data exchange.",
//         "Implemented structured validation and business rule automation to enhance operational efficiency.",
//         "Followed clean code principles, version control best practices, and participated in peer code reviews."
//       ],
//     },
//   ];

//   return (
//     <section id="experience" className="experience-section">
//       <div className="container mx-auto px-4">
//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="section-title text-center mb-16"
//         >
//           Professional <span className="name-gradient">Experience</span>
//         </motion.h2>

//         <div className="experience-grid">
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="experience-card glass-card"
//             >
//               <div className="card-glow"></div>
//               <div className="card-content">
//                 <div className="card-header">
//                   <div>
//                     <h3 className="role-title">{exp.role}</h3>
//                     <p className="company-name">{exp.company}</p>
//                   </div>
//                   <span className="experience-period glass-badge">{exp.period}</span>
//                 </div>
                
//                 <ul className="experience-list">
//                   {exp.points.map((point, i) => (
//                     <li key={i} className="experience-item">
//                       <span className="bullet-point"></span>
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
import React from "react";
import { motion } from "framer-motion";
import { BentoGrid } from "../ui/bento-grid"; 
import { Code2, Database, Cpu, ShieldCheck } from "lucide-react";
import "./Experience.css";

const Experience = () => {
  const experienceItems = [
    {
      title: "Full-Stack Developer @ VisualSoft (Pvt) Ltd",
      meta: "Oct 2023 – Dec 2025",
      description: "Designed, developed, and maintained production-grade ERP-based web applications using modern full-stack technologies. Contributed to core system architecture across both front-end and back-end layers while ensuring robust feature development and critical bug fixes.",
      icon: <Code2 className="w-5 h-5 text-purple-500" />,
      status: "Experience",
      tags: ["ERP Systems", "React", "Node.js", "Full-Stack"],
      colSpan: 3, 
      hasPersistentHover: true,
    },
    {
      title: "Database Optimization",
      meta: "Performance",
      description: "Optimized complex SQL queries and database schemas to significantly improve overall system performance and data reliability.",
      icon: <Database className="w-4 h-4 text-emerald-500" />,
      tags: ["SQL", "MySQL", "Optimization"],
      colSpan: 1,
    },
    {
      title: "API & System Integration",
      meta: "RESTful Architecture",
      description: "Built robust RESTful APIs and integrated them with frontend systems to support secure, high-speed data exchange.",
      icon: <Cpu className="w-4 h-4 text-blue-500" />,
      tags: ["REST APIs", "Integration", "Security"],
      colSpan: 1,
    },
    {
      title: "Quality & Automation",
      meta: "Standards",
      description: "Implemented structured validation and business rule automation while maintaining clean code through peer reviews and version control best practices.",
      icon: <ShieldCheck className="w-4 h-4 text-sky-500" />,
      tags: ["Clean Code", "Automation", "Git"],
      colSpan: 1,
    },
  ];

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
    </section>
  );
};

export default Experience;