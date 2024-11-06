import Project from "../ui/Project";
import styles from "./Projects.module.css";
import projectImg from "/src/assets/images/website-bg1.jpg";

function Projects() {
	return (
		<section className={styles.projects__section}>
			<div className={styles.projects__container}>
				<div className={styles.title}>
					<h1>Selected Work</h1>
				</div>
				<div className={styles.projects}>
					<div className={styles.left}>
						<Project
							img={projectImg}
							name="FurreverFriends"
							year="2024"
							tech="Ruby On Rails • CSS • JavaScript"
							description="A social media platform for pet owners to connect with other pet owners. This is a long description to test the layout of the project component."
						/>
					</div>
					<div className={styles.right}>
						<Project
							img={projectImg}
							name="Massa"
							year="2024"
							tech="React • CSS • JavaScript"
							description="A restaurant website for a fictional restaurant. This is a long description to test the layout of the project component."
						/>
					</div>
					<div className={styles.left}>
						<Project
							img={projectImg}
							name="Miles"
							year="2024"
							tech="React • CSS • JavaScript"
							description="A restaurant website for a fictional restaurant. This is a long description to test the layout of the project component."
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
