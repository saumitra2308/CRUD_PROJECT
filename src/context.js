// Context.js
import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
	const [refresh, setRefresh] = useState(false);

	return (
		<Context.Provider value={{ refresh, setRefresh }}>
			{children}
		</Context.Provider>
	);
};
