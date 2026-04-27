import React,{useState,useEffect,useCallback, useRef} from 'react';
import style from "../styles/sections/Banner.module.scss";


const IMAGE_BANNER_ITEMS = [
  {
    id: 1,
    imageUrl: "https://via.placeholder.com/300x200",
    title: "Project 1",
    description: "Description of Project 1"
  },
]


const LINKS = [
  { id: 1, label: "Contact Me", href: "#contact" ,actionClick: () => {}},
    { id: 2, label: "View Projects", href: "#projects" ,actionClick: () => {}},
    { id: 3, label: "Learn More", href: "#learnMore" ,actionClick: () => {}}
];



const ImageBannerItems:React.FC=()=>{
  return (
    <div className={` ${style.image_banner_items} `}>
      <div className={` ${style.image_item} `}>
      </div>
    </div>);
}
const BannerSection:React.FC = () => {
  
  return (
    <section className={` ${style.banner} `}>
        <div className={` ${style.banner_container} `}>
            <h1>Welcome to My Portfolio</h1>
            <p>Discover my projects, engineering experience, and data insights.</p>

            <div className={` ${style.banner_links} `}>
                {LINKS.map(link => (
                    <a key={link.id} href={link.href} className={` ${style.banner_link} `} onClick={link.actionClick}>
                        {link.label}
                    </a>
                ))}
            </div>

            
        </div>
    </section>
  );
};


export default BannerSection;