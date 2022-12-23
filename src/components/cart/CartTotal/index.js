import { Box, Divider, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../App";

const CartTotal = () => {
	const { cart } = useContext(CartContext);

	const subtotal = cart?.items?.reduce(
		(total, food) => total + food.price * food.quantity,
		0
	);

	const shipping = 20; // 20 taka

	const total = (subtotal + shipping).toFixed(2);

	return (
		<Box component={Paper} elevation={4} p={2}>
			<Typography sx={{ mb: 3 }} variant="h6" fontWeight="bold">
				Cart Totals
			</Typography>
			<Box sx={{ width: "100%" }}>
				{/* subtotal */}
				<CartDetails title="Subtotal" money={subtotal.toFixed(2)} />

				{/* shipping */}
				<CartDetails title="Shipping" money={shipping} />

				{/* Total */}
				<CartDetails title="Total" money={total} isBold />
			</Box>
		</Box>
	);
};

export default CartTotal;

const CartDetails = ({ title, money, isBold }) => {
	return (
		<Box my={2}>
			<Box
				sx={{
					pb: 1.5,
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Typography
					color="text.secondary"
					sx={{ fontWeight: isBold ? "700" : "300" }}
				>
					{title}
				</Typography>
				<Typography
					color="text.secondary"
					sx={{ fontWeight: isBold ? "700" : "300" }}
				>
					${money}
				</Typography>
			</Box>
			<Divider />
		</Box>
	);
};
