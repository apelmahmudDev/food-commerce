import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "../pages/home";
import Shops from "../pages/shops";
import Cart from "../pages/cart";
import FoodDetails from "../pages/FoodDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/shops",
		element: <Shops />,
	},
	{
		path: "/food/:foodId",
		element: <FoodDetails />,
	},
	{
		path: "/cart",
		element: <Cart />,
	},
]);

export default router;
