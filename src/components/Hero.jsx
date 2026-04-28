import styles from "./Hero.module.css";

function Hero() {
    return (
        <section className={styles.hero}>
            <img className={styles.jumbotron} src="/jumbotron.jpg" />
        </section>
    )
};

export default Hero;