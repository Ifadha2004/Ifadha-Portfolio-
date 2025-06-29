import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";
import './ProjectModal.css';

const ProjectModal = ({ isOpen, onClose, project}) => {
    if (!isOpen || !project) return null;

    return(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                <button className="close-btn" onClick={onClose}>
                    Close
                </button>

                <h2>
                    {project.Pname}
                </h2>

                {/* <img src={project.image} alt={project.Pname} /> */}
                {project.images && project.images.length > 0 && (
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    className="project-carousel"
                >
                    {project.images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                        src={img}
                        alt={`${project.Pname} Screenshot ${index + 1}`}
                        className="carousel-image"
                        />
                    </SwiperSlide>
                    ))}
                </Swiper>
                )}

                <p>
                    {project.Pdescription}
                </p>
                {project.tech && project.tech.length > 0 &&(
                    <ul className="tech-list">
                        {project.tech.map ((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                )}

                {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="github-link">
                        View on GitHub 
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectModal;