import PetInfo from '../components/PetInfo';

function App() {
	return (
		<div className="App">
			<PetInfo
				animal="cat"
				age="10"
			/>
			<PetInfo
				animal="dog"
				age="14"
			/>
		</div>
	);
}

export default App;
