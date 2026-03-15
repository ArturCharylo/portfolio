import styles from "./Header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Welcome!</h1>
            <p className={styles.subtitle}>Let me show you my work.</p>
        </header>
    )
}