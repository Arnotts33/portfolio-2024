import styles from "./Skills.module.css";

function Skills() {
	return (
		<section className={styles.skills__section}>
			<div className={styles.skills__container}>
				<h1>Skills</h1>
				<div className={styles.skills__box}>
					<div className={styles.skills__box_text}>
						<h2>my digital spice rack.</h2>
						<p>
							This is my actual tech stack, the list of the main
							ingredients I use on projects. I keep on learning
							everyday and make sure to have an active technology
							watch to be up-to-date in this fast moving world of
							tech.
						</p>
					</div>
					<div className={styles.skills__box_list}>
						<ul>
							<li>React</li>
							<li>JavaScript</li>
							<li>CSS</li>
							<li>HTML</li>
							<li>Figma</li>
							<li>Git</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
