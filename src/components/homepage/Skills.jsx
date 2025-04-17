import styles from "./Skills.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
// 	faReact,
// 	faJs,
// 	faCss3Alt,
// 	faHtml5,
// 	faFigma,
// 	faGitAlt,
// } from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

function Skills() {
	const section = useRef(null);
	const skills = useRef(null);
	const title = useRef(null);

	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		const tl = gsap.timeline();

		ScrollTrigger.create({
			trigger: title.current,
			start: "top bottom",
			end: "bottom 0%",

			onEnter: () => {
				tl.to(section.current, {
					duration: 1.2,
					backgroundColor: "#f8f8f6",
					ease: "power4.Out",
				})
					.from(
						title.current,
						{
							duration: 2,
							opacity: 0,
							y: 200,
							ease: "power4.inOut",
						},
						"-=1.6"
					)
					.from(
						skills.current,
						{
							duration: 2,
							y: 200,
							opacity: 0,
							ease: "power4.inOut",
						},
						"-=1.6"
					);
			},
		});
	}, []);

	return (
		<section className={styles.skills__section} ref={section} id="skills">
			<div className={styles.skills__container} ref={title}>
				<h1>Services</h1>
				<div className={styles.skills__box}>
					<div className={styles.skills__box_text}>
						<h2>mes domaines d&apos;expertise.</h2>
						<p>
							Je conçois et développe des sites web sur mesure, alliant design
							soigné et performance. Mon objectif est de créer des expériences
							numériques impactantes et adaptées, pour valoriser votre activité
							et capter l&apos;attention de vos clients.
						</p>
					</div>
					<div className={styles.skills__box_list}>
						<ul>
							<li>Développement Web</li>
							<li>Web Design</li>
							<li>UX/UI Design</li>
							<li>SEO</li>
						</ul>
					</div>
				</div>
				{/* <div className={styles.skills__box} ref={skills}>
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
				</div> */}
			</div>
		</section>
	);
}

export default Skills;
