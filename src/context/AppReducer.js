export default (state, action) => {
	// Reducer is just the way to change the state and send it down to the component/appliation.
	switch (action.type) {
		case 'DELETE_TRANSACTION':
			return {
				...state,
				transactions: state.transactions.filter(
					(transaction) => transaction.id !== action.payload
				),
			};
		default:
			return state;
	}
};
