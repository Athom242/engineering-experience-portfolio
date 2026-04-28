import React from "react"
// import Header from "../../sections/Header";
// import Footer from "../../sections/Footer";
import BannerSection from "../../sections/BannerSection";
import VisualScrollBarProgress from "../../sections/VisualisationScroll";
import AboutSection from "../../sections/AboutSection";
import ProjectsSection from "../../sections/ProjectsSection";
import SkillSection from "../../sections/SkillsSection";
import ExperienceSection from "../../sections/ExperienceSection";
import TestimonialsSection from "../../sections/TestimonialsSection";
import ContactSection from "../../sections/ContactSection";
import LiveDashboardSection from "../../sections/LiveDashboardSection";




const Home:React.FC = () => {
    return (
        <div className="home-page">
            {/* <h1>Welcome to My Portfolio</h1>
            <p>Discover my projects, engineering experience, and data insights.</p>
            <Header/> */}
            <BannerSection/>
            <VisualScrollBarProgress/> {/* //ceci est un composant de notre page il est à des fin decoratifs sans plus  */}
            <AboutSection />
            <ProjectsSection />
            <LiveDashboardSection />
            <SkillSection />
            <ExperienceSection />
            <TestimonialsSection />
            <ContactSection />
            {/* <Footer/> */}
        </div>
    );
}


export default Home;