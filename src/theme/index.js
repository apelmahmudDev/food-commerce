import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export let theme = createTheme({
	typography: {
		fontFamily: ["Roboto", "Rajdhani", "Open Sans", "sans-serif"].join(","),
		body1: {
			fontFamily: "Open Sans",
		},
		body2: {
			fontFamily: "Open Sans",
		},
		h1: {
			fontFamily: "Rajdhani",
		},
		h2: {
			fontFamily: "Rajdhani",
		},
		h3: {
			fontFamily: "Rajdhani",
		},
		h4: {
			fontFamily: "Rajdhani",
		},
		h5: {
			fontFamily: "Rajdhani",
		},
		h6: {
			fontFamily: "Rajdhani",
		},
	},
	palette: {
		mode: "light",
		primary: {
			main: "#ffa101",
			light: "#fcf8f0",
			// dark: "#000000"
		},
		text: {
			primary: "#1e1d23",
			secondary: "#666A71",
		},
	},
	// components: {
	// 	MuiButton: {
	// 		styleOverrides: {
	// 			root: {
	// 				fontFamily: "Poppins",
	// 				textTransform: "capitalize",
	// 				borderRadius: 0,
	// 			},
	// 		},
	// 	},
	// },
});

theme = responsiveFontSizes(theme);
