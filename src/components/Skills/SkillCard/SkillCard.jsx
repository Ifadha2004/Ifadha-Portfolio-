// import React from "react";
// import './SkillCard.css';
// import { BsCreditCard2FrontFill } from "react-icons/bs";
// import { BsDatabaseFillGear } from "react-icons/bs";
// import { FaTools } from "react-icons/fa";
// import { GiSkills } from "react-icons/gi";

// const SkillCard = ({title, iconUrl, isActive, onClick}) => {
//     console.log(icon);
//     return(
//         <div
//         className={`skills-card ${isActive ? "active" : ""}`}
//             onClick={() => onClick()}
//         >

//             <div className="skill-icon">
//                 <img src={iconUrl} alt={title} />
//             </div>

//             <span>
//                 {title}
//             </span>
//         </div>
//     );
// };

// export default SkillCard;




import React from "react";
import './SkillCard.css';

const SkillCard = ({ title, icon: Icon, isActive, onClick }) => {
    return (
        <div
            className={`skills-card ${isActive ? "active" : ""}`}
            onClick={() => onClick()}
        >
            <div className="skill-icon">
                <Icon size={50} color="#a993fe" />
            </div>
            <span>{title}</span>
        </div>
    );
};

export default SkillCard;
