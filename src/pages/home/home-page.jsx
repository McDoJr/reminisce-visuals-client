import Navbar from "../../components/navbar.jsx";
import AboutSection from "./about-section.jsx";
import {useEffect} from "react";
import Footer from "../../components/footer.jsx";
import HeroSection from "../../components/hero-section.jsx";
import {scrollToTop, setPageTitle} from "../../utils/utils.js";

const HomePage = () => {

    useEffect(() => {
        setPageTitle("Home");
        scrollToTop();
    }, []);

    const contents = (
        <>
            <h1>ELEGANT</h1>
            <p>Freezing Time, Framing Life: Unveil Beauty in Every Snapshot.</p>
        </>
    );

    return (
        <>
            <Navbar currentPage="home"/>
            <HeroSection backgroundImage={require("../../images/home_bg.png")} contents={contents} align="center"/>
            <AboutSection />
            <Footer currentPage="home"/>
        </>
    )
}

export default HomePage;