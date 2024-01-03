import styles from "./gcash.module.css";
import Navbar from "../../components/navbar.jsx";
import Section from "../../components/section.jsx";
import Footer from "../../components/footer.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {useEffect} from "react";
import {scrollToTop} from "../../utils/utils.js";
import {useNavigate} from "react-router-dom";

const Gcash = () => {

    const navigate = useNavigate();

    useEffect(() => {
        scrollToTop();
    }, []);

    const contents = (
        <>
            <div className={styles.box}>
                <span>PAYMENT METHOD</span>
                <div onClick={() => navigate("/gcash-number")}>
                    <img src={require("../../images/gcash.png")} alt="logop.ng"/>
                    <FontAwesomeIcon icon={faArrowUp} className={styles.icon}/>
                </div>
            </div>
        </>
    )

    return (
        <>
            <Navbar currentPage="" />
            <Section contents={contents}/>
            <Footer currentPage=""/>
        </>
    )
}

export default Gcash;