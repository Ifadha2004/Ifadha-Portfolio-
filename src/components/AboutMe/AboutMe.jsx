import React from 'react';
import './AboutMe.css';

const AboutMe =() => {
    return(
        <section className='AboutMe-Container'>
            <div className='AboutMe-img'>
                <div>
                    <img src='AboutMe2.png' alt='About Me'/>
                </div>
            </div>

            <div className='AboutMe-Content'>
                <h5>About Me</h5>

                <p>
                Welcome to my portfolio! I'm Mohamed Imran Ifadah. I am a passionate software engineer with a strong background in technology and a keen interest in innovation. As an aspiring Software Engineer, I am passionate about turning ideas into reality through code. 
                </p>

                <p>
                    I successfully completed my Higher National Diploma (HND) in Software Engineering, which laid a solid foundation for my skills in languages like Java, Python, C#, HTML, PHP, CSS, JavaScript and SQL. Currently pursuing my BEng (Hons) in Software Engineering, exploring the exciting world of AI and new languages like React. My journey has been one of continuous learning and growth, and I am eager to apply my skills to create innovative solutions and contribute to the ever-evolving field of technology. I am driven to solve complex problems and create user-friendly applications. Explore my projects, and let's connect to build something amazing together!
                </p>
                
            </div>
        </section>
    );
};

export default AboutMe;