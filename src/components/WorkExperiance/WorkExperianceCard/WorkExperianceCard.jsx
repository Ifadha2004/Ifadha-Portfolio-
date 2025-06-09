import React from 'react';
import './WorkExperianceCard.css';

const WorkExperianceCard = ({details}) => {
    return(
        <div className='work-experiance-card'>
            <h6>{details.title}</h6>

            <div className='University'>
                {details.university}
            </div>

            <div className='date'>
                {details.date}
            </div>

            {/* Replace the map function with a simple paragraph display */}
            <p>
                {details.description}
            </p>
        </div>
    );
};

export default WorkExperianceCard;
