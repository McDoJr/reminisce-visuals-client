import styles from "./service-card.module.css";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";

const ServiceCard = ({heading, photos, handleClick}) => {

    return (
        <section className={styles.container}>
            <button className={styles.back} onClick={() => handleClick(null)}><FontAwesomeIcon icon={faChevronLeft}/></button>
            <h1>{heading}</h1>
            <div>
                {photos.map((photo, index) => <img src={photo} key={index}/>)}
            </div>
            <button onClick={() => handleClick(null)}>Go Back</button>
        </section>
    )
}

export default ServiceCard;