import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Balance() {
	const { transactions } = useContext(GlobalContext);

	// Calculating total balance.
	const amounts = transactions.map((transaction) => transaction.amount);
	console.log(amounts);

	const total = amounts.reduce((acc, item) => (acc += item), 0);

	return (
		<>
			<h4>Your Balance</h4>
			<h1>${total}</h1>
		</>
	);
}

export default Balance;

