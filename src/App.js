// font - Roboto
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material/styles";

// pages
import Home from "./pages/home";
import { theme } from "./theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Home />
		</ThemeProvider>
	);
}

export default App;
