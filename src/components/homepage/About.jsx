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
					<h2>des fourneaux au digital.</h2>

					<p>
						Après une carrière de 15 ans en tant que chef de cuisine
						et gérant de mes restaurants, j&apos;ai choisi de me
						réinventer en explorant ma passion pour le web et les
						outils numériques. Une reconversion qui me permet
						d&apos;allier rigueur, créativité et souci du détail
						pour offrir à mes clients des solutions web sur mesure.
					</p>
					<p>
						Fier de mes origines et de mon parcours, je profite de
						ma double expertise pour accompagner les professionnels
						de la restauration, du vin et des boissons dans
						l&apos;élaboration de produits digitaux, tout en étant
						ouvert à d&apos;autres secteurs. Mon objectif est de
						traduire vos besoins en une vitrine digitale unique et
						percutante.
					</p>
					<p>
						Lorsque je ne suis pas immergé dans le développement
						web, vous me trouverez probablement à cuisiner pour mes
						proches, à jouer de la guitare ou bien encore à bricoler
						toutes sortes de choses.
					</p>
					<button className={styles.about__btn} onClick={toggleAbout}>
						Retour
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
