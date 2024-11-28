import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Navbar.module.css";
import logo from "/assets/images/AL-logo.webp";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

function Navbar() {
	const headerSection = useRef(null);

	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		const tl = gsap.timeline();

		tl.from(headerSection.current, {
			opacity: 0,
			y: -100,
			duration: 2.3,
			delay: 0.5,
			ease: "power4.inOut",
		});
	});

	return (
		// <header className={styles.header} data-aos="fade-down">
		<header className={styles.header} ref={headerSection}>
			<img src={logo} alt="logo" className={styles.logo} />
			<nav className={styles.header__nav}>
				<ul className={styles.header__menu}>
					<li>
						<a href="#about">about</a>
					</li>
					<li>
						<a href="#skills">skills</a>
					</li>
					<li>
						<a href="#projects">projects</a>
					</li>
				</ul>
				<button className="btn button--primary">
					<a className={styles.contact_btn} href="#contact">
						contact me.
					</a>
				</button>

				{/* Toggle Menu Small Devices */}
			</nav>
		</header>
	);
}

export default Navbar;
