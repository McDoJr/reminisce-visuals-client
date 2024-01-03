import styles from "./hero-section.module.css";

const HeroSection = ({backgroundImage, contents, align}) => {
    return (
        <section className={styles.container} style={{backgroundImage: `url(${backgroundImage})`, alignItems: align}}>
            <div className={styles.box}>
                {contents}
            </div>
        </section>
    )
}

export default HeroSection;