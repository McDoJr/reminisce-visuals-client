import Navbar from "../../components/navbar.jsx";
import HeroSection from "../../components/hero-section.jsx";
import Footer from "../../components/footer.jsx";
import {useEffect} from "react";
import {scrollToTop, setPageTitle} from "../../utils/utils.js";
import PricingSection from "./pricing-section.jsx";


const PricingPage = () => {

    useEffect(() => {
        setPageTitle("Book Us");
        scrollToTop();
    }, []);

    const contents = (
        <>
            <h1 style={{fontSize: '35px'}}>Pricing & Packages</h1>
            <p style={{fontSize: '16px'}}>Welcome to Reminisce Visuals, where we capture your most
                <br/>cherished moments in stunning photographs. Our passion for
                <br/>photography, combined with a keen eye for detail and a
                <br/>commitment to excellence, makes us your ideal choice for
                <br/>wedding, modeling photoshoots, and birthday photoshoots.</p>
        </>
    );

    return (
        <>
            <Navbar currentPage="pricing"/>
            <HeroSection backgroundImage={require("../../images/pricing_bg.png")} contents={contents} align="start" />
            <PricingSection />
            <Footer currentPage="pricing"/>
        </>
    )
}

export default PricingPage;