import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Finances from './components/Finances';
import TransactionsList from './components/TransactionsList';
import AddTransaction from './components/AddTransaction';

function App() {
	return (
		<div>
			<Header />
			<div className='container'>
				<Balance />
				<Finances />
				<TransactionsList />
				<AddTransaction />
			</div>
		</div>
	);
}

export default App;
