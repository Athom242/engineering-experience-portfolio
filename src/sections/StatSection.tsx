import React from 'react';
import styles from "../styles/sections/StatSection.module.scss";


const StatSection: React.FC = () => {
  return (
    <section className={styles.StatSection}>
        <div className={styles.StatContainer}>
            <div className={styles.StatItem}>
                <h2>10+</h2>
                <p>Projects Completed</p>
            </div>
            <div className={styles.StatItem}>
                <h2>5</h2>
                <p>Years of Experience</p>
            </div>
            <div className={styles.StatItem}>
                <h2>3</h2>
                <p>Data Insights</p>
            </div>
        </div>
    </section>
  );
};


export default StatSection;