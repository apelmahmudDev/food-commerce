import { Box, Container, Grid } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../App";
import CartTable from "../CartTable";
import CartTitle from "../CartTitle";
import CartTotal from "../CartTotal";

const CartContainer = () => {
	const { cart, dispatch } = useContext(CartContext);

	return (
		<Box my={5}>
			<Container maxWidth="lg">
				<CartTitle />

				<Grid container spacing={5}>
					<Grid item xs={12} md={8}>
						<CartTable cart={cart} dispatch={dispatch} />
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
