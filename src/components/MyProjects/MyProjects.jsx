import React, { useState } from 'react';
import './MyProjects.css';
import ProjectCards from './Project_Cards/Project_Cards';
import ProjectModal from './ProjectModal/ProjectModal';
import { MY_PROJECTS } from '../../utils/data';

const MyProjects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className='MyProjects'>
            <div className='Projects-Container'>
                <h5>My Projects</h5>
            </div>

            <div className='Projects'>
                {/* Passing the MY_PROJECTS array as a prop */}
                <div className='horizontal-scroll'>
                    <ProjectCards 
                        projects={MY_PROJECTS} 
                        onCardClick={(project) => setSelectedProject(project)}
                    />
                </div>
            </div>

            <ProjectModal
                isOpen={!!selectedProject}
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default MyProjects;
