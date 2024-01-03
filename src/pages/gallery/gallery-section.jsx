import styles from "./gallery-section.module.css";
import PhotoCard from "./photo-card.jsx";

const GallerySection = () => {

    const cards = [
        {title: <span>Weddings</span>, background: require("../../images/weddings.png")},
        {title: <span>Modeling</span>, background: require("../../images/modeling.png")},
        {title: <><span>Birthday</span><span>Shoot</span></>, background: require("../../images/birthday_shoot.png")}
    ];

    return (
        <section className={styles.container}>
            <h1>Project of our gallery</h1>
            <div className={styles.box}>
                {cards.map(({title, background}, index) => <PhotoCard title={title} backgroundImage={background} key={index} index={index}/>)}
            </div>
        </section>
    )
}

export default GallerySection;