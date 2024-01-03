import styles from "./pop-up.module.css";

const PopUp = ({backgroundImage, elements, handleClose}) => {
    return (
        <section className={styles.container} onClick={handleClose}>
            <div className={styles.box}>
                <div className={styles.image} style={{backgroundImage: `url(${backgroundImage})`}}></div>
                <div className={styles.details}>
                    {elements}
                </div>
            </div>
        </section>
    )
}

export default PopUp;