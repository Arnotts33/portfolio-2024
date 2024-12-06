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
					title.current,
					{
						duration: 2,
						opacity: 0,
						y: 50,
						ease: "power4.inOut",
					},
					"-=1.6"
				);
			},

			// onLeaveBack: () => {
			// 	tl.to(section.current, {
			// 		duration: 1.3,
			// 		backgroundColor: "#f8f8f6",
			// 		ease: "power4.Out",
			// 	});
			// },
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
					<div className={styles.right}>
						<Project
							link="https://kedem.vercel.app/"
							img={kedemImg}
							name="Kedem"
							year="2024"
							tech="React • CSS • JavaScript"
							description="Design and development of the website for Kedem, a Mediterranean-Oriental restaurant. The goal was to create a modern and elegant site that reflects the restaurant’s warm and authentic identity while offering a seamless user experience."
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
