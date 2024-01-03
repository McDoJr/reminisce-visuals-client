import styles from "./gcash-code.module.css";
import Navbar from "../../components/navbar.jsx";
import Section from "../../components/section.jsx";
import Footer from "../../components/footer.jsx";
import {useEffect} from "react";
import {scrollToTop} from "../../utils/utils.js";
import {useNavigate} from "react-router-dom";

const GcashCode = () => {

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
                    <span>Verify via text</span>
                    <span>Please enter the 6-digit authentication</span>
                    <span>code sent to 0948****661</span>
                </div>
                <form className={styles.form}>
                    <div className={styles.field}>
                        <input type="number" placeholder="0" maxLength="1"/>
                        <input type="number" placeholder="0" maxLength="1"/>
                        <input type="number" placeholder="0" maxLength="1"/>
                        <input type="number" placeholder="0" maxLength="1"/>
                        <input type="number" placeholder="0" maxLength="1"/>
                        <input type="number" placeholder="0" maxLength="1"/>
                        <span>Resend Code</span>
                    </div>
                    <button onClick={() => navigate("/successfull-booking")}>NEXT</button>
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

export default GcashCode;