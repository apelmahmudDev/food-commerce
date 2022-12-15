// font - Roboto
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material/styles";
import { createContext, useReducer } from "react";

// react router dom
import { RouterProvider } from "react-router-dom";
import router from "./routes";

import { theme } from "./theme";

// reducer
import cartReducer, { initialState } from "./reducers/cartReducer";

export const CartContext = createContext();

function App() {
	const [cart, dispatch] = useReducer(cartReducer, initialState);

	return (
		<ThemeProvider theme={theme}>
			<CartContext.Provider value={{ cart, dispatch }}>
				<RouterProvider router={router} />
			</CartContext.Provider>
		</ThemeProvider>
	);
}

export default App;
