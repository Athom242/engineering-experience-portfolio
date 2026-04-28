import React from "react";
import styles from "../styles/sections/AboutSection.module.scss"



const AboutProfile:React.FC=()=>{
    return (
        <div className={`${styles.aboutProfile}`}>
            
        </div>
    )
}


const AboutSection:React.FC=()=>{
    return (
        <div className={`${styles.aboutSection}`}>
            <div className={`${styles.aboutContainer}`}>
                <AboutProfile/>
            </div>
        </div>
    )
}


export default AboutSection;