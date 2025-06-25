import React from "react";
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

                <img src={project.image} alt={project.Pname} />

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