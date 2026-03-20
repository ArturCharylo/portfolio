import styles from "./page.module.css";
// -------------- Header imports --------------------------
import { Header } from "@/components/Header/Header";
// -------------- Project Section imports --------------------------
import { ProjectIntro } from "@/components/ProjectIntro/ProjectIntro";
import { GenerateStars } from "@/components/Stars/Stars";
import { Marquee } from "@/components/Marquee/Marquee";
// -------------- About imports --------------------------
import { About } from "@/components/About/About";

export default function Home() {


  return (
    <main className={styles.container}>
      <GenerateStars />
      <Header />
      <ProjectIntro />
      <Marquee />
      <About />
    </main>
  );
}