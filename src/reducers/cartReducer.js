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
				items: state.items.find((item) => item.id === action.payload.id)
					? state.items.map((item) =>
							item.id === action.payload.id
								? { ...item, quantity: item.quantity + 1 }
								: item
					  )
					: [...state.items, { ...action.payload, quantity: 1 }],
			};

		case "REMOVE_FROM_CART":
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload),
			};

		case "INCREASE_QUANTITY":
			return {
				...state,
				items: state.items.map((item) =>
					item.id === action.payload
						? { ...item, quantity: item.quantity + 1 }
						: item
				),
			};

		case "DECREASE_QUANTITY":
			return {
				...state,
				items:
					state.items.find((item) => item.id === action.payload).quantity === 1
						? state.items.filter((item) => item.id !== action.payload)
						: state.items.map((item) =>
								item.id === action.payload
									? { ...item, quantity: item.quantity - 1 }
									: item
						  ),
			};

		default:
			return state;
	}
};

export default cartReducer;
