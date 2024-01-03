import styles from "./book-section.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const BookSection = () => {

    const navigate = useNavigate();

    return (
        <section className={styles.container}>
            <h1>MAKE SURE TO FIND US</h1>
            <div className={styles.box}>
                <div className={styles.details}>
                    <div className={styles.row}>
                        <FontAwesomeIcon icon={faLocationDot} className={styles.icon}/>
                        <span>Location</span>
                        <span>8605 Cabadbaran City, Philippines</span>
                    </div>
                    <div className={styles.row}>
                        <FontAwesomeIcon icon={faPhone} className={styles.icon}/>
                        <span>Phone</span>
                        <span>+(63) 948 623 9661 (OR) +(63) 991 880 6901</span>
                    </div>
                    <div className={styles.row}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                        <span>Support</span>
                        <span>Reminisce Visuals</span>
                    </div>
                </div>
                <form className={styles.form}>
                    <h2>KEEP IN TOUCH<br/>WITH US</h2>
                    <span>We Are Always Here To Help Your Business</span>
                    <div className={styles.row}>
                        <input type="text" placeholder="Your Name *" name="name"/>
                        <input type="text" placeholder="Email Address *" name="email"/>
                        <input type="number" placeholder="Phone Number *" name="number"/>
                        <input type="text" placeholder="Subject *" name="subject"/>
                        <textarea name="message" placeholder="Your Message *"></textarea>
                    </div>
                    <button onClick={() => navigate("/gcash")}>SEND MESSAGE</button>
                </form>
            </div>
        </section>
    )
}

export default BookSection;