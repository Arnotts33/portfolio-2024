import PropTypes from "prop-types";
import styles from "./Project.module.css";

function Project({ img, name, year, tech, description }) {
	return (
		<div className={styles.project__container}>
			<a href="https://github.com/Arnotts33" target="_blank">
				<img src={img} alt="project image" />
			</a>
			<h2>{name}</h2>
			<div className={styles.tags}>
				<span>{year}</span>
				<span>{tech}</span>
			</div>
			<p>{description}</p>
		</div>
	);
}

Project.propTypes = {
	img: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	year: PropTypes.string.isRequired,
	tech: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default Project;