import React from 'react';
import './Project_Cards.css';
import { HiBarsArrowUp } from "react-icons/hi2";

const Project_Cards = ({ projects, onCardClick }) => {
    return (
        <>
            {projects.map((details, index) => {
                // Show the first image from the array
                const previewImage = details.images[0];

                return (
                    <div key={index} className='project-card' onClick={() => onCardClick(details)}>
                        <div>
                            <img src={previewImage} alt={details.Pname} />
                        </div>
                        <div className="card-title-bar">
                            <h3>{details.Pname}</h3>
                            <button className='model-open'>
                                <HiBarsArrowUp />
                            </button>       
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Project_Cards;
