import React, { useEffect, useState } from "react";
import styles from "../styles/components/loaderComponent.module.scss";
import siteConfig from "../data/config.data";

const LoaderComponent: React.FC = () => {
  const { header, theme } = siteConfig;

  const [phase, setPhase] = useState<
    "intro" | "quake" | "shock" | "chaos" | "clean" | "exit" | "done"
  >("intro");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("quake"), 1000);
    const t2 = setTimeout(() => setPhase("shock"), 1800);
    const t3 = setTimeout(() => setPhase("chaos"), 2400);
    const t4 = setTimeout(() => setPhase("clean"), 3200);
    const t5 = setTimeout(() => setPhase("exit"), 4200);
    const t6 = setTimeout(() => setPhase("done"), 5000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`${styles.loader} ${styles[phase]}`}>

      {/* ===== LOGO ===== */}
      <div className={styles.logo}>
        <span className={styles.e1}>E</span>
        <span className={styles.e2}>E</span>
      </div>

      {/* ===== SOL (100 carrés) ===== */}
      <div className={styles.grid}>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className={styles.tile} />
        ))}
      </div>

      {/* ===== SHOCK WAVE ===== */}
      <div className={styles.wave} />

      {/* ===== CURTAINS ===== */}
      <div className={styles.curtains}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={styles.curtain} />
        ))}
      </div>

      {/* ===== HEADER LOGO FINAL ===== */}
      <div className={styles.headerLogo}>
        {header.logo.text}
      </div>

    </div>
  );
};

export default LoaderComponent;