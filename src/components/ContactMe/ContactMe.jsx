import React from 'react';
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
    return (
        <section className='contact-container'>
            {/* <div className='Contact Heading'>
                <h5>Contact Me</h5>
            </div> */}

            <div className='contact-content'>
                <div className= 'cards'>  

                <ContactInfoCard 
                    icon={<MdEmail />}  // Pass the MdEmail icon
                    text="ifadhaimran04@gmail.com"
                />

                <ContactInfoCard 
                    icon={<FaGithubSquare />}  // Pass the FaGithubSquare icon
                    text="https://github.com/Ifadha2004"
                />

                <ContactInfoCard 
                    icon={<FaLinkedin />} //Pass the LinkedIn icon
                    text="https://www.linkedin.com/in/ifadha-imran-016291369/"
                />

                <ContactInfoCard 
                    icon={<FaWhatsappSquare />} //Pass the WhatsApp icon
                    text="+94 076 208 3634 / +971 56 482 3989"
                />
                </div>

                <div className='letsTalk' style={{flex:1}}>
                    <h5>Let's Talk</h5>

                    <p>
                        I am always eager to connect with fellow professionals, potential collaborators, or anyone interested in technology and innovation. Whether you have a project in mind, need advice on software development, or simply want to discuss the latest trends in the tech world, I would love to hear from you.
                        <br /><br />
                        Let's talk and create something extraordinary together!
                    </p>  

                    <ContactForm />
                    
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
