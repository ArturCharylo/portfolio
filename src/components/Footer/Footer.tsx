"use client";

import { useEffect, useRef } from "react";
import styles from "./Footer.module.css";

const NAV_LINKS = ["Work", "Expertise", "About", "Contact"];
const SOCIAL_LINKS = ["LinkedIn", "LeetCode", "GitHub", "Read.cv"];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const spacer = spacerRef.current;
    if (!footer || !spacer) return;

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
      const progress = Math.max(0, scrolled - revealStart);
      const translate = Math.max(0, footerH - progress);

      footer.style.transform = `translateY(${translate}px)`;
    };

    syncSpacer();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      syncSpacer();
      onScroll();
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Spacer lives inside your page's content flow — mount this alongside Footer */}
      <div ref={spacerRef} aria-hidden="true" />

      <footer ref={footerRef} className={styles.footer}>
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
              <div className={styles.logo}>STUDIO</div>
              <p className={styles.brandDesc}>
                Crafting digital experiences through the lens of modernist
                architecture and precision engineering.
              </p>
            </div>

            {/* Directory */}
            <nav className={styles.linkGroup} aria-label="Footer navigation">
              <h3 className={styles.linkGroupHeading}>Directory</h3>
              <ul className={styles.linkList}>
                {NAV_LINKS.map((l) => (
                  <li key={l}>
                    <a href="#" className={styles.link}>{l}</a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social */}
            <nav className={styles.linkGroup} aria-label="Social links">
              <h3 className={styles.linkGroupHeading}>Social</h3>
              <ul className={styles.linkList}>
                {SOCIAL_LINKS.map((l) => (
                  <li key={l}>
                    <a href="#" className={`${styles.link} ${styles.linkCyan}`}>{l}</a>
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
      </footer>
    </>
  );
}