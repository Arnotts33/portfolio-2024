import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSquareInstagram,
	faLinkedin,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import beach from "/assets/images/beach-bg.jpg";

function Hero() {
	const heroContainer = useRef(null);
	const heroImg = useRef(null);
	const titles = useRef([]);

	useGSAP(() => {
		const tl = gsap.timeline();

		tl.from(heroImg.current, {
			scale: 2,
			duration: 3.2,
			ease: "power4.inOut",
		}).from(
			titles.current,
			{
				y: 200,
				opacity: 0,
				duration: 2,
				ease: "power3.inOut",
			},
			"-=2.5"
		);
	});

	return (
		<section ref={heroContainer} className={styles.hero__container}>
			<div className={styles.hero}>
				<div
					className={styles.hero__title}
					data-scroll
					data-scroll-speed="0.3"
				>
					<h1 ref={(el) => (titles.current[0] = el)}>
						Arnaud Lahaut
					</h1>

					{/* <h1
						ref={(el) => (titles.current[1] = el)}
						className={`hidden ${styles.outlined} title`}
					>
						Creative
					</h1> */}

					<h1
						ref={(el) => (titles.current[2] = el)}
						className={`${styles.outlined} title`}
					>
						Frontend
					</h1>

					<h1
						ref={(el) => (titles.current[3] = el)}
						className="title"
					>
						Developer
					</h1>
				</div>
				<div
					className={styles.hero__image}
					ref={heroImg}
					data-scroll
					data-scroll-speed="0.3"
				>
					<img src={beach} alt="beach background" />
				</div>
			</div>

			<div className={styles.hero__socials}>
				<a
					href="https://github.com/Arnotts33"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faGithub} size="xl" />
				</a>
				<a
					href="https://www.linkedin.com/in/arnaudlht/"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faLinkedin} size="xl" />
				</a>
				<a
					href="https://www.instagram.com/arnaudlahaut/"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faSquareInstagram} size="xl" />
				</a>
			</div>
			<div className={styles.hero__scroll_indicator}>
				<div className={styles.mouse}></div>
			</div>
		</section>
	);
}

export default Hero;
