import Navbar from "../../components/navbar.jsx";
import Footer from "../../components/footer.jsx";
import HeroSection from "../../components/hero-section.jsx";
import GallerySection from "./gallery-section.jsx";
import {useEffect} from "react";
import {scrollToTop, setPageTitle} from "../../utils/utils.js";

const GalleryPage = () => {

    useEffect(() => {
        setPageTitle("Gallery");
        scrollToTop();
    }, []);

    const contents = (
        <>
            <h1 style={{fontSize: '35px'}}>Gallery</h1>
            <p style={{fontSize: '16px'}}>Welcome to Reminisce Visuals, where we capture your most
                <br/>cherished moments in stunning photographs. Our passion for
                <br/>photography, combined with a keen eye for detail and a
                <br/>commitment to excellence, makes us your ideal choice for
                <br/>wedding, modeling photoshoots, and birthday photoshoots.</p>
        </>
    );

    return (
        <>
            <Navbar currentPage="gallery"/>
            <HeroSection backgroundImage={require("../../images/gallery_bg.png")} contents={contents} align="end"/>
            <GallerySection />
            <Footer currentPage="gallery"/>
        </>
    )
}

export default GalleryPage;