import "./App.css";
// import AOS from "aos";
import "aos/dist/aos.css";
// import { useEffect } from "react";
import Hero from "./components/homepage/Hero";
import Navbar from "./components/ui/Navbar";
import Role from "./components/homepage/Role";
import Skills from "./components/homepage/Skills";
import Projects from "./components/homepage/Projects";
import Contact from "./components/homepage/Contact";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		const locomotiveScroll = new LocomotiveScroll();
	}, []);

	return (
		<>
			<Navbar />
			<Hero />
			<main>
				<Role />
				<Skills />
				<Projects />
				<Contact />
			</main>
		</>
	);
}

export default App;
