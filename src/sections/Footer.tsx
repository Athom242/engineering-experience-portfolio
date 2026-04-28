import React, { useEffect, useRef } from "react";
import styleElt from "./../styles/sections/Footer.module.scss";
import  siteConfig  from "../data/config.data";

const Footer: React.FC = () => {
  const config = siteConfig.footer;

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
    return () => wrap.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <footer className={styleElt.footerWrap} ref={wrapRef}>
      <div className={styleElt.cursor} ref={cursorRef} />
      <div className={styleElt.cursorRing} ref={ringRef} />

      {/* MARQUEE */}
      <div className={styleElt.marqueeWrap}>
        <div className={styleElt.marquee}>
          {[...config.marquee, ...config.marquee].map((item, i) => (
            <span key={i}>
              {item} <em>×</em>
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className={styleElt.hero}>
        <div className={styleElt.heroLabel}>
          {config.cta.subtitle}
        </div>

        <div className={styleElt.ctaBlock}>
          <h2 className={styleElt.ctaTitle}>
            {config.cta.title.split(" ").map((w, i) => (
              <span key={i}>
                {w} <br />
              </span>
            ))}
          </h2>

          <div className={styleElt.ctaRight}>
            <a
              className={styleElt.btnContact}
              href={`mailto:${config.cta.email}`}
            >
              {config.cta.buttonLabel} ↗
            </a>

            <span className={styleElt.email}>
              {config.cta.email}
            </span>
          </div>
        </div>
      </div>

      {/* PARTNERS */}
      <div className={styleElt.partners}>
        <div className={styleElt.colLabel}>Collaborations</div>
        <div className={styleElt.partnersRow}>
          {config.partners.map((p) => (
            <div key={p} className={styleElt.partnerBadge}>
              {p}
            </div>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className={styleElt.grid}>
        <div className={styleElt.col}>
          <div className={styleElt.colLabel}>About</div>
          <p className={styleElt.tagline}>
            {config.about.tagline}
          </p>
        </div>

        <div className={styleElt.col}>
          <div className={styleElt.colLabel}>Navigation</div>
          <ul className={styleElt.navList}>
            {config.navigation.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styleElt.col}>
          <div className={styleElt.colLabel}>Expertise</div>
          <ul className={styleElt.navList}>
            {config.expertise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styleElt.col}>
          <div className={styleElt.colLabel}>Connect</div>
          <ul className={styleElt.navList}>
            {config.socials.map((s) => (
              <li key={s.name}>
                <a href={s.url} target="_blank">
                  {s.name} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* STATUS */}
      <div className={styleElt.bottom}>
        <span>
          © 2026 {siteConfig.siteName}
        </span>

        <div>
          <span className={styleElt.statusDot} />
          <span>{config.status.text}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;