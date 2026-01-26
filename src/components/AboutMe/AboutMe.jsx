// import React from 'react';
// import './AboutMe.css';
// import {motion} from 'framer-motion';

// const AboutMe =() => {
//     //Motion Variants
//     // const fadeLeft = {
//     //     hidden: {opacity: 0, x: -50},
//     //     show: {opacity: 1, x: 0, transition: {duration: 0.8, ease:`easeInOut`}},
//     //     // visible: {opacity: 1, x: 0, transition: {duration: 1}}
//     // };

//     // const fadeRight = {
//     //     hidden: {opacity: 0, x: 50},
//     //     show: {opacity: 1, x: 0, transition: {duration: 0.8, ease:`easeInOut`}},
//     //     // visible: {opacity: 1, x: 0, transition: {duration: 1}}
//     // };

//     return(
//         <section className='AboutMe-Container'>
//             <div className='AboutMe-img'>
//                 <div>
//                     <img src='Me.png' alt='About Me'/>
//                 </div>
//             </div>

//             <div className='AboutMe-Content'>
//                 <h5>About Me</h5>

//                 <p>
//                     Welcome to my portfolio! I'm Mohamed Imran Ifadah, a passionate and dedicated Software Engineer with a solid foundation in technology and a strong interest in innovation. I enjoy transforming ideas into practical solutions using modern tools and clean code.
//                 </p>

//                 <p>
//                     I have completed my Higher National Diploma (HND) in Software Engineering and earned my BEng (Hons) in Software Engineering. These academic milestones have strengthened my skills in languages and technologies such as Java, Python, C#, HTML, CSS, PHP, JavaScript, SQL, and React.js. I’m also exploring the exciting possibilities of Artificial Intelligence and Full-Stack Development.
//                 </p>
                
//                 <p>
//                     My journey in software development has been focused on continuous improvement, hands-on learning, and building projects that matter. I’m motivated to develop smart, user-friendly, and reliable applications that solve real-world problems. Whether it’s front-end design, back-end logic, or full-stack solutions, I love working across all layers of a system.
//                 </p>

//                 <p>
//                     Feel free to explore my projects and connect with me. Let’s build something meaningful together!
//                 </p>
//             </div>
//         </section>
//     );
// };

// export default AboutMe;


import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about" className="AboutMe-Container" data-aos="fade-up">
      {/* Image column */}
      <div
        className="AboutMe-img"
        data-aos="fade-right"
        data-aos-delay="120"
        data-aos-anchor-placement="top-bottom"
      >
        <div>
          {/* If Me.png is in /public, prefer absolute path `/Me.png` to avoid bundler path issues */}
          <img src="/Me.png" alt="About Me" />
        </div>
      </div>

      {/* Text column */}
      <div
        className="AboutMe-Content"
        data-aos="fade-left"
        data-aos-delay="220"
        data-aos-anchor-placement="top-bottom"
      >
        <h5 data-aos="zoom-in" data-aos-delay="320">About Me</h5>

        <p data-aos="fade-up" data-aos-delay="380">
          Hi, I’m Mohamed Imran Ifadah, a Software Engineer with 2 years of hands-on experience as a Full-Stack Developer. I enjoy building clean, scalable, and user-focused applications using modern technologies.
        </p>

        <p data-aos="fade-up" data-aos-delay="460">
          I have successfully completed my BEng (Hons) in Software Engineering at London Metropolitan University and I am currently pursuing an MSc in Data Science and Artificial Intelligence at Middlesex University Dubai. My background spans Java, Python, C#, JavaScript, React, SQL, and web technologies, with a growing focus on data-driven and AI-powered solutions.
        </p>

        <p data-aos="fade-up" data-aos-delay="540">
          My journey in software development has been focused on continuous improvement, hands-on learning, and building projects that matter. I’m motivated to develop smart, user-friendly, and reliable applications that solve real-world problems. Whether it’s front-end design, back-end logic, or full-stack solutions, I love working across all layers of a system.
        </p>

        <p data-aos="fade-up" data-aos-delay="620">
          Feel free to explore my projects and connect with me. Let’s build something meaningful together!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
