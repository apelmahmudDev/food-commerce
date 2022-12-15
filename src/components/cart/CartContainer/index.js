import { Box, Container, Grid } from "@mui/material";
import CartTable from "../CartTable";
import CartTitle from "../CartTitle";
import CartTotal from "../CartTotal";

const CartContainer = () => {
	return (
		<Box my={5}>
			<Container maxWidth="lg">
				<CartTitle />

				<Grid container spacing={5}>
					<Grid item xs={12} md={8}>
						<CartTable />
					</Grid>
					<Grid item xs={12} md={4}>
						<CartTotal />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default CartContainer;
