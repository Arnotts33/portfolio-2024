import styles from "./Hero.module.css";

function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__title}>
				<h1 data-aos="fade-up">Arnaud Lahaut</h1>
				<h1 className={styles.outlined} data-aos="fade-up">
					Creative
				</h1>
				<h1 data-aos="fade-up">Frontend</h1>
				<h1 className={styles.outlined} data-aos="fade-up">
					Developer
				</h1>
			</div>
			<img
				className={styles.hero__image}
				src="../src/assets/images/beach-bg.jpg"
				alt="beach background"
				width="600px"
				data-aos="zoom-out"
			/>
		</section>
	);
}

export default Hero;
