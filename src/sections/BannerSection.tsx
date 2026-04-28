import React from "react";
import style from "../styles/sections/Banner.module.scss";

/* ───── DATA ───── */
const IMAGE_BANNER_ITEMS = [
  {
    id: 1,
    imageUrl: "https://via.placeholder.com/600x400",
    title: "Engineering Systems",
    description: "Robotics, automation & intelligent systems"
  }
];

const LINKS = [
  { id: 1, label: "Contact Me", href: "#contact" },
  { id: 2, label: "View Projects", href: "#projects" },
  { id: 3, label: "Learn More", href: "#about" }
];

/* ───── IMAGE CAROUSEL (optionnel futur usage) ───── */
const ImageBannerItems: React.FC = () => {
  return (
    <div className={style.image_banner_items}>
      {IMAGE_BANNER_ITEMS.map((item) => (
        <div key={item.id} className={style.image_item}>
          <img src={item.imageUrl} alt={item.title} />
          <div className={style.image_overlay}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ───── MAIN BANNER ───── */
const BannerSection: React.FC = () => {
  return (
    <section className={style.banner}>
      <div className={style.banner_container}>
        <h1>
          Engineering <span>Experience</span>
        </h1>

        <p>
          Full-Stack Development • Robotics • Automation • Data Systems
        </p>

        {/* LINKS */}
        <div className={style.banner_links}>
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={style.banner_link}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* IMAGE BLOCK */}
        <ImageBannerItems />
      </div>
    </section>
  );
};

export default BannerSection;