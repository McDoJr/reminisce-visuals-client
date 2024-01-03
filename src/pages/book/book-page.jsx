import Navbar from "../../components/navbar.jsx";
import HeroSection from "../../components/hero-section.jsx";
import Footer from "../../components/footer.jsx";
import {useEffect} from "react";
import {scrollTo, scrollToTop, setPageTitle} from "../../utils/utils.js";
import BookSection from "./book-section.jsx";
import OfferSection from "./offer-section.jsx";


const BookPage = () => {

    useEffect(() => {
        setPageTitle("Book Us");
        scrollToTop();
    }, []);

    const contents = (
        <>
            <h1 style={{fontSize: '35px'}}>Book Us</h1>
            <p style={{fontSize: '16px'}}>Welcome to Reminisce Visuals, where we capture your most
                <br/>cherished moments in stunning photographs. Our passion for
                <br/>photography, combined with a keen eye for detail and a
                <br/>commitment to excellence, makes us your ideal choice for
                <br/>wedding, modeling photoshoots, and birthday photoshoots.</p>
        </>
    );

    return (
        <>
            <Navbar currentPage="book"/>
            <HeroSection backgroundImage={require("../../images/book_bg.png")} contents={contents} align="end" />
            <BookSection/>
            <OfferSection/>
            <Footer currentPage="book"/>
        </>
    )
}

export default BookPage;