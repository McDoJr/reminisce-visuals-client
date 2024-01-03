import styles from "./story-section.module.css";

const StorySection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.image}></div>
            <div className={styles.details}>
                <h1>THE STORY</h1>
                <h1>ABOUT US</h1>
                <p>Reminisce Visuals was founded by a group of
                    <br/>photography enthusiasts who shared a common
                    <br/>vision: to tell stories through the lens of a camera.
                    <br/>Our journey began with a deep love for visual
                    <br/>storytelling, and over the years, we've had the
                    <br/>privilege of capturing countless smiles, tears, and
                    <br/>unforgettable moments.</p>
            </div>
        </section>
    )
}

export default StorySection;