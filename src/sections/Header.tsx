import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "../styles/sections/Header.module.scss";


const NAV_LINKS = [
  { label: "Home",        href: "#home" },
  { label: "Projects",    href: "#projects" },
  { label: "Engineering", href: "#engineering" },
  { label: "Data",        href: "#data" },
  { label: "Contact",     href: "#contact" },
];

const Header: React.FC = () => {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [lang,       setLang]       = useState<"EN" | "FR">("EN");
  const [dark,       setDark]       = useState(true);
  const [active,     setActive]     = useState("Home");
  const headerRef = useRef<HTMLElement>(null);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Theme toggle on <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  const toggleLang = useCallback(() =>
    setLang((l) => (l === "EN" ? "FR" : "EN")), []);

  const toggleTheme = useCallback(() => setDark((d) => !d), []);

  const handleNav = useCallback((label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${menuOpen ? styles.menuOpened : ""}`}
      >
        {/* ── Logo ── */}
        <a href="#home" className={styles.logo} onClick={() => setActive("Home")}>
          <span className={styles.logoMark}>EE</span>
          <span className={styles.logoText}>
            Engineering<br />
            <em>Experience</em>
          </span>
        </a>

        {/* ── Nav desktop ── */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label} className={active === label ? styles.navItemActive : styles.navItem}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNav(label, href); }}
                >
                  {label}
                  <span className={styles.navDot} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Controls ── */}
        <div className={styles.controls}>
          {/* Lang toggle */}
          <button className={styles.langToggle} onClick={toggleLang} aria-label="Toggle language">
            <span className={lang === "EN" ? styles.langActive : ""}>EN</span>
            <span className={styles.langSep}>/</span>
            <span className={lang === "FR" ? styles.langActive : ""}>FR</span>
          </button>

          {/* Theme toggle */}
          <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
            <span className={styles.themeTrack}>
              <span className={`${styles.themeThumb} ${dark ? styles.themeDark : styles.themeLight}`} />
            </span>
            <span className={styles.themeLabel}>{dark ? "☽" : "○"}</span>
          </button>

          {/* CTA */}
          <a href="mailto:hello@engineering.dev" className={styles.cta}>
            Hire me <span className={styles.ctaArrow}>↗</span>
          </a>

          {/* Burger */}
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* ── Mobile menu overlay ── */}
      <div className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}>
        <nav className={styles.overlayNav}>
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              className={styles.overlayLink}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
              onClick={(e) => { e.preventDefault(); handleNav(label, href); }}
            >
              <span className={styles.overlayIndex}>0{i + 1}</span>
              {label}
            </a>
          ))}
        </nav>
        <div className={styles.overlayBottom}>
          <a href="mailto:hello@engineering.dev" className={styles.overlayEmail}>
            hello@engineering.dev
          </a>
          <div className={styles.overlayControls}>
            <button className={styles.langToggle} onClick={toggleLang}>{lang === "EN" ? "FR" : "EN"}</button>
            <button className={styles.themeToggle} onClick={toggleTheme}>{dark ? "○ Light" : "☽ Dark"}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;