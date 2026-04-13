import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project from "../ui/Project";
import styles from "./Projects.module.css";
import kedemImg from "/assets/images/projet-kedem.webp";
import populaireImg from "/assets/images/projet-populaire.webp";
import michelsImg from "/assets/images/projet-michels.webp";
import delidomImg from "/assets/images/projet-delidom.webp";
import keywestImg from "/assets/images/projet-keywest.webp";
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
					"-=1.6",
				);
			},
		});
	}, []);

	return (
		<section className={styles.projects__section} id="projects" ref={section}>
			<div className={styles.projects__container} ref={container}>
				<div className={styles.title} ref={title}>
					<h1>Projets</h1>
				</div>
				<div className={styles.projects}>
					<div className={styles.left}>
						<Project
							link="https://kedem.fr/"
							img={kedemImg}
							name="Kedem"
							year="2024"
							mission="Refonte - Design et développement du site web"
							tech="React • CSS • GSAP"
							description="Création du site vitrine pour Kedem, un restaurant méditerranéen oriental, afin de refléter son identité unique et renforcer sa présence en ligne. Le but était de concevoir un site web moderne, à la navigation fluide."
						/>
					</div>
					<div className={styles.right}>
						<Project
							link="https://populairebordeaux.fr/"
							img={populaireImg}
							name="Populaire Dwitcherie"
							year="2025"
							mission="Design et développement du site web"
							tech="Next.js • CSS • GSAP • Framer Motion"
							description="Pour ce projet, j’ai accompagné Dorian dans la création du site web de Populaire, son restaurant ouvert à Bordeaux Saint-Michel. Mon objectif : concevoir un site rapide, élégant et immersif, à l’image du lieu et de son concept malin — sandwicherie le midi, bar à manger et cave à vins natures le soir."
						/>
					</div>
					<div className={styles.left}>
						<Project
							link="https://www.bistrotmichels.com/"
							img={michelsImg}
							name="Le Michel's"
							year="2025"
							mission="Design et développement du site web"
							tech="Astro • CSS • GSAP"
							description="Pour ce projet, j'ai accompagné Mimi et Manolo dans la création du site web de leur bistrot, ouvert depuis 2007 au cœur du quartier Saint-Pierre à Bordeaux. Mon objectif : concevoir un site moderne et chaleureux, fidèle à l'âme du lieu. Une cuisine de quartier généreuse, sans chichi, où les plats mijotent et les verres se remplissent."
						/>
					</div>
					<div className={styles.right}>
						<Project
							link="https://delidom.fr/"
							img={delidomImg}
							name="DéliDom"
							year="2025"
							mission="Design et développement du site web"
							tech="WordPress • Elementor • CSS"
							description="Pour ce projet, j’ai accompagné Eléna dans la création du site web de DéliDom, son service de portage de repas à domicile en Vendée. Mon objectif était de concevoir un site simple, rassurant et facile à utiliser, pensé pour une clientèle qui n’est pas toujours à l’aise avec le numérique. Le site a été développé sous WordPress, avec une attention particulière portée à la rapidité, au référencement local et à la simplicité de gestion pour Eléna au quotidien."
						/>
					</div>
					<div className={styles.left}>
						<Project
							link="https://www.keywest-restaurant.com/"
							img={keywestImg}
							name="Keywest"
							year="2026"
							mission="Refonte du site web"
							tech="Astro • CSS • GSAP"
							description="Pour ce projet, j'ai accompagné l'équipe de Key West dans la refonte de leur site vitrine. Mon objectif : retranscrire en ligne l'esprit du lieu: un bistro les pieds dans l'eau sur la Promenade des Planches de Blonville-sur-Mer, entre huîtres, poulpe snacké et coucher de soleil sur la Manche."
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
