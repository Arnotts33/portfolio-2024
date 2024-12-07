import PropTypes from "prop-types";
import styles from "./About.module.css";
import arnaud from "/assets/images/arnaud-cook.webp";

function About({ toggleAbout }) {
	return (
		<section className={styles.about__section}>
			<div className={styles.about__flex_container}>
				<div className={styles.about__image_container}>
					<img
						className={styles.about__image}
						src={arnaud}
						loading="lazy"
						alt="arnaud presenting a dish"
					/>
				</div>
				<div className={styles.about__text_container}>
					<h2>from cooking to coding.</h2>

					<p>
						Former chef and restaurant owner, I decided to embark on
						a new flavorful professional chapter. Passionate about
						tech, design and building things with my hands, coding
						and frontend development just seemed the right path to
						dive in. My goal is to convert designs into
						pixel-perfect web pages and deliver beautiful web
						experiences, while being thoughtful of their
						environmental impact.
					</p>
					<p>
						My professional chef background gave me strong soft
						skills (communication, teamwork, creativity... ).
					</p>
					<p>
						When I am not coding, I still enjoy cooking as well as
						photography, playing guitar, gaming and building things
						(digital or not!).
					</p>
					<button className={styles.about__btn} onClick={toggleAbout}>
						Back
					</button>
				</div>
			</div>
		</section>
	);
}

About.propTypes = {
	toggleAbout: PropTypes.func.isRequired,
};

export default About;
