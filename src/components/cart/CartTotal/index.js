import { Box, Divider, Paper, Typography } from "@mui/material";

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

const CartTotal = () => {
	return (
		<Box component={Paper} elevation={4} p={2}>
			<Typography sx={{ mb: 3 }} variant="h6" fontWeight="bold">
				Cart Totals
			</Typography>
			<Box sx={{ width: "100%" }}>
				{/* subtotal */}
				<CartDetails title="Subtotal" money={120} />

				{/* shipping */}
				<CartDetails title="Shipping" money={20} />

				{/* Total */}
				<CartDetails title="Total" money={230} isBold />
			</Box>
		</Box>
	);
};

export default CartTotal;
