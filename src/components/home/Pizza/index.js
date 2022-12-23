import { Container, Typography, Box } from "@mui/material";
import { Card } from "../../../common";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { pizzaData } from "./data";

const Pizza = () => {
	return (
		<>
			<Container maxWidth="lg">
				<Typography
					variant="h3"
					fontWeight="bold"
					sx={{ my: 5, textAlign: "center" }}
				>
					Weekly Pizza Offer
				</Typography>

				{/* food - card */}
				<Box my={5}>
					<Swiper spaceBetween={50} slidesPerView={4}>
						{pizzaData.map((pizza) => (
							<SwiperSlide key={pizza.id}>
								<Card pizza={pizza} />
							</SwiperSlide>
						))}
					</Swiper>
				</Box>
			</Container>
		</>
	);
};

export default Pizza;
