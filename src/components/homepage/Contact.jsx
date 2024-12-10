import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Form from "../ui/Form";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSquareInstagram,
	faLinkedin,
	faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useGSAP } from "@gsap/react";

function Contact() {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	const section = useRef(null);
	const title = useRef(null);

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
					backgroundColor: "#f8f8f6",
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
		});
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className={styles.contact__section} id="contact" ref={section}>
			<div className={styles.contact__container}>
				<h1 ref={title}>Get In Touch</h1>
				<div className={styles.contact__box}>
					<div className={styles.contact__form_container}>
						<h2>Interested in working together?</h2>
						<p>
							I am open to work and looking for freelance
							opportunities or a position in startups, agencies
							and design studios.
						</p>
						<Form />
					</div>
					<div className={styles.personal_info__container}>
						<div className={styles.contact}>
							<h3>Contact Details</h3>
							<p>alahaut.dev@gmail.com</p>
							<p>+33 6 03 66 29 39</p>
						</div>
						<div className={styles.socials}>
							<h3>Socials</h3>
							<ul className={styles.socials__links}>
								<li>
									<FontAwesomeIcon
										icon={faSquareGithub}
										size="lg"
										style={{ color: "#80806b" }}
									/>{" "}
									<a
										href="https://github.com/Arnotts33"
										target="_blank"
										rel="noreferrer"
									>
										Github
									</a>
								</li>
								<li>
									<FontAwesomeIcon
										icon={faLinkedin}
										size="lg"
										style={{ color: "#80806b" }}
									/>{" "}
									<a
										href="https://www.linkedin.com/in/arnaudlht/"
										target="_blank"
										rel="noreferrer"
									>
										LinkedIn
									</a>
								</li>
								<li>
									<FontAwesomeIcon
										icon={faSquareInstagram}
										size="lg"
										style={{ color: "#80806b" }}
									/>{" "}
									<a
										href="https://www.instagram.com/arnaudlahaut/"
										target="_blank"
										rel="noreferrer"
									>
										Instagram
									</a>
								</li>
							</ul>
						</div>
						<div className={styles.location}>
							<h3>Location</h3>
							<p>Bordeaux, France</p>
							<p>{time}</p>
						</div>
						<div className={styles.availability}>
							<span className={styles.dot}></span>
							<p>Available for work</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
