import styles from "./page.module.css";
import { Marquee } from "@/components/Marquee/Marquee";
import { Header } from "@/components/Header/Header";

const lines = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  pos: `${Math.random() * 100}%`,
  delay: `${Math.random() * 10}s`,
  duration: `${5 + Math.random() * 10}s`,
  direction: Math.random() > 0.5 ? 'normal' : 'reverse',
  opacity: 0.05 + Math.random() * 0.15,
}));

export default function Home() {

  return (
    <main className={styles.container}>
      <div className={styles.lines}>
        {lines.map((line) => (
          <div 
            key={line.id} 
            className={styles.line} 
            style={{ 
              '--line-pos': line.pos, 
              '--line-delay': line.delay,
              '--line-duration': line.duration,
              '--line-direction': line.direction,
              '--line-opacity': line.opacity
            } as React.CSSProperties} 
          />
        ))}
      </div>

      <Header />
      <Marquee />
    </main>
  );
}
