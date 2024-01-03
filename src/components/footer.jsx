import styles from "./footer.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {scrollToTop} from "../utils/utils.js";

const Footer = ({currentPage}) => {

    const navigate = useNavigate();

    const handleClick = (name, url) => {
        if(name === currentPage) {
            scrollToTop();
        }else{
            navigate(url);
        }
    }

    return (
        <section className={styles.container}>
            <div className={styles.left}>
                <div>
                    <h1>REMINISCE</h1>
                    <span></span>
                    <h1>VISUALS</h1>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem <br/>ipsum dolor sit amet, consectetur adipiscing elit, sedLorem <br/>ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                <h3>2023 Reminisce Visuals. All rights reserved.</h3>
            </div>
            <div className={styles.right}>
                <div className={styles.row}>
                    <a onClick={() => handleClick("home", "/home")}>Home</a>
                    <a onClick={() => handleClick("about", "/about")}>About</a>
                    <a onClick={() => handleClick("services", "/services")}>Services</a>
                    <a onClick={() => handleClick("gallery", "/gallery")}>Gallery</a>
                    <a onClick={() => handleClick("book", "/book")}>Book Us</a>
                    <a onClick={() => handleClick("pricing", "/pricing")}>Pricing</a>
                </div>
                <div className={styles.row}>
                    <span>Fb</span>
                    <span>Ig</span>
                </div>
                <div className={styles.row}>
                    <div>
                        <FontAwesomeIcon icon={faPhone} className={styles.icon}/>
                        <span>+639 948-623-9661</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                        <span>reminiscevisuals@gmail.com</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;