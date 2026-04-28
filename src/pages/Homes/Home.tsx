import React from "react"
// import Header from "../../sections/Header";
// import Footer from "../../sections/Footer";
import BannerSection from "../../sections/BannerSection";





const Home:React.FC = () => {
    return (
        <div className="home-page">
            {/* <h1>Welcome to My Portfolio</h1>
            <p>Discover my projects, engineering experience, and data insights.</p>
            <Header/> */}
            <BannerSection/>
            {/* <Footer/> */}
        </div>
    );
}


export default Home;