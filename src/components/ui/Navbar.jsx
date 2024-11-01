import styles from "./Navbar.module.css";

function Navbar() {
	return (
		<header className={styles.header} data-aos="fade-down">
			<h1>
				AL<span>.</span>
			</h1>
			<nav className={styles.header__nav}>
				<ul className={styles.header__menu}>
					<li>
						<a href="#about">about</a>
					</li>
					<li>
						<a href="#">skills</a>
					</li>
					<li>
						<a href="#">projects</a>
					</li>
					<li>
						<button className={styles.header__menu_btn}>
							contact me.
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
