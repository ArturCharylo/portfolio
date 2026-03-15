import styles from "./page.module.css";
import { Marquee } from "@/components/Marquee/Marquee";
import { Header } from "@/components/Header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Marquee />
    </div>
  );
}
