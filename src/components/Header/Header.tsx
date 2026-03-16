import styles from "./Header.module.css";
import Image from "next/image";

export function Header() {
    return (
        <header className={styles.header}>
            <Image
                src="/do_cv.jpg" 
                alt="Profile picture" 
                width={150} 
                height={150} 
                className={styles.profileImage} 
                priority 
            />
            <div className={styles.headerText}>
                <h1 className={styles.title}>Welcome!</h1>
                <p className={styles.subtitle}>Let me show you my work.</p>
            </div>
        </header>
    )
}