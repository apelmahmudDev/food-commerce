import { Box, Container, Typography } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

// apply js style from material ui
const Hero = () => {
	return (
		<Box sx={{ backgroundColor: "#ddd", height: "100vh", py: 5 }}>
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
							backgroundColor: "orange",
							display: "flex",
							gap: 1.5,
							p: 1,
							maxWidth: "280px",
						}}
					>
						{/* icon */}
						<DirectionsCarIcon />
						{/* content */}
						<Typography>Fastest Delivery Guaranteed</Typography>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Hero;
