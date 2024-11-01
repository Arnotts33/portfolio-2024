import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from "./components/homepage/Hero";
import Navbar from "./components/ui/Navbar";
import Role from "./components/homepage/Role";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 2000,
			offset: 200,
		});
	}, []);

	return (
		<>
			<Navbar />
			<Hero />
			<main>
				<Role />
			</main>
		</>
	);
}

export default App;
