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
				tl.from(
					title.current,
					{
						duration: 2,
						opacity: 0,
						y: 150,
						ease: "power4.inOut",
					},
					"-=1.6"
				).from(
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
		});
	}, []);

	function handleToggleAbout() {
		setIsToggleAbout((prevToggleAbout) => !prevToggleAbout);
	}

	if (!isToggleAbout)
		return (
			<section className={styles.role__section} ref={section} id="about">
				<div className={styles.role__container}>
					<div ref={title}>
						<p>
							Ancien <span>chef</span>, je suis désormais{" "}
						</p>
					</div>
					<div ref={role}>
						<div className={styles.role__container_title}>
							<h1>Développeur Frontend</h1>
							<p>basé à Bordeaux, France</p>
						</div>
						<p>
							Je conçois des interfaces web modernes et
							intuitives, spécifiquement adaptées aux besoins des
							secteurs de l&apos;hôtellerie, de la restauration et
							du vin. Fort de mes 15 années d&apos;expérience en
							tant que chef et gérant de restaurants, je comprends
							les besoins de ces secteurs et les traduis en
							solutions numériques sur mesure.
						</p>
						<button
							className="btn btn--secondary"
							onClick={handleToggleAbout}
						>
							En savoir plus
						</button>
					</div>
				</div>
			</section>
		);

	if (isToggleAbout) return <About toggleAbout={handleToggleAbout} />;
}

export default Role;
