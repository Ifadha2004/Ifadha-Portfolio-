import React from 'react';
import './Project_Cards.css';

const Project_Cards = ({ projects, onCardClick }) => {
    return (
        <>
            {projects.map((details, index) => (
                <div key={index} className='project-card' onClick={() => onCardClick(details)}>
                    <div>
                        <img src={details.image} alt={details.Pname} />
                    </div>
                    <h3>{details.Pname}</h3>
                </div>
            ))}
        </>
    );
};

export default Project_Cards;
