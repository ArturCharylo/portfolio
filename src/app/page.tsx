import styles from "./page.module.css";
import { Marquee } from "@/components/Marquee/Marquee";

export default function Home() {
  return (
    <div className={styles.page}>
      <Marquee />
    </div>
  );
}
