import React from "react";
import './Hero.css';
import { FaHtml5, FaCss3Alt, FaPython, FaJava, FaPhp, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMicrosoftsqlserver, SiMysql } from "react-icons/si";
import { BackgroundGradient } from "../ui/BackgroundGradient.jsx";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

const Hero = () => {
    return (
            <section className="hero-container relative z-10 h-[100vh] overflow-visible flex items-center justify-center">
                {/* CONTENT */}
                <div className="hero-content relative z-10 text-center text-white">
                    <h2>Hi, I am</h2>
                    <h2>Mohamed Imran Ifadah</h2>
                    <p>Graduated Software Engineer</p>
                    <a
                        href="/IFADHA_CV.pdf"
                        download="Mohamed_Imran_Ifadha_CV.pdf"
                        className="download-cv-btn"
                    >
                        Download CV
                    </a>
                </div>

                <div className="hero-img relative z-10">
                    <div className="relative w-fit mx-auto">
                        <BackgroundGradient containerClassName="w-[350px] h-[460px] rounded-[10rem] shadow-[0_0_80px_#7b61ff]" />
                        <img
                        src="./Meee.png"
                        alt="profile"
                        className="rounded-3xl w-[350px] h-[460px] absolute top-0 left-0 z-10 object-cover"
                        />
                    </div>

                    <div className="tech-stack mt-4 flex flex-wrap justify-center gap-3">
                        <div className="tech-icon"><FaPython style={{ fontSize: '30px' }} /></div>
                        <div className="tech-icon"><FaJava style={{ fontSize: '30px' }} /></div>
                        <div className="tech-icon"><FaHtml5 style={{ fontSize: '30px' }} /></div>
                        <div className="tech-icon"><FaCss3Alt style={{ fontSize: '30px' }} /></div>
                        <div className="tech-icon"><FaPhp style={{ fontSize: '30px' }} /></div>
                        <div className="tech-icon"><FaReact style={{ fontSize: '30px' }} /></div>
                        <div className="tech-icon"><IoLogoJavascript style={{ fontSize: '30px' }} /></div>
                        <div className="tech-icon"><SiMicrosoftsqlserver style={{ fontSize: '30px' }} /></div>
                        <div className="tech-icon"><SiMysql style={{ fontSize: '30px' }} /></div>
                    </div>
                </div>
            </section>
    );
};

export default Hero;