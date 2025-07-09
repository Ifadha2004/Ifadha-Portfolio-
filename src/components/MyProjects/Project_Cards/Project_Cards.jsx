// import React from 'react';
// import './Project_Cards.css';
// import { HiBarsArrowUp } from "react-icons/hi2";
// import { ThreeDCardDemo } from "../../ui/3DCard";

// const Project_Cards = ({ projects, onCardClick }) => {
//     return (
//         <>
//             {projects.map((details, index) => {
//                 const previewImage = details.images[0];

//                 return (
                    
//                     <div key={index} className='project-card' onClick={() => onCardClick(details)}>
//                         <div>
//                             <img src={previewImage} alt={details.Pname} />
//                         </div>
//                         <div className="card-title-bar">
//                             <h3>{details.Pname}</h3>
//                             <button className='model-open'>
//                                 <HiBarsArrowUp />
//                             </button>       
//                         </div>
//                     </div>                    
//                 );
//             })}
//         </>
//     );
// };

// export default Project_Cards;

// ✅ Step 1: Import the 3D Card modules
import React from 'react';
import './Project_Cards.css';
import { CardContainer, CardBody, CardItem } from "../../ui/3d-card";
import { HiBarsArrowUp } from "react-icons/hi2";

const Project_Cards = ({ projects, onCardClick }) => {
  return (
    <div className="project-grid-wrapper">
      {projects.map((details, index) => {
        const previewImage = details.images[0];

        return (
          <CardContainer key={index} containerClassName="!py-6">
            <CardBody
              className="group/card w-[320px] sm:w-[350px] md:w-[380px] lg:w-[400px] h-auto p-5 border border-white/10 rounded-xl backdrop-blur-md bg-white/5 hover:shadow-[0_0_30px_rgba(169,147,254,0.4)] transition duration-300"
            >
              <CardItem
                translateZ="60"
                as="div"
                className="text-lg font-semibold text-white mb-4 flex items-center justify-between gap-3"
                >
                <h3 className="whitespace-nowrap">{details.Pname}</h3>
                <button
                    className="text-white/70 hover:text-[#a993fe] transition"
                    onClick={() => onCardClick(details)}
                >
                    <HiBarsArrowUp size={20} />
                </button>
              </CardItem>

              <CardItem translateZ="80">
                <img
                  src={previewImage}
                  alt={details.Pname}
                  className="w-full h-48 object-cover rounded-lg group-hover/card:shadow-xl"
                />
              </CardItem>

              <CardItem
                translateZ={20}
                as="p"
                className="text-sm text-zinc-300 mt-3 line-clamp-3"
              >
                {details.Pdescription}
              </CardItem>
            </CardBody>
          </CardContainer>
        );
      })}
    </div>
  );
};

export default Project_Cards;
