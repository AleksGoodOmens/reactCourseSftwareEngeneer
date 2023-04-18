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
			<PetInfo
				animal="dog"
				age="14"
				hasPet
			/>
		</div>
	);
}

export default App;
