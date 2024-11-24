import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Role.module.css";
import About from "./About";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Role() {
	const [isToggleAbout, setIsToggleAbout] = useState(false);
	const section = useRef(null);
	const role = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline();

		ScrollTrigger.create({
			trigger: role.current,
			start: "top 80%",
			end: "bottom 0%",

			onEnter: () => {
				tl.to(section.current, {
					duration: 1.0,
					backgroundColor: "#0e0e0c",
					ease: "power4.Out",
				});
			},

			onLeaveBack: () => {
				tl.to(section.current, {
					duration: 1.0,
					backgroundColor: "#f8f8f6",
					ease: "power4.Out",
				});
			},
		});
	});

	function handleToggleAbout() {
		setIsToggleAbout((prevToggleAbout) => !prevToggleAbout);
	}

	if (!isToggleAbout)
		return (
			<section className={styles.role__section} ref={section} id="about">
				<div className={styles.role__container}>
					<p ref={role}>
						Once a <span>chef</span>, I am now a
					</p>
					<div className={styles.role__container_title}>
						<h1>Frontend Developer</h1>
						<p>based in Bordeaux, France</p>
					</div>
					<p>
						I love creating and crafting impactful digital
						experiences that engage and resonate with people through
						creative design and development.
					</p>
					<button
						className="btn btn--secondary"
						onClick={handleToggleAbout}
					>
						My Story
					</button>
				</div>
			</section>
		);

	if (isToggleAbout) return <About toggleAbout={handleToggleAbout} />;
}

export default Role;
