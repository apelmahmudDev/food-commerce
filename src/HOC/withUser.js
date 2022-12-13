import { useState } from "react";

const withUser = (Component) => {
	const CheckUser = () => {
		const [isLoggedIn, setIsLoggedIn] = useState(true);

		return isLoggedIn ? <Component /> : <button>Login</button>;
	};

	return CheckUser;
};

export default withUser;
