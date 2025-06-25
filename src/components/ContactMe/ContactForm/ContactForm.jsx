import React, { useRef } from "react";
import './ContactForm.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => 
{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_930vljm',
            'template_bsw2dyt',
            form.current,
            'iAFQ12-l5fVMPQ4Yk'
        ).then(
            (result) => {
                console.log(result.text);
                alert("Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                console.log(error.text);
                alert("Soomething went wrong. Please try again.");
            }
        );
    };

    return(
        <div className="contact-form-content">
            <form ref={form} onSubmit={sendEmail}>
                <div className="name-container">
                    <input type ="text" name="firstname" placeholder="First Name" />
                    <input type="text" name="lastname" placeholder="Last Name" />
                </div>

                <input type="text" name="email" placeholder="Email" />
                <textarea type="text" name="message" placeholder="Message" rows={3} />

                <button>SEND</button>

            </form>
        </div>
    );
};

export default ContactForm;