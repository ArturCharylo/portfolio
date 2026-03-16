import styles from "./page.module.css";
import { GenerateStars } from "@/components/Stars/Stars";
import { Marquee } from "@/components/Marquee/Marquee";
import { Header } from "@/components/Header/Header";

export default function Home() {


  return (
    <main className={styles.container}>
      <GenerateStars />
      <Header />
      <Marquee />
    </main>
  );
}