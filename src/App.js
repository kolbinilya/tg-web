import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";


function App() {
	const {tg, onToggleButton} = useTelegram()
	const url = 'https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_1339636625-1.jpg'

	useEffect(() => {
		tg.ready()
	}, []);

	return (
			<div className="App">
				<Header/>
				<div className='container'>
					<img className='img' src={url} alt=""/>
				</div>
				<button onClick={onToggleButton}>toggle</button>
			</div>
	);
}

export default App;
