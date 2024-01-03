import styles from "./offer-section.module.css";

const OfferSection = () => {
    return (
        <section className={styles.container}>
            <h1>GET THE BEST OFFER FROM US FOR YOU</h1>
            <div className={styles.logo}>
                <span>REMINISCE</span>
                <img src={require("../../images/logo.png")} alt="logo.png"/>
                <span>VISUALS</span>
            </div>
        </section>
    )
}

export default OfferSection;