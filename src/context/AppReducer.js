export default (state, action) => {
	// Reducer is just the way to change the state and send it down to the component/appliation.
	switch (action.type) {
		case 'DELETE_TRANSACTION':
			return {
				// Returning initial state
				...state,
				// And then eturning transactions
				transactions: state.transactions.filter(
					(transaction) => transaction.id !== action.payload
				),
			};
		case 'ADD_TRANSACTION':
			return {
				// Returning initial state
				...state,
				// And then eturning transactions, meaning returning transactions that are already there AND the new one which is in a 'payload' that's why I've made an array which contains at first the new transaction and all other transactions..
				transactions: [action.payload, ...state.transactions],
			};
		default:
			return state;
	}
};
