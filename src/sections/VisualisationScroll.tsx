import { useEffect, useState } from "react";
import styles from "./../styles/sections/VisualScrollBarProgess.module.scss";

// const commentaire =
//   "Composant qui affiche une progression visuelle indiquant où l'utilisateur se situe dans le défilement de la page.";

const VisualScrollBarProgress: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent = (scrollTop / height) * 100;
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.visualScrollBarProgess}>
      <div
        style={{ width: `${scrollPercent}%` }}
        className={styles.progressBar}
      />
    </div>
  );
};

export default VisualScrollBarProgress;