// initial state

export const initialState = {
	items: [],
	total: 0,
};

// reducers

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				items: [...state.items, action.payload],
			};

		case "REMOVE_FROM_CART":
			return state.items.filter((item) => item.id !== action.payload.id);

		default:
			return state;
	}
};

export default cartReducer;
