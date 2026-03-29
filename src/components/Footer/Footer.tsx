import styles from "./Footer.module.css";

export function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </footer>
        </>
    );
}