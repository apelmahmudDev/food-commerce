import {
	Card as MuiCard,
	CardContent,
	CardMedia,
	Typography,
	Button,
} from "@mui/material";

// icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../App";
import { Link } from "react-router-dom";

const Card = ({ pizza }) => {
	const { dispatch, cart } = useContext(CartContext);

	return (
		<MuiCard sx={{ maxWidth: 345 }}>
			<CardMedia sx={{}} component="img" alt="food" image={pizza.image} />
			<CardContent>
				<Link to={`/food/${pizza.id}`}>
					<Typography
						variant="h5"
						component="div"
						fontWeight="bold"
						textAlign="center"
					>
						{pizza.name}
					</Typography>
				</Link>

				<Typography
					variant="h6"
					fontWeight="bold"
					textAlign="center"
					color="primary"
				>
					${pizza.price}
				</Typography>

				<Button
					onClick={() => dispatch({ type: "ADD_TO_CART", payload: pizza })}
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
