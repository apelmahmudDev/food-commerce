import { Box, Typography } from "@mui/material";

const CartTitle = () => {
	return (
		<Box sx={{ minHeight: 200 }} display="flex" alignItems="center">
			<Typography variant="h2" fontWeight="bold">
				Shopping Cart
			</Typography>
		</Box>
	);
};

export default CartTitle;
