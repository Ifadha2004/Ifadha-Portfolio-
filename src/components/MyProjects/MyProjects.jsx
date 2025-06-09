import React from 'react';
import './MyProjects.css';
import Project_Cards from './Project_Cards/Project_Cards';
import { MY_PROJECTS } from '../../utils/data';

const MyProjects = () => {
    return (
        <section>
            <div className='Projects-Container'>
                <h5>My Projects</h5>
            </div>

            <div className='Projects'>
                {/* Passing the MY_PROJECTS array as a prop */}
                <div className='horizontal-scroll'>
                    <Project_Cards projects={MY_PROJECTS} />
                </div>
            </div>
        </section>
    );
};

export default MyProjects;
