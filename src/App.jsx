import "./App.css";
import { useEffect } from "react";
import Lenis from "lenis";

import Hero from "./components/homepage/Hero";
import Navbar from "./components/ui/Navbar";
import Role from "./components/homepage/Role";
import Skills from "./components/homepage/Skills";
import Projects from "./components/homepage/Projects";
import Contact from "./components/homepage/Contact";

function App() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Role />
				<Skills />
				<Projects />
				<Contact />
			</main>
		</>
	);
}

export default App;
