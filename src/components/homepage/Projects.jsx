import Project from "../ui/Project";
import styles from "./Projects.module.css";
import massaImg from "/assets/images/massa.webp";

function Projects() {
	return (
		<section className={styles.projects__section} id="projects">
			<div className={styles.projects__container}>
				<div className={styles.title}>
					<h1>Selected Work</h1>
				</div>
				<div className={styles.projects}>
					<div className={styles.left}>
						<Project
							link="https://massa-omega.vercel.app/"
							img={massaImg}
							name="Massa"
							year="2024"
							tech="React • CSS • JavaScript"
							description="A restaurant website for one of my former restaurants. For the design, I took inspiration from another website. I tried to implement what I have learned so far in React, such as hooks and state management."
						/>
					</div>
					{/* <div className={styles.right}>
						<Project
							link="#"
							img={projectImg}
							name="FurreverFriends - En cours de développement"
							year="2024"
							tech="Ruby On Rails • CSS • JavaScript"
							description="A social media platform for pet owners to connect with other pet owners. This is a long description to test the layout of the project component."
						/>
					</div>
					<div className={styles.left}>
						<Project
							link="#"
							img={projectImg}
							name="Miles - En cours de développement"
							year="2024"
							tech="React • CSS • JavaScript"
							description="A restaurant website for a fictional restaurant. This is a long description to test the layout of the project component."
						/>
					</div> */}
				</div>
			</div>
		</section>
	);
}

export default Projects;
