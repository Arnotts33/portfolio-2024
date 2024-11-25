import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Role.module.css";
import About from "./About";
import { useGSAP } from "@gsap/react";

function Role() {
	const [isToggleAbout, setIsToggleAbout] = useState(false);
	const section = useRef(null);
	const title = useRef(null);
	const role = useRef(null);

	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		const tl = gsap.timeline();

		ScrollTrigger.create({
			trigger: section.current,
			start: "top bottom",
			end: "bottom 0%",

			onEnter: () => {
				tl.to(section.current, {
					duration: 1.3,
					backgroundColor: "#0e0e0c",
					ease: "power4.Out",
				})
					.from(
						title.current,
						{
							duration: 2,
							opacity: 0,
							y: 150,
							ease: "power4.inOut",
						},
						"-=1.6"
					)
					.from(
						role.current,
						{
							duration: 2,
							y: 150,
							opacity: 0,
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
	}, [section.current]);

	function handleToggleAbout() {
		setIsToggleAbout((prevToggleAbout) => !prevToggleAbout);
	}

	if (!isToggleAbout)
		return (
			<section className={styles.role__section} ref={section} id="about">
				<div className={styles.role__container}>
					<div ref={title}>
						<p>
							Once a <span>chef</span>, I am now a
						</p>
					</div>
					<div ref={role}>
						<div className={styles.role__container_title}>
							<h1>Frontend Developer</h1>
							<p>based in Bordeaux, France</p>
						</div>
						<p>
							I specialize in crafting modern, user-friendly web
							interfaces with a strong focus on the hospitality
							industry, including restaurants, wineries, and
							beverage businesses. Drawing on my 15 years of
							experience as a chef and restaurant manager, I
							understand the needs of these sectors and translate
							them into tailored digital solutions.
						</p>
						<button
							className="btn btn--secondary"
							onClick={handleToggleAbout}
						>
							My Story
						</button>
					</div>
				</div>
			</section>
		);

	if (isToggleAbout) return <About toggleAbout={handleToggleAbout} />;
}

export default Role;
