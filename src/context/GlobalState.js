import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
	// 'Dummy data'
	transactions: [
		{ id: 1, text: 'Flower', amount: -20 },
		{ id: 2, text: 'Salary', amount: 300 },
		{ id: 3, text: 'Book', amount: -10 },
		{ id: 4, text: 'Camera', amount: 150 },
	],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions that will make calls to the reducer.
	function deleteTransaction(id) {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
			}}
		>
			{/* 'children' - meaning all the components of application wrapped in Provider */}
			{children}
		</GlobalContext.Provider>
	);
};
