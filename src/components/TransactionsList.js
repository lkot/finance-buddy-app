import React, { useContext } from 'react';
import { Transaction } from '../components/Transaction';

import { GlobalContext } from '../context/GlobalState';

function TransactionsList() {
	const { transactions } = useContext(GlobalContext);

	return (
		<>
			<h3>History</h3>
			<ul className='list'>
				{transactions.map((transaction) => (
					<Transaction kye={transaction.id} transaction={transaction} />
				))}
			</ul>
		</>
	);
}

export default TransactionsList;
