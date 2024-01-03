import styles from "./services-section.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import ServiceCard from "../../components/service-card.jsx";
import Navbar from "../../components/navbar.jsx";
import {useNavigate} from "react-router-dom";

const ServicesSection = ({services, handleClick}) => {

    const navigate = useNavigate();

    return (
        <section className={styles.container}>
            <div className={styles.details}>
                <h1>Why you have to <br/>Choose us</h1>
                <p>We can make the photography work more presentable and memorable
                    <br/>because we are a professional and experienced team.</p>
                <button onClick={() => navigate("/gallery")}>Have a look</button>
                <h2>OUR SERVICE</h2>
                <div className={styles.group}>
                    <div className={styles.link} onClick={() => handleClick(services[0])}>
                        <span>01</span>
                        <span>Weddings</span>
                        <FontAwesomeIcon icon={faArrowUp} className={styles.icon}/>
                    </div>
                    <div className={styles.link} onClick={() => handleClick(services[1])}>
                        <span>02</span>
                        <span>Modeling</span>
                        <FontAwesomeIcon icon={faArrowUp} className={styles.icon}/>
                    </div>
                    <div className={styles.link} onClick={() => handleClick(services[2])}>
                        <span>03</span>
                        <span>Birthday Shoot</span>
                        <FontAwesomeIcon icon={faArrowUp} className={styles.icon}/>
                    </div>
                </div>
            </div>
            <div className={styles.image}></div>
        </section>
    )
}

export default ServicesSection;