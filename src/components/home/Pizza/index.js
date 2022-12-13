import { Container, Typography, Box, Grid } from "@mui/material";

/* home task import */
import Card from "../../../common/Card/Card";

import { pizzaData } from "./data";

const Pizza = () => {
	return (
		<>
			<Container maxWidth="lg">
				<Typography
					variant="h3"
					fontWeight="bold"
					sx={{ my: 5, textAlign: "center" }}
					gutterbottom
				>
					Weekly Pizza Offer
				</Typography>

				{/* food - card */}
				<Box my={5}>
					<Grid container spacing={5}>
						{pizzaData.map((pizza) => (
							<Grid key={pizza.id} item xs={12} md={3}>
								<Card pizza={pizza} />
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</>
	);
};

export default Pizza;
