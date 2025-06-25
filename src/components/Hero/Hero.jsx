import React from "react";
import './Hero.css';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BackgroundGradient } from "../ui/BackgroundGradient.jsx";

const Hero =() => {
    return <section className="hero-container">
        <div className="hero-content">
            <h2>
                Hi, I am 
            </h2>
            <h2>
                Mohamed Imran Ifadah
            </h2>
            <p>
                Graduated Software Engineer
            </p>

            <a
                href="/IFADHA_CV.pdf"
                download="Mohamed_Imran_Ifadha_CV.pdf"
                className="download-cv-btn">

                Download CV
            </a>
        </div>

        <div className="hero-img">
            {/* <div>
                <img src="./Meee.png" />
            </div> */}

            <div className="relative w-fit mx-auto">
                <BackgroundGradient containerClassName="w-[350px] h-[460px] rounded-[10rem] shadow-[0_0_80px_#7b61ff]" />

                <img
                    src="./Meee.png"
                    alt="profile"
                    className="rounded-3xl w-[350px] h-[460px] absolute top-0 left-0 z-10 object-cover"
                />
            </div>

            <div>
                <div  className="tech-icon">
                    <FaPython style={{color: '', fontSize: '30px'}}/>   
                </div>

                <div className="tech-icon">
                    <FaJava style={{color: '', fontSize: '30px'}}/> 
                </div>
                
                <div className="tech-icon">
                    <FaHtml5 style={{ color: '', fontSize: '30px' }} />
                </div>

                <div className="tech-icon">
                    <FaCss3Alt style={{color: '', fontSize: '30px'}} />
                </div>

                <div className="tech-icon">
                    <FaPhp style={{color: '', fontSize: '30px'}}/>
                </div>

                <div className="tech-icon">
                    <FaReact style={{color: '', fontSize: '30px'}}/>
                </div>

                <div className="tech-icon">
                    <IoLogoJavascript style={{color: '', fontSize: '30px'}}/>
                </div>
                
                <div className="tech-icon">
                    <SiMicrosoftsqlserver style={{color: '', fontSize: '30px'}}/>
                </div>
                
                <div className="tech-icon">
                    <SiMysql style={{color: '', fontSize: '30px'}}/>
                </div>
                
            </div>
        </div>
    </section>
};

export default Hero;