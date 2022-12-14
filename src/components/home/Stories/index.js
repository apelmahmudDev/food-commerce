import { Box } from "@mui/material";
import { useReducer } from "react";

const initialState = 0;

const countReducer = (state, action) => {
	switch (action.type) {
		case "add":
			return (state = state + 1);

		case "minus":
			return (state = state - 1);

		default:
			return state;
	}
};

const Stories = () => {
	const [state, dispatch] = useReducer(countReducer, initialState);

	return (
		<Box my={5} mx={5}>
			<button onClick={() => dispatch({ type: "add" })}>Add</button>
			<div>count: {state}</div>
			<button onClick={() => dispatch({ type: "minus" })}>Minus</button>
		</Box>
	);
};

export default Stories;
