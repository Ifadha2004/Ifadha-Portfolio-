import { BsCreditCard2FrontFill } from "react-icons/bs";
import { BsDatabaseFillGear } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

export const SKILLS = [
    {
        title: "Frontend",
        icon: BsCreditCard2FrontFill, // Pass as a component
        skills: [
            { skills: "HTML5", percentage: "90%" },
            { skills: "CSS", percentage: "90%" },
            { skills: "React", percentage: "70%" },
            { skills: "JavaScript", percentage: "60%" },
            { skills: "UI/UX designing", percentage: "70%" },
        ],
    },
    {
        title: "Backend",
        icon: BsDatabaseFillGear, // Pass as a component
        skills: [
            { skills: "C#", percentage: "95%" },
            { skills: "Python", percentage: "70%" },
            { skills: "Java", percentage: "60%" },
            { skills: "PHP", percentage: "90%" },
            { skills: "SQL Server", percentage: "95%" },
            { skills: "MySQL", percentage: "95%" },
        ],
    },
    {
        title: "Tools",
        icon: FaTools, // Pass as a component
        skills: [
            { skills: "Visual Studio", percentage: "95%" },
            { skills: "Visual Studio Code", percentage: "95%" },
            { skills: "pycharm", percentage: "60%" },
            { skills: "git & GitHub", percentage: "65%" },
            { skills: "Microsoft SQL Server Management Studio", percentage: "95%" },
            { skills: "MySQL", percentage: "95%" },
            { skills: "Figma", percentage: "80%" },
            { skills: "Adobe XD", percentage: "80%" },
        ],
    },
    {
        title: "Soft-Skills",
        icon: GiSkills, // Pass as a component
        skills: [
            { skills: "Problem-Solving", percentage: "70%" },
            { skills: "Communication", percentage: "80%" },
            { skills: "Teamwork", percentage: "90%" },
            { skills: "Adaptability", percentage: "90%" },
            { skills: "Critical Thinking", percentage: "80%" },
            { skills: "Creativity", percentage: "90%" },
            { skills: "Leadership", percentage: "80%" },
        ],
    },
];

export const WORK_EXPERIENCE = [
    {
        title: "BEng (Hons) Software Engineering - Top-Up",
        university: "London Metropoliton University",
        date: "(2024 September - 2025 September)",
        description: "I am currently pursuing a BEng (Hons) Software Engineering Top-Up degree, where I am building on my foundational knowledge in computing. The program covers advanced topics such as Project Analysis & Practice, Advanced Software Engineering, and Artificial Intelligence. My final year involves a comprehensive research project, allowing me to apply theoretical concepts to real-world unique challenges, showcasing my capabilities in modern software development practices.",

    },

    {
        title: " Pearson BTEC Level 5 HND in Computing, Specialized in Software Engineering",
        university: "Esoft Metro Campus",
        date: "(2022 October - 2024 February)", 
        description: "I completed the Pearson BTEC Level 5 HND in Computing, specializing in Software Engineering, where I gained practical skills and in-depth knowledge across multiple areas of computing. The program was structured into four semesters, covering essential topics such as Programming, Networking, Database Design, Security, Software Development Lifecycle, and many more. My studies culminated in a computer research project, providing me with a strong foundation in both theoretical and applied aspects of software engineering.",
    },

    {
        title: "Diploma in Information Technology",
        university: "Esoft Metro Campus",
        date: "(2021 - 2022 June)", 
        description: "My Diploma in Information Technology laid the groundwork for my expertise in computing. The program equipped me with fundamental skills in IT, preparing me for more advanced studies in software engineering. This diploma served as a stepping stone in my academic journey, fostering a strong understanding of the core principles of information technology.",
    },
];

export const MY_PROJECTS = [
    {
        image: "/ChatBot.png",  // Assuming 'ChatBot.png' is directly inside the 'public' folder
        Pname: "FinBuddy",
        Pdescription: "An intelligent chatbot designed to assist users with banking-related queries. FinBuddy provides information on banking products, services, and general advice, while learning from interactions to improve its responses over time.",
        link: "GitHub Link: ",
    },

    {
        image: "/E-Commerce .png",
        Pname: "Earth Savior",
        Pdescription: "An e-commerce website dedicated to a social business that sells handmade soaps. The platform allows users to browse and purchase a variety of artisanal soaps, promoting sustainable and ethical products.",
        link: "GitHub Link: ",
    },

    {
        image: "FlaskBlog.png",
        Pname: "Blogs ByIfi", 
        Pdescription: "The Flask Blog App is a simple blogging platform enabling users to create, edit, and manage posts. It features user authentication and a responsive design, showcasing essential web development skills using Flask for authors and readers alike. ",
        link: "GitHub Link: ", 
    },
// pls change the below
    {
        image: "FlaskBlog.png",
        Pname: "Blogs ByIfi", 
        Pdescription: "The Flask Blog App is a simple blogging platform enabling users to create, edit, and manage posts. It features user authentication and a responsive design, showcasing essential web development skills using Flask for authors and readers alike. ",
        link: "GitHub Link: ", 
    },

    {
        image: "/E-Commerce .png",
        Pname: "Earth Savior",
        Pdescription: "An e-commerce website dedicated to a social business that sells handmade soaps. The platform allows users to browse and purchase a variety of artisanal soaps, promoting sustainable and ethical products.",
        link: "GitHub Link: ",
    },
];