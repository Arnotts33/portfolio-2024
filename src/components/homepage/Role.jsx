import { useState } from "react";
import styles from "./Role.module.css";
import About from "./About";

function Role() {
	const [isToggleAbout, setIsToggleAbout] = useState(false);

	function handleToggleAbout() {
		setIsToggleAbout((prevToggleAbout) => !prevToggleAbout);
	}

	if (!isToggleAbout)
		return (
			<section className={styles.role__section}>
				<div className={styles.role__container}>
					<p>
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

	if (isToggleAbout) return <About />;
}

export default Role;
