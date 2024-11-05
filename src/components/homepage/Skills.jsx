import styles from "./Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faJs,
	faCss3Alt,
	faHtml5,
	faFigma,
	faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

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
							<li>
								<div className={styles.icon__container}>
									<FontAwesomeIcon
										icon={faReact}
										className={styles.icon}
									/>
								</div>
								React
							</li>
							<li>
								<div className={styles.icon__container}>
									<FontAwesomeIcon
										icon={faJs}
										size="lg"
										style={{ color: "#80806b" }}
									/>
								</div>
								JavaScript
							</li>
							<li>
								<div className={styles.icon__container}>
									<FontAwesomeIcon
										icon={faCss3Alt}
										size="lg"
										style={{ color: "#80806b" }}
									/>
								</div>
								CSS
							</li>
							<li>
								<div className={styles.icon__container}>
									<FontAwesomeIcon
										icon={faHtml5}
										size="lg"
										style={{ color: "#80806b" }}
									/>
								</div>
								HTML
							</li>
							<li>
								<div className={styles.icon__container}>
									<FontAwesomeIcon
										icon={faFigma}
										size="lg"
										style={{ color: "#80806b" }}
									/>
								</div>
								Figma
							</li>
							<li>
								<div className={styles.icon__container}>
									<FontAwesomeIcon
										icon={faGitAlt}
										size="lg"
										style={{ color: "#80806b" }}
									/>
								</div>
								Git
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
