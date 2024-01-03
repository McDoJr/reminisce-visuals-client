import Navbar from "../../components/navbar.jsx";
import Footer from "../../components/footer.jsx";
import HeroSection from "../../components/hero-section.jsx";
import ServicesSection from "./services-section.jsx";
import {useEffect, useState} from "react";
import ServiceCard from "../../components/service-card.jsx";
import {scrollToTop, setPageTitle} from "../../utils/utils.js";
import {useLocation} from "react-router-dom";

const ServicesPage = () => {

    const location = useLocation();

    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        setPageTitle("Services");
        scrollToTop();
        if(location.state) setSelectedService(services[location.state.index]);
    }, []);

    const services = [
        {heading: "weddings", photos:
                [
                    require("../../images/weddings1.png"),
                    require("../../images/weddings2.png"),
                    require("../../images/weddings3.png"),
                    require("../../images/weddings4.png"),
                    require("../../images/weddings5.png"),
                    require("../../images/weddings6.png"),
                    require("../../images/weddings7.png"),
                    require("../../images/weddings8.png")
                ]
        },
        {heading: "modeling", photos:
                [
                    require("../../images/modeling1.png"),
                    require("../../images/modeling2.png"),
                    require("../../images/modeling3.png"),
                    require("../../images/modeling4.png"),
                    require("../../images/modeling5.png")
                ]
        },
        {heading: "brithday photoshoot", photos:
                [
                    require("../../images/birthday1.png"),
                    require("../../images/birthday2.png"),
                    require("../../images/birthday3.png"),
                    require("../../images/birthday4.png"),
                    require("../../images/birthday5.png"),
                ]
        }
    ];

    const contents = (
        <>
            <h1 style={{fontSize: '35px'}}>our Services</h1>
            <p style={{fontSize: '16px'}}>Welcome to Reminisce Visuals, where we capture your most
                <br/>cherished moments in stunning photographs. Our passion for
                <br/>photography, combined with a keen eye for detail and a
                <br/>commitment to excellence, makes us your ideal choice for
                <br/>wedding, modeling photoshoots, and birthday photoshoots.</p>
        </>
    );

    const handleClick = (value) => {
        scrollToTop();
        setSelectedService(value)
    }

    return (
        <>
            <Navbar currentPage="services"/>
            {selectedService ?
                <ServiceCard heading={selectedService.heading} photos={selectedService.photos} handleClick={handleClick}/> :
                <>
                    <HeroSection backgroundImage={require("../../images/services_bg.png")} contents={contents} align="start"/>
                    <ServicesSection services={services} handleClick={handleClick}/>
                </>
            }
            <Footer currentPage="services"/>
        </>
    )
}

export default ServicesPage;