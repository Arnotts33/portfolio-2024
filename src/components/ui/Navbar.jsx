function Navbar() {
	return (
		<header className="header" data-aos="fade-down">
			<nav className="header__nav">
				<div className="header__logo">
					<h1>
						AL<span>.</span>
					</h1>
				</div>
				<ul className="header__menu">
					<li>
						<a href="#">home</a>
					</li>
					<li>
						<a href="#">about</a>
					</li>
					<li>
						<a href="#">skills</a>
					</li>
					<li>
						<a href="#">projects</a>
					</li>
					<li>
						<button className="header__menu-btn">
							contact me.
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
