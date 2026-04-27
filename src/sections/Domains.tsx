import React from 'react';

import style from './../styles/Domains.module.css';


const DOMAIN_DATA = [
    {
        id: 1,
        title: "Engineering",
        description: "Explore my engineering experience, including projects, skills, and achievements in various engineering domains.",
        link: "/engineering"
    },
    {
        id: 2,
        title: "Data Science",
        description: "Discover my data science expertise, including projects, skills, and insights in data analysis, machine learning, and more.",
        link: "/data-science"
    },
    {
        id: 3,
        title: "Software Development",
        description: "Learn about my software development experience, including projects, programming languages, and software engineering practices.",
        link: "/software-development",
    },
    {
        id: 4,
        title: "Project Management",
        description: "Find out about my project management skills, including methodologies, tools, and successful projects I've managed.",
        link: "/project-management",
    },
    {
        id: 5,
        title: "Research and Publications",
        description: "Explore my research contributions and publications in engineering, data science, and related fields.",
        link: "/research-publications",
    },
        {
        id: 6,
        title: "numeric art and creativity",
        description: "Discover my experience and projects in numeric art, creativity, and the intersection of technology and art.",
        link: "/numeric-art-creativity",
    },
    {   
        id: 7,
        title: "Other Domains",
        description: "Discover my experience and skills in other domains, including leadership, communication, and more.",
        link: "/other-domains",
    },
];

const Domains:React.FC = () => {
  return (
    <div className={style.domainsSection}>
        <div className={style.container}>
            <div className={style.domainSectionHeader}>
                <h2>Explore My Domains of Expertise</h2>
                <p>Discover my skills and experience across various domains, including engineering, data science, and more.</p>
            </div>


            <div className={style.domainSectionBody}>
                {DOMAIN_DATA.map(domain => (
                    <div key={domain.id} className={style.domainCard}>
                        <h3>{domain.title}</h3>
                        <p>{domain.description}</p>
                        <a href={domain.link} className={style.domainLink}>Learn More</a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}


export default Domains;