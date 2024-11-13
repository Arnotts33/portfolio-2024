import styles from "./Navbar.module.css";
import logo from "/assets/images/AL-logo.webp";

function Navbar() {
	return (
		// <header className={styles.header} data-aos="fade-down">
		<header className={styles.header}>
			<img src={logo} alt="logo" width={70} />
			{/* <h1>
				AL<span>.</span>
			</h1> */}
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
