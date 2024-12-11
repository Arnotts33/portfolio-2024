import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project from "../ui/Project";
import styles from "./Projects.module.css";
import massaImg from "/assets/images/massa.webp";
import kedemImg from "/assets/images/kedem.webp";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

function Projects() {
	const section = useRef(null);
	const container = useRef(null);
	const title = useRef(null);

	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		const tl = gsap.timeline();

		ScrollTrigger.create({
			trigger: container.current,
			start: "top bottom",
			end: "bottom 0%",

			onEnter: () => {
				tl.to(section.current, {
					duration: 1.3,
					backgroundColor: "#0e0e0c",
					ease: "power4.Out",
				}).from(
					container.current,
					{
						duration: 2,
						opacity: 0,
						y: 200,
						ease: "power4.inOut",
					},
					"-=1.6"
				);
			},
		});
	}, []);

	return (
		<section
			className={styles.projects__section}
			id="projects"
			ref={section}
		>
			<div className={styles.projects__container} ref={container}>
				<div className={styles.title} ref={title}>
					<h1>Projets</h1>
				</div>
				<div className={styles.projects}>
					<div className={styles.left}>
						<Project
							link="https://massa-omega.vercel.app/"
							img={massaImg}
							name="Massa"
							year="2024"
							tech="React • CSS"
							description="Pour ce projet, je me suis donné comme mission la refonte totale du site web de mon ancien restaurant, Massa. Mon objectif était de concevoir un site moderne, intuitif et fluide aligné avec l'identité méditerranéenne orientale du restaurant."
						/>
					</div>
					<div className={styles.right}>
						<Project
							link="https://kedem.vercel.app/"
							img={kedemImg}
							name="Kedem"
							year="2024"
							tech="React • CSS • GSAP • Figma"
							description="Création du site vitrine pour Kedem, un restaurant méditerranéen oriental, afin de refléter son identité unique et renforcer sa présence en ligne. Le but était de concevoir un site web moderne, à la navigation fluide."
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
