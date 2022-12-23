// initial state

export const initialState = {
	items: [], // foods
	total: 0,
};

// reducers

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				items: [...state.items, { ...action.payload, quantity: 1 }],
			};

		case "REMOVE_FROM_CART":
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload),
			};

		// case 'INCREASE_QUANTITY':
		// return{
		// 	...state,
		// 	items: state.map((item) => item.id === action.payload ?
		// 	[...state.items, quantity: item.quantity + 1]:
		// 	item
		// 	)
		// }

		default:
			return state;
	}
};

export default cartReducer;
