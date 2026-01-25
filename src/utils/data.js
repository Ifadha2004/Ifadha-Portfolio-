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
            { skills: "Next.js", percentage: "70%"},
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
        title: "MSc in Data Science and AI",
        university: "Middlesex University Dubai",
        date: "(2025 September - Present)",
        description: "Currently pursuing a Master of Science specializing in Data Science and Artificial Intelligence. The program focuses on advanced machine learning algorithms, big data analytics, and neural networks. I am developing expertise in transforming complex data sets into actionable insights and building intelligent systems that solve intricate real-world problems.",
    },
    {
        title: "BEng (Hons) Software Engineering",
        university: "London Metropolitan University",
        date: "(2024 September - 2025 September)",
        description: "Successfully completed my BEng (Hons) degree with a focus on advanced software architecture and AI integration. My final year research project allowed me to apply theoretical concepts to unique software challenges, demonstrating my capability to deliver production-grade code and modern development practices.",
    },
    {
        title: "Pearson BTEC Level 5 HND in Computing (Software Engineering)",
        university: "Esoft Metro Campus",
        date: "(2022 October - 2024 February)", 
        description: "Completed a comprehensive HND program specializing in Software Engineering. Gained in-depth knowledge in Database Design, Security, and the Software Development Lifecycle. The program culminated in a computer research project that solidified my foundation in both theoretical and applied aspects of computing.",
    },
    {
        title: "Diploma in Information Technology",
        university: "Esoft Metro Campus",
        date: "(2021 - 2022 June)", 
        description: "Equipped with fundamental skills in IT, providing the essential groundwork for my journey into software engineering. This program fostered a strong understanding of core computing principles and prepared me for advanced academic and technical challenges.",
    },
];

export const MY_PROJECTS = [
    {
        images: ["/MealMinder1.png", "/MealMinder2.png", "/MealMinder3.png", "/MealMinder4.png", "MealMinder5.png", "MealMinder6.png"],
        Pname: "MealMinder",
        Pdescription: "A smart food recognition and nutrition tracking system designed to assist users with dietary management. It uses AI to detect food from images, provides nutritional analysis, and recommends healthier alternatives—especially focused on users with Type 2 Diabetes, Hypertension, or High Cholesterol.",
        tech: ["Python", "TensorFlow", "Flask", "OpenCV", "Scikit-learn", "OAuth 2.0", "MySQL", "React.js", "Food-101 Dataset", "USDA Nutrition API"],
        link: "https://github.com/Ifadha2004/MealMinder",
    },

    {
        images: ["FinBuddy1.png", "FinBuddy2.png", "FinBuddy3.png"],  // Assuming 'ChatBot.png' is directly inside the 'public' folder
        Pname: "FinBuddy",
        Pdescription: "FinBuddy is an AI-powered banking assistant chatbot developed using Python, Flask, and PyTorch. It leverages Natural Language Processing (NLP) and Machine Learning to provide intelligent, real-time support for common banking queries. Users can interact through a friendly chat interface to receive assistance on topics such as account types, loan information, interest rates, payment methods, and lost card procedures.",
        tech: ["Python", "Flask", "PyTorch", "NLP", "HTML/CSS"],
        link: "https://github.com/Ifadha2004/FinBuddy",
    },

    {
        images: ["GasByGas1.png", "GasByGas2.png", "GasByGas3.png", "GasByGas4.png"],
        Pname: "GasByGas",
        Pdescription: "GasByGas is a full-stack web and mobile application designed to digitize LP gas distribution across Sri Lanka. The system enables consumers to request gas online, receive digital tokens, and track deliveries in real time. It includes a mobile app for consumers and web portals for outlet managers and head office administrators.",
        tech: ["React Native", "React.js", "Node.js", "Express.js", "MySQL", "JWT", "SMTP"],
        link: "https://github.com/Ifadha2004/GasByGas",
    },

    {
        images: ["DreamDay1.png", "DreamDay2.png", "DreamDay3.png", "DreamDay4.png", "DreamDay5.png"],
        Pname: "DreamDay",
        Pdescription: "A complete wedding planning web application built using ASP.NET MVC. It allows couples to register, plan events, book vendors, and manage tasks easily. Designed with user roles and a clean admin dashboard for efficient event organization.",
        tech: ["ASP.NET MVC", "C#", "Entity Framework", "MySQL", "Bootstrap"],
        link: "https://github.com/Ifadha2004/WeddingPlanner_DreamDay",
    },

    {
        images: ["TravelMate1.png", "TravelMate2.png"],
        Pname: "TravelMate", 
        Pdescription: "TravelBuddy is an AI-powered chatbot designed to assist users with travel planning through a conversational interface. It offers personalized destination suggestions, helpful travel tips, and itinerary recommendations based on user preferences. The chatbot provides a smooth, context-aware interaction experience, allowing users to receive accurate and relevant travel guidance in real time. Built as a smart assistant, TravelBuddy aims to simplify the process of trip planning and improve decision-making for travelers.",
        tech: ["Python", "NLP", "Flask", "HTML", "CSS"],
        link: "https://github.com/Ifadha2004/TravelMate", 
    },  
    
    {
        images: ["BookHaven1.png", "BookHaven2.png", "BookHaven3.png", "BookHaven4.png", "BookHaven5.png"],
        Pname: "BookHaven",
        Pdescription: "BookHaven is a Windows Forms desktop application developed in C# to manage day-to-day bookstore operations. The system allows administrators and staff to efficiently handle book inventory, sales transactions, order tracking, and supplier management.",
        tech: ["C#", "Windows Forms", "SQL Server", "Entity Framework", "Layerd Architecture"],
        link: "https://github.com/Ifadha2004/BookHaven.git",
    },

    {
        images: ["FlaskBlog.png", "BlogApplication.png"],
        Pname: "Blogs ByIfi", 
        Pdescription: "A simple and clean blog application built using Flask. It includes user authentication, post creation, and editing features. Designed to showcase core web development skills while offering a responsive and smooth reading experience.",
        tech: ["Python", "Flask", "SQLite", "HTML", "CSS"],
        ink: "https://github.com/Ifadha2004/FlaskBlog", 
    },

    {
        images: ["/E-Commerce .png"],
        Pname: "Earth Savior",
        Pdescription: "An e-commerce website dedicated to a social business that sells handmade soaps. The platform allows users to browse and purchase a variety of artisanal soaps, promoting sustainable and ethical products.",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        link: "",
    },

    {
        images: ["/TaskManager1.png", "/TaskManager2.png", "/TaskManager3.png", "/TaskManager4.png", "/TaskManager5.png", "/TaskManager6.png"],
        Pname: "Full-Stack Task Management System",
        Pdescription: "TaskFlow is a full-stack task management system built with React, TypeScript, Node.js, Express, and PostgreSQL, featuring secure JWT authentication, role-based access control, and a polished admin dashboard. Users can create, assign, update, and track tasks with real-time UI feedback, while admins get full control over user roles, account status, and workload insights visualized through interactive charts. The system is fully typed end-to-end with Prisma ORM and React Query, ensuring reliability, scalability, and a modern, production-ready architecture.",
        tech: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "React Query",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Prisma ORM",
            "JWT Authentication",
            "Recharts"
            ],
        link: "https://github.com/Ifadha2004/Task-Manager",
    },
];