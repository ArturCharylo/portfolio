import styles from './projects.module.css';
import { ProjectTimeline, TimelineProject } from '@/components/ProjectTimeline/ProjectTimeline';

const PROJECTS: TimelineProject[] = [
    {
        id: 1,
        title: "Cryptono",
        role: "Full Stack Developer",
        description: "A secure password manager built as a browser extension. Focused on strong encryption, seamless auto-fill capabilities, and a minimal, user-friendly interface to manage digital credentials securely.",
        videoSrc: "/video1.webm",
        posterSrc: "/video1.webm",
        url: "https://github.com/ArturCharylo/Cryptono"
    },
    {
        id: 2,
        title: "Portfolio",
        role: "Frontend Developer",
        description: "This very site. Designed and built to showcase my web development skills. It features smooth scrolling, complex GSAP animations, and a responsive layout using modern React and Next.js.",
        videoSrc: "/video2.webm",
        posterSrc: "/video2.webm",
        url: "https://github.com/ArturCharylo/artur-cv"
    },
    {
        id: 3,
        title: "Github Overview",
        role: "Software Engineer",
        description: "An overview of my open-source contributions and personal projects hosted on GitHub, reflecting my ongoing learning and development journey.",
        videoSrc: "/video3.webm",
        posterSrc: "/video3.webm",
        url: "https://github.com/ArturCharylo"
    },
    {
        id: 4,
        title: "PyScripts",
        role: "Python Developer",
        description: "A combination of various Python scripts tackling different problems, from web scraping and data processing to automation and mini-games.",
        videoSrc: "/video4.webm",
        posterSrc: "/video4.webm",
        url: "https://github.com/ArturCharylo/Python_projects"
    }
];

export default function Projects() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>My Projects</h1>
                <p>A timeline of my selected works and experiences.</p>
            </div>

            <ProjectTimeline projects={PROJECTS} />
            <p className={styles.bottomText}>More projects coming soon...</p>
        </div>
    );
}