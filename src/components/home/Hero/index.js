import { Box, Container, Typography, Grid, Button } from "@mui/material";

// icons
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ShopIcon from "@mui/icons-material/Shop";
import AppleIcon from "@mui/icons-material/Apple";

import { useStyles } from "./styles";

const styles = {
	backgroundColor: (theme) => theme.palette.common.black,
	color: (theme) => theme.palette.common.white,
	padding: (theme) => theme.spacing(1, 4),
	fontSize: 18,
};

// apply js style from material ui
const Hero = () => {
	const classes = useStyles();

	return (
		<Box sx={{ backgroundColor: "#fbf6ef", py: 5 }}>
			<Container maxWidth="lg">
				<Grid container spacing={5}>
					<Grid item xs={12} md={6}>
						<Box
							sx={{
								height: "100vh",
								display: "flex",
								alignItems: "center",
							}}
						>
							<Box>
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
									<Typography
										variant="h6"
										color="text.secondary"
										fontWeight="bold"
									>
										Fastest Delivery Guaranteed
									</Typography>
								</Box>
								<Box my={3}>
									<Typography variant="h2" fontWeight="bold">
										Welcome to <br />{" "}
										<Typography
											component="span"
											variant="h2"
											fontWeight="bold"
											color="primary"
										>
											PETUK
										</Typography>{" "}
										Restaurant
									</Typography>
								</Box>
								<Typography color="text.secondary">
									Get 10% instant off for all order and $200 signup bonus today
									for new registration!
								</Typography>

								<Box my={4} display="flex" gap={3}>
									<Button
										sx={{ ...styles }}
										variant="contained"
										startIcon={<ShopIcon />}
									>
										Google Play
									</Button>
									<Button
										sx={{ ...styles }}
										variant="contained"
										endIcon={<AppleIcon />}
									>
										App Store
									</Button>
								</Box>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box className={classes.heroBanner}>
							<img
								src="https://d33wubrfki0l68.cloudfront.net/c35759418e02165461461ce15e45179967cc58a5/e0965/assets/images/hero-image.png"
								alt="hero-banner"
							/>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Hero;
