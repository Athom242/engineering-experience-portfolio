import React, { useEffect, useRef } from "react";
import styleElt from "./../styles/sections/Footer.module.scss";

const MARQUEE_ITEMS = [
  "Full-Stack Dev",
  "Data Analysis",
  "Systems Engineering",
  "3D & Simulation",
  "Engineering Experience",
];

const NAV_LINKS = ["Home", "Projects", "Engineering", "Data", "Contact"];
const EXPERTISE = ["Full-Stack Dev", "Data Analysis", "Systems Eng.", "3D & Simulation"];
const SOCIALS = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Email", href: "mailto:hello@engineering.dev" },
];
const PARTNERS = ["Partenaire 01", "Partenaire 02", "Partenaire 03"];

const Footer: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!wrap || !cursor || !ring) return;

    const onMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      ring.style.left = e.clientX + "px";
      ring.style.top = e.clientY + "px";
    };

    wrap.addEventListener("mousemove", onMove);

    const hoverEls = wrap.querySelectorAll<HTMLElement>(
      `a, button, .${styleElt.partnerBadge}, li, .${styleElt.accent}`
    );
    const addHover = () => {
      cursor.classList.add(styleElt.hovered);
      ring.classList.add(styleElt.ringHovered);
    };
    const removeHover = () => {
      cursor.classList.remove(styleElt.hovered);
      ring.classList.remove(styleElt.ringHovered);
    };
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      wrap.removeEventListener("mousemove", onMove);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <footer className={styleElt.footerWrap} ref={wrapRef}>
      {/* Custom cursor */}
      <div className={styleElt.cursor} ref={cursorRef} />
      <div className={styleElt.cursorRing} ref={ringRef} />

      {/* Marquee */}
      <div className={styleElt.marqueeWrap}>
        <div className={styleElt.marquee}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i}>
              {item} <em>×</em>
            </span>
          ))}
        </div>
      </div>

      {/* Hero CTA */}
      <div className={styleElt.hero}>
        <div className={styleElt.heroLabel}>Available for projects — 2026</div>
        <div className={styleElt.ctaBlock}>
          <h2 className={styleElt.ctaTitle}>
            Let&apos;s
            <br />
            <span className={styleElt.accent}>build</span>
            <br />
            together.
          </h2>
          <div className={styleElt.ctaRight}>
            <a className={styleElt.btnContact} href="mailto:hello@engineering.dev">
              Get in touch <span className={styleElt.arrow}>↗</span>
            </a>
            <span className={styleElt.email}>hello@engineering.dev</span>
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className={styleElt.partners}>
        <div className={styleElt.colLabel}>Collaborations & tools</div>
        <div className={styleElt.partnersRow}>
          {PARTNERS.map((p) => (
            <div key={p} className={styleElt.partnerBadge}>
              {p}
            </div>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className={styleElt.grid}>
        <div className={styleElt.col}>
          <div className={styleElt.colLabel}>About</div>
          <p className={styleElt.tagline}>
            Building systems across software, data, and engineering. One
            pixel-perfect solution at a time.
          </p>
        </div>

        <div className={styleElt.col}>
          <div className={styleElt.colLabel}>Navigation</div>
          <ul className={styleElt.navList}>
            {NAV_LINKS.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styleElt.col}>
          <div className={styleElt.colLabel}>Expertise</div>
          <ul className={styleElt.navList}>
            {EXPERTISE.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styleElt.col}>
          <div className={styleElt.colLabel}>Connect</div>
          <ul className={styleElt.navList}>
            {SOCIALS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styleElt.bottom}>
        <span className={styleElt.bottomLeft}>
          © 2026 Engineering Experience — All rights reserved
        </span>
        <div className={styleElt.bottomRight}>
          <span className={styleElt.statusDot} />
          <span className={styleElt.statusText}>Open to work</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;