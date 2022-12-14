import {
	Card as MuiCard,
	CardContent,
	CardMedia,
	Typography,
	Button,
} from "@mui/material";

// icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Card = ({ pizza }) => {
	return (
		<MuiCard sx={{ maxWidth: 345 }}>
			<CardMedia sx={{}} component="img" alt="food" image={pizza.image} />
			<CardContent>
				<Typography
					gutterBottom
					variant="h5"
					component="div"
					fontWeight="bold"
					textAlign="center"
				>
					{pizza.name}
				</Typography>
				<Typography
					gutterBottom
					variant="h6"
					fontWeight="bold"
					textAlign="center"
					color="primary"
				>
					${pizza.price}
				</Typography>

				<Button
					variant="contained"
					fullWidth
					startIcon={<AddShoppingCartIcon />}
				>
					Add to Cart
				</Button>
			</CardContent>
		</MuiCard>
	);
};
export default Card;
