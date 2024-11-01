import styles from "./Role.module.css";

function Role() {
	return (
		<section className={styles.role} id="about">
			<div className={styles.role__flex_container}>
				<div className={styles.role__text}>
					<p>
						Once a <span>chef</span>, I am now a
					</p>
					<div className={styles.role__title}>
						<h1>Junior Frontend Developer</h1>
						<p>based in Bordeaux, France.</p>
					</div>
					<p>
						I love creating and crafting impactful digital
						experiences that engage and resonate with people through
						creative design and development
					</p>
					<button className={styles.role__btn}>My Story</button>
				</div>
				<div className={styles.role__image_container}>
					<img
						className={styles.role__image}
						src="../src/assets/images/arnaud-cook.webp"
						alt="arnaud presenting a dish"
					/>
				</div>
			</div>
		</section>
	);
}

export default Role;
