import styles from './projects.module.css';
import Image from 'next/image';

const PROJECTS = [
    { id: 1, name: "Project 1", desc: "Description for Project 1", url:"", img: "/project1.png" },
    { id: 2, name: "Project 2", desc: "Description for Project 2", url: "", img: "/project2.png" },
    { id: 3, name: "Project 3", desc: "Description for Project 3", url: "", img: "/project3.png" }
]; // Example project data

export default function Projects() {

    return (
        <div className={styles.container}>
            <h1>Projects Page</h1>
            <p>This is where the projects will be listed.</p>
            {PROJECTS.map((project, index) => (
                <div key={index} className={styles.projectCard}>
                    <h2>{project.name}</h2>
                    <p>{project.desc}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                    <Image src={project.img} width={200} height={150} alt={project.name} />
                </div>
            ))}

        </div>
    );
}