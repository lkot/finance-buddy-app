import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Finances from './components/Finances';

function App() {
	return (
		<div>
			<Header />
			<div className='container'>
				<Balance />
				<Finances />
			</div>
		</div>
	);
}

export default App;
