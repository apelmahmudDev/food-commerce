import React, { useEffect } from "react";
import Navbar from "../../common/Navbar/Navbar";
import { Hero, Pizza, Stories } from "../../components/home";
import withUser from "../../HOC/withUser";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useRef } from "react";

const Home = () => {
	const [data, setData] = useState([]);

	const firstNameRef = useRef();
	const lastNameRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(firstNameRef.current.value + " " + lastNameRef.current.value);
	};

	console.log("rendering...");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return (
		<div>
			<Navbar />
			<Hero />
			<Pizza />
			<Stories />

			<Box mt={5}>
				<form onSubmit={handleSubmit}>
					<input type="text" name="firstName" ref={firstNameRef} />
					<input type="text" name="lastName" ref={lastNameRef} />
					<button type="submit">Submit</button>
				</form>
			</Box>

			<Box mt={5}>
				{data.map((item) => (
					<Typography>{item.title}</Typography>
				))}
			</Box>
		</div>
	);
};

export default withUser(Home);
