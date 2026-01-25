// import React from 'react';
// import './WorkExperianceCard.css';
// import { motion } from "framer-motion";

// const WorkExperianceCard = ({details}) => {
//     return(
//         <motion.div 
//             className='work-experiance-card'
//             whileHover={{ y: -10 }}
//             transition={{ type: "spring", stiffness: 300 }}
//         >
//             {/* Decorative background glow */}
//             <div className="card-glow"></div>
            
//             <div className="card-content">
//                 <h6>{details.title}</h6>

//                 <div className='university-container'>
//                     <span className="uni-icon">🎓</span>
//                     <div className='University'>{details.university}</div>
//                 </div>

//                 <div className='date-badge'>
//                     {details.date}
//                 </div>

//                 <p className='description'>
//                     {details.description}
//                 </p>
//             </div>
//         </motion.div>
//     );
// };

// export default WorkExperianceCard;

import React from 'react';
import './WorkExperianceCard.css';
import { motion } from "framer-motion";

const WorkExperianceCard = ({details}) => {
    return(
        <motion.div 
            className='work-experiance-card'
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="card-glow"></div>
            
            <div className="card-content">
                {/* Header section for title and date */}
                <div className="card-header">
                    <h6>{details.title}</h6>
                    <div className='date-badge'>
                        {details.date}
                    </div>
                </div>

                <div className='university-container'>
                    <span className="uni-icon">🎓</span>
                    <div className='University'>{details.university}</div>
                </div>

                <p className='description'>
                    {details.description}
                </p>
            </div>
        </motion.div>
    );
};

export default WorkExperianceCard;