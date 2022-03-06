import React, { Component } from 'react';
import Mint from './components/Mint';
import { Navbar } from './components/Navbar';

class App extends Component {
	render() {
		return (
			<div className='h-full'>
				<Navbar />
				<Mint />
			</div>
		);
	}
}

export default App;