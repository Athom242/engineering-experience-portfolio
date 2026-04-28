import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "../styles/sections/Header.module.scss";
import { type SiteConfig } from "../types/config.types";

// 👉 tu importeras ta config réelle ici
import siteConfig from "../data/config.data";

const Header: React.FC = () => {
  const config: SiteConfig = siteConfig;

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "FR">(config.header.defaultLanguage);
  const [dark, setDark] = useState(config.header.defaultTheme === "dark");
  const [active, setActive] = useState(config.header.navLinks[0]?.label || "");

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  const toggleLang = useCallback(
    () => setLang((l) => (l === "EN" ? "FR" : "EN")),
    []
  );

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
        className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      >
        {/* LOGO */}
        <a href="#home" className={styles.logo}>
          <span className={styles.logoMark}>
            {config.header.logo.text}
          </span>
          <span className={styles.logoText}>
            {config.siteName}
            {/* <em>{config.header.logo.label}</em> */}
          </span>
        </a>

        {/* NAV */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {config.header.navLinks.map(({ label, href }) => (
              <li
                key={label}
                className={active === label ? styles.navItemActive : styles.navItem}
              >
                <a
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(label, href);
                  }}
                >
                  {label}
                  <span className={styles.navDot} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CONTROLS */}
        <div className={styles.controls}>
          <button onClick={toggleLang} className={styles.langToggle}>
            {lang === "EN" ? "EN / FR" : "FR / EN"}
          </button>

          <button onClick={toggleTheme} className={styles.themeToggle}>
            {dark ? "☽" : "☀"}
          </button>

          <a href={`mailto:${config.header.cta.email}`} className={styles.cta}>
            {config.header.cta.label} ↗
          </a>

          <button
            className={styles.burger}
            onClick={() => setMenuOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;