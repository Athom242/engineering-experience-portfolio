import React, { useMemo } from "react";
import styles from "../styles/sections/ProjectSection.module.scss";
import { projectsData } from "../data/projet.data";
import {type Projet } from "../types/projet.types";

/* =========================
   HEADER
========================= */
const ProjectsHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <h2>Projects</h2>
      <p>
        Engineering systems, software architecture, robotics, data and design experiments.
      </p>
    </header>
  );
};

/* =========================
   CARD
========================= */
const ProjectCard: React.FC<{ project: Projet }> = ({ project }) => {
  return (
    <article className={styles.card}>

      {/* TOP META */}
      <div className={styles.cardTop}>
        <span className={styles.id}>{project.id}</span>

        <span
          className={`${styles.status} ${
            project.statut === "Terminé" ? styles.done : styles.progress
          }`}
        >
          {project.statut}
        </span>
      </div>

      {/* TITLE */}
      <h3 className={styles.title}>{project.titre}</h3>

      {/* DESCRIPTION */}
      <p className={styles.description}>{project.description}</p>

      {/* STACK PRINCIPALE */}
      {project.stackPrincipale?.length ? (
        <div className={styles.stack}>
          {project.stackPrincipale.map((item, i) => (
            <span key={i} className={styles.tech}>
              {item}
            </span>
          ))}
        </div>
      ) : null}

      {/* TECHNOLOGIES */}
      {project.technologies?.length ? (
        <div className={styles.techList}>
          {project.technologies.slice(0, 5).map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
      ) : null}

      {/* LINKS */}
      <footer className={styles.footer}>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Live →
          </a>
        )}

        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            Code →
          </a>
        )}
      </footer>

    </article>
  );
};

/* =========================
   GRID
========================= */
const ProjectsGrid: React.FC<{ projects: Projet[] }> = ({ projects }) => {
  const data = useMemo(() => projects, [projects]);

  return (
    <div className={styles.grid}>
      {data.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
};

/* =========================
   MAIN SECTION
========================= */
const ProjectsSection: React.FC = () => {
  return (
    <section className={styles.projects} id="projects">

      <ProjectsHeader />

      <ProjectsGrid projects={projectsData} />

    </section>
  );
};

export default ProjectsSection;