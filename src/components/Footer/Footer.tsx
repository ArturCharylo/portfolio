"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Footer.module.css";

const NAV_LINKS = [
  ["Work", "/#"],
  ["Expertise", "/projects"],
  ["About", "/#about"],
  ["Contact", "/#contact"]
];
const SOCIAL_LINKS = [
  ["LinkedIn", "https://www.linkedin.com/in/artur-charylo"],
  ["LeetCode", "https://leetcode.com/u/arturcharylo/"],
  ["GitHub", "https://github.com/arturcharylo"]
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  // State to control visibility and prevent FOUC
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;
    const spacer = spacerRef.current;
    const parallax = parallaxRef.current;
    if (!footer || !spacer || !parallax) return;

    // Dynamic height calculation required for the spacer
    const syncSpacer = () => {
      spacer.style.height = `${footer.offsetHeight}px`;
    };

    const onScroll = () => {
      const footerH = footer.offsetHeight;
      const docScrollH = document.documentElement.scrollHeight;
      const winH = window.innerHeight;
      const scrolled = window.scrollY;

      const maxScroll = docScrollH - winH;
      const revealStart = maxScroll - footerH;
      
      if (scrolled <= revealStart) {
        footer.style.transform = `translateY(110%)`;
        footer.style.visibility = "hidden";
      } else {
        const progress = scrolled - revealStart;
        
        // 1. Container mask moves strictly 1:1 to prevent overlapping with content above
        const containerTranslate = Math.max(0, footerH - progress);
        footer.style.transform = `translateY(${containerTranslate}px)`;
        footer.style.visibility = "visible";

        // 2. Inner content moves at a slower rate to create a deep parallax effect inside the mask
        const PARALLAX_STRENGTH = 0.2;
        const innerTranslate = (footerH - progress) * PARALLAX_STRENGTH;
        parallax.style.transform = `translateY(${innerTranslate}px)`;
      }
    };

    // Initialize calculations before showing the component
    syncSpacer();
    onScroll();
    
    // Defer the state update to the next animation frame to avoid synchronous cascading renders
    requestAnimationFrame(() => {
      setIsReady(true);
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      syncSpacer();
      onScroll();
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", syncSpacer); 
    };
  }, []);

  return (
    <>
      <div ref={spacerRef} aria-hidden="true" />

      <footer 
        ref={footerRef} 
        className={`${styles.footer} ${isReady ? styles.footerReady : styles.footerHidden}`}
        id="contact"
      >
        {/* Parallax wrapper acts as the moving layer inside the static footer mask */}
        <div ref={parallaxRef} className={styles.parallaxWrapper}>
          
          {/* Background glows */}
          <div className={styles.glowTop} aria-hidden="true" />
          <div className={styles.glowBottom} aria-hidden="true" />

          <div className={styles.inner}>

            {/* ── CTA block ── */}
            <div className={styles.cta}>
              <span className={styles.ctaEyebrow}>Project Inquiry</span>

              <h2 className={styles.ctaHeadline}>
                Let&rsquo;s Build<br />
                The{" "}
                <span className={styles.ctaGradient}>Future.</span>
              </h2>

              <a href="mailto:artur.cha@outlook.com" className={styles.ctaEmail}>
                <span className={styles.ctaEmailText}>artur.cha@outlook.com</span>
                <svg
                  className={styles.ctaArrow}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>

            <div className={styles.divider} />

            {/* ── Grid ── */}
            <div className={styles.grid}>

              {/* Brand */}
              <div className={styles.brand}>
                <div className={styles.logo}>ARTUR</div>
                <p className={styles.brandDesc}>
                  Feel free to reach out if you have an interesting project in mind or just want to connect!
                </p>
              </div>

              {/* Directory */}
              <nav className={styles.linkGroup} aria-label="Footer navigation">
                <h3 className={styles.linkGroupHeading}>Sections</h3>
                <ul className={styles.linkList}>
                  {NAV_LINKS.map((l) => (
                    <li key={l[1]}>
                      <a href={l[1]} className={styles.link}>
                        {l[0]}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Social */}
              <nav className={styles.linkGroup} aria-label="Social links">
                <h3 className={styles.linkGroupHeading}>Social</h3>
                <ul className={styles.linkList}>
                  {SOCIAL_LINKS.map((l) => (
                    <li key={l[0]}>
                      <a href={l[1]} className={`${styles.link} ${styles.linkCyan}`} target="_blank" rel="noopener noreferrer">
                        {l[0]}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Location */}
              <div className={styles.location}>
                <h3 className={styles.linkGroupHeading}>Location &amp; Access</h3>
                <div className={styles.locationBlock}>
                  <p className={styles.locationLabel}>Szczecin, Poland</p>
                </div>

                <div className={styles.locationBlock}>
                  <p className={styles.locationLabel}>Timezone</p>
                  <p className={styles.locationValue}>GMT+2</p>
                </div>
              </div>
            </div>

            {/* ── Bottom bar ── */}
            <div className={styles.bottom}>
              <p className={styles.copyright}>
                &copy; {new Date().getFullYear()} Artur Charyło. All rights reserved.
              </p>
              <div className={styles.legal}>
                <a href="#" className={styles.legalLink}>Privacy Protocol</a>
                <a href="#" className={styles.legalLink}>Terms of Engagement</a>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}