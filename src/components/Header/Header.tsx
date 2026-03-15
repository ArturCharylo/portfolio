import styles from "./Header.module.css";
import Image from "next/image";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.titleContainer}>
                <Image src="/do_cv.jpg" alt="Profile picture" width={100} height={100} className={styles.profileImage} />
                <h1 className={styles.title}>Welcome!</h1>
            </div>
            <p className={styles.subtitle}>Let me show you my work.</p>
        </header>
    )
}