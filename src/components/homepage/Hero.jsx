function Hero() {
	return (
		<section className="hero">
			<div className="hero__title-flex">
				<h1 className="hero__title" data-aos="fade-up">
					Arnaud Lahaut
				</h1>
				<h1 className="hero__title outlined" data-aos="fade-up">
					Creative
				</h1>
				<h1 className="hero__title" data-aos="fade-up">
					Frontend
				</h1>
				<h1 className="hero__title outlined" data-aos="fade-up">
					Developer
				</h1>
			</div>
			<img
				className="hero__image"
				src="../src/assets/images/beach-bg.jpg"
				alt="beach background"
				width="600px"
				data-aos="zoom-out"
			/>
		</section>
	);
}

export default Hero;
