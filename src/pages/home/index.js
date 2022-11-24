import React from "react";
import Navbar from "../../common/Navbar/Navbar";
import { Hero, Pizza, Stories } from "../../components/home";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Pizza />
			<Stories />
		</div>
	);
};

export default Home;
