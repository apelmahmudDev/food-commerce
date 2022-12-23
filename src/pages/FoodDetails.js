import React from "react";
import { Navbar } from "../common";
import { useParams } from "react-router-dom";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { pizzaData } from "../components/home/Pizza/data";
import { useContext } from "react";
import { CartContext } from "../App";

const FoodDetails = () => {
	const { foodId } = useParams();
	const { dispatch } = useContext(CartContext);

	const food = pizzaData.find((food) => food.id === foodId);

	return (
		<>
			<Navbar />
			<Container>
				<Box
					display="flex"
					justifyContent="center"
					flexDirection="column"
					alignItems="center"
					mt={5}
					p={5}
					component={Paper}
					maxWidth="sm"
				>
					<Box
						sx={{
							width: 200,
							height: "auto",
							"&>img": {
								width: "100%",
								height: "100%",
								display: "block",
								objectFit: "cover",
							},
						}}
					>
						<img src={food.image} alt={food.name} />
					</Box>
					<Typography sx={{ my: 3 }} variant="h4">
						{food.name}
					</Typography>
					<Button
						onClick={() => dispatch({ type: "ADD_TO_CART", payload: food })}
						variant="outlined"
					>
						Add to cart
					</Button>
				</Box>
			</Container>
		</>
	);
};

export default FoodDetails;
