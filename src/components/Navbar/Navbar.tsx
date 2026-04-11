import Link from 'next/link';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navLink}>
        Home
      </Link>
      <Link href="/projects" className={styles.navLink}>
        Experience
      </Link>
    </nav>
  );
};
