import { useState } from 'react';
import RandomNumber from '../components/RandomNumber';
import './App.scss';
function App() {
	// state = {
	// 	number: 10,
	// };
	// onGenerate = () => {};

	return (
		<div className="App">
			<RandomNumber
				maxNumber={1000000}
				// onGenerate={this.onGenerate}
			/>
		</div>
	);
}

export default App;
