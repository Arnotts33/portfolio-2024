import styles from "./Hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSquareInstagram,
	faLinkedin,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import beach from "../../assets/images/beach-bg.jpg";

function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__title}>
				{/* <h1 data-aos="fade-up">Arnaud Lahaut</h1> */}
				<h1>Arnaud Lahaut</h1>
				{/* <h1 className={styles.outlined} data-aos="fade-up">
					Creative
				</h1> */}
				<h1 className={styles.outlined}>Creative</h1>
				{/* <h1 data-aos="fade-up">Frontend</h1> */}
				<h1>Frontend</h1>
				{/* <h1 className={styles.outlined} data-aos="fade-up">
					Developer
				</h1> */}
				<h1 className={styles.outlined}>Developer</h1>
			</div>
			{/* <img
				className={styles.hero__image}
				src={beach}
				alt="beach background"
				data-aos="zoom-out"
			/> */}
			<img
				className={styles.hero__image}
				src={beach}
				alt="beach background"
			/>
			<div className={styles.hero__socials}>
				<a
					href="https://github.com/Arnotts33"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faGithub} size="xl" />
				</a>
				<a
					href="https://www.linkedin.com/in/arnaudlht/"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faLinkedin} size="xl" />
				</a>
				<a
					href="https://www.instagram.com/arnaudlahaut/"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faSquareInstagram} size="xl" />
				</a>
			</div>
			<div className={styles.hero__scroll_indicator}>
				<div className={styles.mouse}></div>
			</div>
		</section>
	);
}

export default Hero;
