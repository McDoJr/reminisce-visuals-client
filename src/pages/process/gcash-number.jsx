import styles from "./gcash-number.module.css";
import Navbar from "../../components/navbar.jsx";
import Section from "../../components/section.jsx";
import Footer from "../../components/footer.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect} from "react";
import {scrollToTop} from "../../utils/utils.js";
import {useNavigate} from "react-router-dom";

const GcashNumber = () => {

    const navigate = useNavigate();

    useEffect(() => {
        scrollToTop();
    }, []);

    const contents = (
        <>
            <div className={styles.box}>
                <div className={styles.gcash}>
                    <img src={require("../../images/gcash.png")} alt="logop.ng"/>
                </div>
                <div className={styles.row}>
                    <span>Amount Due</span>
                    <span>PHP 10,000.00</span>
                </div>
                <form className={styles.form}>
                    <div className={styles.field}>
                        <label>Mobile Number</label>
                        <input type="number" placeholder="+63 948 623 9661"/>
                    </div>
                    <button onClick={() => navigate("/gcash-code")}>NEXT</button>
                </form>
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

export default GcashNumber;