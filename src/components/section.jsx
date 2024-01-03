import styles from "./section.module.css";

const Section = ({contents}) => {
    return (
        <section className={styles.container}>
            {contents}
        </section>
    )
}

export default Section;