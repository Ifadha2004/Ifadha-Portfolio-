import React from 'react';
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"; // Cleaned up icons
import ContactForm from './ContactForm/ContactForm';
import { motion } from "framer-motion";

const ContactMe = () => {
    return (
        <section id="contact" className='contact-container'>
            <div className='contact-content'>
                
                {/* Left Side: Professional Outreach */}
                <div className='contact-info-section'>
                    <motion.h5 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Connect & <span className="name-gradient">Collaborate</span>
                    </motion.h5>

                    <p className='contact-intro'>
                        I am always eager to connect with fellow professionals, potential collaborators, or anyone interested in technology and innovation. 
                        Whether you're looking to discuss a project, need a technical consultation, or simply want to explore the latest trends in Data Science and AI, let's create something extraordinary together.
                    </p>  

                    <div className='cards-grid'>  
                        <ContactInfoCard 
                            icon={<MdEmail className="contact-icon email" />} 
                            text="ifadhaimran04@gmail.com"
                            label="Email Me"
                        />
                        <ContactInfoCard 
                            icon={<FaLinkedin className="contact-icon linkedin" />} 
                            text="linkedin.com/in/ifadha-imran"
                            label="Professional Profile"
                        />
                        <ContactInfoCard 
                            icon={<FaGithub className="contact-icon github" />} 
                            text="github.com/Ifadha2004"
                            label="Source Code"
                        />
                        <ContactInfoCard 
                            icon={<FaWhatsapp className="contact-icon whatsapp" />} 
                            text="+971 56 482 3989"
                            label="Direct Message"
                        />
                    </div>
                </div>

                {/* Right Side: Communication Gateway */}
                <div className='form-section'>
                    <div className="form-glass-container">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;