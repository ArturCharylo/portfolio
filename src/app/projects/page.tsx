import styles from './projects.module.css';
import { ProjectTimeline } from '@/components/ProjectTimeline/ProjectTimeline';
import type { TimelineProject } from '@/app/types/index';
import { GenerateStars } from '@/components/Stars/Stars';
import { Footer } from '@/components/Footer/Footer';

const PROJECTS: TimelineProject[] = [
    {
        id: 1,
        title: "Technical Education",
        role: "Programming technical education",
        description: "I graduated and passed all my technical exams during the 2019-2025 period at SCI, a prestigious technical high school in Poland. This education provided me with a strong foundation in programming, algorithms, and software development principles, which I have applied in various projects and continue to build upon in my career.",
        url: "https://share.google/IwHZbo51JbUfmPzto"
    },
    {
        id: 2,
        title: "PyScripts",
        role: "Python Developer",
        description: "A combination of various Python scripts tackling different problems, from web scraping and data processing to automation and mini-games.",
        url: "https://github.com/ArturCharylo/Python_projects"
    },
    {
        id: 3,
        title: "IT univeristy",
        role: "Student",
        description: "I am currently pursuing a degree in Computer Science at the Westpomeranian Technical University in Szczecin, where I am deepening my knowledge in software development, algorithms, and computer systems. This education is equipping me with the skills and theoretical background necessary to excel in the tech industry and contribute to innovative projects.",
        url: "https://share.google/Uq9mYYqFiCoQP77Mj"
    },
    {
        id: 4,
        title: "Website for a financial advisor",
        role: "Software Engineer",
        description: "A modern, lightweight,responsive website for a financial advisor, showcasing services and building trust with potential clients.",
        url: "https://szymon-n.pages.dev"
    },
    {
        id: 5,
        title: "Cryptono",
        role: "Full Stack Developer",
        description: "A secure password manager built as a browser extension. Focused on strong encryption, seamless auto-fill capabilities, and a minimal, user-friendly interface to manage digital credentials securely.",
        url: "https://github.com/ArturCharylo/Cryptono"
    },
    {
        id: 6,
        title: "Web E-commerce",
        role: "Full Stack Developer",
        description: "A modern, responsive e-commerce website built with React and Express.js. It features a clean design, smooth animations, and a user-friendly interface to provide an enjoyable shopping experience. This project taught me a lot about handling complex state management, integrating third-party APIs, optimizing performance for web applications and transaction security.",
        url: ""
    },
    {
        id: 7,
        title: "Portfolio",
        role: "Frontend Developer",
        description: "This very site. Designed and built to showcase my web development skills. It features smooth scrolling, complex GSAP animations, and a responsive layout using modern React and Next.js.",
        url: "https://github.com/ArturCharylo/artur-cv"
    },
];

export default function Projects() {
    return (
        <div className={styles.container}>
            <GenerateStars />
            <div className={styles.header}>
                <h1>My Experience</h1>
                <p>Below you will find a timeline of my selected works and experiences. Let me guide you through how I have grown as a developer.</p>
            </div>

            <ProjectTimeline projects={PROJECTS} />
            <p className={styles.bottomText}>The timeline is never finished...</p>
            <Footer />
        </div>
    );
}