import React from "react";
import style from "../styles/sections/Banner.module.scss";

/* ───── DATA ───── */
const IMAGE_BANNER_ITEMS = [
  {
    id: 1,
    imageUrl:
      "https://connectedtechnologysolutions.co.uk/wp-content/uploads/2025/05/Robots-in-Manufacturing.jpg",
    title: "Engineering Systems",
    description: "Robotics, automation & intelligent systems",
  },
  {
    id: 2,
    imageUrl:
      "https://connectedtechnologysolutions.co.uk/wp-content/uploads/2025/05/Robots-in-Manufacturing.jpg",
    title: "Engineering Systems",
    description: "Robotics, automation & intelligent systems",
  },
  {
    id: 3,
    imageUrl:
      "https://connectedtechnologysolutions.co.uk/wp-content/uploads/2025/05/Robots-in-Manufacturing.jpg",
    title: "Engineering Systems",
    description: "Robotics, automation & intelligent systems",
  },
  {
    id: 4,
    imageUrl:
      "https://cdnb.artstation.com/p/assets/images/images/050/675/669/large/onkar-sonavane-6.jpg?1655401631",
    title: "Art design",
    description: "desktop art station works",
  },
    {
    id: 5,
    imageUrl:
      "https://connectedtechnologysolutions.co.uk/wp-content/uploads/2025/05/Robots-in-Manufacturing.jpg",
    title: "Engineering Systems",
    description: "Robotics, automation & intelligent systems",}
];

const LINKS = [
  { id: 1, label: "Contact Me", href: "#contact" },
  { id: 2, label: "View Projects", href: "#projects" },
  { id: 3, label: "Learn More", href: "#about" },
];


const BlockBannerLinks:React.FC=()=>{
  return (
        <div className={style.block_banner_links}>
          <h1>
            Engineering <span>Experience</span>
          </h1>

          <p>Full-Stack Development • Robotics • Automation • Data Systems</p>

          {/* LINKS */}
          <div className={style.banner_links}>
            {LINKS.map((link) => (
              <a key={link.id} href={link.href} className={style.banner_link}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
  )
}

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
        {/* <BlockBannerLinks/> */}
        {/* IMAGE BLOCK */}
        <ImageBannerItems />
      </div>
    </section>
  );
};

export default BannerSection;
