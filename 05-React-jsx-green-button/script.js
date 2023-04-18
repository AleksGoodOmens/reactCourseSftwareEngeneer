const App = (props) => {
	const { initialButtonText, clazzName } = props;
	const [buttonText, setButtonText] = React.useState(initialButtonText);
	const [clazz, setClazz] = React.useState(clazzName);

	const onButtonClick = () => {
		setButtonText('react changed buttons');
		setClazz('green-btn');
	};
	return (
		<div className="app">
			<button
				className={clazz}
				onClick={onButtonClick}
			>
				{buttonText}
			</button>
		</div>
	);
};
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(
	<App
		initialButtonText="click me"
		clazzName=""
	/>
);
