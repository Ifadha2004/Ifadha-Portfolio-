// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination } from "swiper/modules";
// import './ProjectModal.css';

// const ProjectModal = ({ isOpen, onClose, project}) => {
//     if (!isOpen || !project) return null;

//     return(
//         <div className="modal-overlay" onClick={onClose}>
//             <div className="modal-content" onClick={(e) => e.stopPropagation()}>

//                 <button className="close-btn" onClick={onClose}>
//                     Close
//                 </button>

//                 <h2>
//                     {project.Pname}
//                 </h2>

//                 {/* <img src={project.image} alt={project.Pname} /> */}
//                 {project.images && project.images.length > 0 && (
//                 <Swiper
//                     modules={[Navigation, Pagination]}
//                     spaceBetween={20}
//                     slidesPerView={1}
//                     navigation
//                     pagination={{ clickable: true }}
//                     className="project-carousel"
//                 >
//                     {project.images.map((img, index) => (
//                     <SwiperSlide key={index}>
//                         <img
//                         src={img}
//                         alt={`${project.Pname} Screenshot ${index + 1}`}
//                         className="carousel-image"
//                         />
//                     </SwiperSlide>
//                     ))}
//                 </Swiper>
//                 )}

//                 <p>
//                     {project.Pdescription}
//                 </p>
//                 {project.tech && project.tech.length > 0 &&(
//                     <ul className="tech-list">
//                         {project.tech.map ((item, index) => (
//                             <li key={index}>
//                                 {item}
//                             </li>
//                         ))}
//                     </ul>
//                 )}

//                 {project.link && (
//                     <a href={project.link} target="_blank" rel="noreferrer" className="github-link">
//                         View on GitHub 
//                     </a>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ProjectModal;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiOutlineCode } from "react-icons/hi";
import './ProjectModal.css';

const ProjectModal = ({ isOpen, onClose, project }) => {
    return (
        <AnimatePresence>
            {isOpen && project && (
                <div className="modal-overlay">
                    {/* Background Blur Backdrop */}
                    <motion.div 
                        className="backdrop-blur"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div 
                        className="modal-container"
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <button className="close-icon-btn" onClick={onClose}>
                            <HiX />
                        </button>

                        <div className="modal-inner-scroll">
                            {/* Header Section */}
                            <div className="modal-header">
                                <span className="project-category">Project Showcase</span>
                                <h2>{project.Pname}</h2>
                                <div className="header-underline"></div>
                            </div>

                            {/* Image Carousel Section */}
                            {project.images && (
                                <div className="carousel-wrapper">
                                    <Swiper
                                        modules={[Navigation, Pagination, Autoplay, EffectFade]}
                                        effect="fade"
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        navigation
                                        autoplay={{ delay: 3500 }}
                                        pagination={{ clickable: true }}
                                        className="project-carousel-main"
                                    >
                                        {project.images.map((img, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="image-aspect-ratio">
                                                    <img src={img} alt="Screenshot" />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            )}

                            {/* Content Grid */}
                            <div className="modal-details-grid">
                                <div className="details-left">
                                    <h3>Overview</h3>
                                    <p className="project-desc">{project.Pdescription}</p>
                                </div>

                                <div className="details-right">
                                    <h3>Tech Stack</h3>
                                    <div className="tech-badge-container">
                                        {project.tech?.map((item, index) => (
                                            <span key={index} className="tech-pill">
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    {project.link && (
                                        <div className="action-area">
                                            <a href={project.link} target="_blank" rel="noreferrer" className="primary-btn">
                                                <HiOutlineCode className="btn-icon" />
                                                Source Code
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;