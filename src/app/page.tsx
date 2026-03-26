"use client";

import styles from "./page.module.css";
import { useEffect } from "react";
// -------------- Header imports --------------------------
import { Header } from "@/components/Header/Header";
// -------------- Project Section imports --------------------------
import { ProjectIntro } from "@/components/ProjectIntro/ProjectIntro";
import { GenerateStars } from "@/components/Stars/Stars";
import { Marquee } from "@/components/Marquee/Marquee";
// -------------- About imports --------------------------
import { About } from "@/components/About/About";

export default function Home() {
  useEffect(() => {
    // Disable default browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={`${styles.container} mesh-gradient-bg`}>
      <GenerateStars />
      <Header />   
      <ProjectIntro />
      <Marquee />
      <About />
    </main>
  );
}