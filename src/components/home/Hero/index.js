import { Box, Container, Typography } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
// import { useStyles } from "./styled";

// apply js style from material ui
const Hero = () => {
	// const classes = useStyles();

	return (
		<Box sx={{ backgroundColor: "#fbf6ef", height: "100vh", py: 5 }}>
			<Container maxWidth="lg">
				<Box
					sx={{
						height: "100vh",
						display: "flex",
						alignItems: "center",
					}}
				>
					<Box
						sx={{
							backgroundColor: "#fcdda3",
							display: "flex",
							alignItems: "center",
							gap: 1.5,
							p: 1,
							maxWidth: "280px",
						}}
					>
						{/* icon */}
						<DirectionsCarIcon color="primary" />
						{/* content */}
						<Typography variant="h6" color="text.secondary" fontWeight="bold">
							Fastest Delivery Guaranteed
						</Typography>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Hero;
