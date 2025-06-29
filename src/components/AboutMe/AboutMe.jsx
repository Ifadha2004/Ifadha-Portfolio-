import React from 'react';
import './AboutMe.css';

const AboutMe =() => {
    return(
        <section className='AboutMe-Container'>
            <div className='AboutMe-img'>
                <div>
                    <img src='Me.png' alt='About Me'/>
                </div>
            </div>

            <div className='AboutMe-Content'>
                <h5>About Me</h5>

                <p>
                    Welcome to my portfolio! I'm Mohamed Imran Ifadah, a passionate and dedicated Software Engineer with a solid foundation in technology and a strong interest in innovation. I enjoy transforming ideas into practical solutions using modern tools and clean code.
                </p>

                <p>
                    I have completed my Higher National Diploma (HND) in Software Engineering and earned my BEng (Hons) in Software Engineering. These academic milestones have strengthened my skills in languages and technologies such as Java, Python, C#, HTML, CSS, PHP, JavaScript, SQL, and React.js. I’m also exploring the exciting possibilities of Artificial Intelligence and Full-Stack Development.
                </p>
                
                <p>
                    My journey in software development has been focused on continuous improvement, hands-on learning, and building projects that matter. I’m motivated to develop smart, user-friendly, and reliable applications that solve real-world problems. Whether it’s front-end design, back-end logic, or full-stack solutions, I love working across all layers of a system.
                </p>

                <p>
                    Feel free to explore my projects and connect with me. Let’s build something meaningful together!
                </p>
            </div>
        </section>
    );
};

export default AboutMe;