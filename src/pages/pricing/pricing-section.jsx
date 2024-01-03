import styles from "./pricing-section.module.css";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";

const PricingSection = () => {

    const navigate = useNavigate();

    const pricings = [
        {
            title: "Wedding",
            details: ["Digital online gallery", "Unlimited high-quality images"],
            info: "(Price does not include travel)",
            price: "STARTING AT ₱35,000.00",
            background: require("../../images/pricing_wedding.png")
        },
        {
            title: "Modeling",
            details: ["Digital online gallery", "Unlimited high-quality images"],
            info: "(Price does not include travel)",
            price: "STARTING AT ₱20,000.00",
            background: require("../../images/pricing_modeling.png")
        },
        {
            title: "Birthday Shoot",
            details: ["Digital online gallery", "Unlimited high-quality images"],
            info: "(Price does not include travel)",
            price: "STARTING AT ₱25,000.00",
            background: require("../../images/pricing_birthday.png")
        }
    ];

    return (
        <section className={styles.container}>
            <h1>Pricing and Packages</h1>
            {pricings.map(({title, details, info, price, background}, index) => {
                return (
                    <div className={styles.box} key={index}>
                        <img src={background} alt={`${title}.png`} style={{order: (index % 2 === 0 ? 1 : 2)}}/>
                        <div className={styles.details}  style={{order: (index % 2 === 0 ? 2 : 1)}}>
                            <h2>{title}</h2>
                            <h3>{details[0]}<br/>{details[1]}</h3>
                            <span>{info}</span>
                            <div></div>
                            <span>{price}</span>
                        </div>
                    </div>
                )
            })}
            <i></i>
            <button onClick={() => navigate("/book")}>BOOK A SESSION</button>
        </section>
    )
}

export default PricingSection;