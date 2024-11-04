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
								<FontAwesomeIcon
									icon={faReact}
									// size="l"
									style={{ color: "#80806b", fontSize: "64" }}
								/>
								React
							</li>
							<li>
								<FontAwesomeIcon
									icon={faJs}
									size="lg"
									style={{ color: "#80806b" }}
								/>
								JavaScript
							</li>
							<li>
								<FontAwesomeIcon
									icon={faCss3Alt}
									size="lg"
									style={{ color: "#80806b" }}
								/>
								CSS
							</li>
							<li>
								<FontAwesomeIcon
									icon={faHtml5}
									size="lg"
									style={{ color: "#80806b" }}
								/>
								HTML
							</li>
							<li>
								<FontAwesomeIcon
									icon={faFigma}
									size="lg"
									style={{ color: "#80806b" }}
								/>
								Figma
							</li>
							<li>
								<FontAwesomeIcon
									icon={faGitAlt}
									size="lg"
									style={{ color: "#80806b" }}
								/>
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
