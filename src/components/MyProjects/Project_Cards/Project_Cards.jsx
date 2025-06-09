import React from 'react';
import './Project_Cards.css';

const Project_Cards = ({ projects }) => {
    return (
        <>
            {projects.map((details, index) => (
                <div key={index} className='project-card'>
                    <div>
                        <img src={details.image} alt={details.Pname} />
                    </div>
                    <h3>{details.Pname}</h3>
                    <p>{details.Pdescription}</p>
                    <br />
                    <p>{details.link}</p>
                </div>
            ))}
        </>
    );
};

export default Project_Cards;
