import React from "react";
import styles from "../styles/sections/AboutSection.module.scss";
import siteConfig from "../data/config.data";

const AboutSection: React.FC = () => {
  const { author, tagline, footer } = siteConfig;

  return (
    <section className={styles.about} id="about">

      {/* ===== INTRO ===== */}
      <div className={styles.intro}>
        <h2 className={styles.title}>
          About {author}
        </h2>

        <p className={styles.subtitle}>
          {tagline}
        </p>
      </div>

      {/* ===== MANIFESTE ===== */}
      <div className={styles.manifesto}>
        <p>
          I design and build systems where <strong>engineering meets creativity</strong>.
          From software architecture to electromechanical systems, from data processing
          to visual storytelling, I focus on creating coherent, scalable and intelligent solutions.
        </p>
      </div>

      {/* ===== DOMAINS ===== */}
      <div className={styles.grid}>

        <div className={styles.card}>
          <span>01</span>
          <h3>Software Engineering</h3>
          <p>Full-stack applications, scalable architectures, system design.</p>
        </div>

        <div className={styles.card}>
          <span>02</span>
          <h3>Electromechanics</h3>
          <p>Robotics, automation, industrial systems and multiphysics design.</p>
        </div>

        <div className={styles.card}>
          <span>03</span>
          <h3>Data Systems</h3>
          <p>Data analysis, pipelines, modeling and intelligent systems.</p>
        </div>

        <div className={styles.card}>
          <span>04</span>
          <h3>Design & 3D</h3>
          <p>Modeling, animation, simulation and visual environments.</p>
        </div>

        <div className={styles.card}>
          <span>05</span>
          <h3>Communication</h3>
          <p>Storytelling, branding and advertising concepts.</p>
        </div>

      </div>

      {/* ===== VISION ===== */}
      <div className={styles.vision}>
        <h3>Engineering mindset</h3>
        <p>
          My approach is system-oriented: every project is treated as a structure
          where logic, performance and design must coexist.
        </p>
      </div>

    </section>
  );
};

export default AboutSection;