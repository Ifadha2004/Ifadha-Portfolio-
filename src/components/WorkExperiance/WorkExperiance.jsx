import React, { useRef } from "react";
import Slider from "react-slick";
import "./WorkExperiance.css";
import WorkExperianceCard from "./WorkExperianceCard/WorkExperianceCard";
import { WORK_EXPERIENCE } from '../../utils/data';

const WorkExperiance = () => {

    const sliderRef = useRef();

    const settings = {
        dots: true,  // Enabled dots for better navigation
        infinite: true,  // Enable infinite scrolling
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,  // Disable default arrows, we are using custom arrows
        responsive: [
            {
                breakpoint: 769, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // const slideRight = () => {
    //     sliderRef.current.slickNext();
    // };

    // const slideLeft = () => {
    //     sliderRef.current.slickPrev();
    // };

    return (
        <section className="experiance-container">
            <h5>
                Education
            </h5>

            <div className="experiance-content">
                {/* <div className="arrow-left" onClick={slideLeft}>
                    <span className="material-symbols-outlined">chevron_left</span>
                </div>

                <div className="arrow-right" onClick={slideRight}>
                    <span className="material-symbols-outlined">chevron_right</span>
                </div> */}

                <Slider ref={sliderRef} {...settings}>
                    {WORK_EXPERIENCE.map((item) => (
                        <WorkExperianceCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default WorkExperiance;
