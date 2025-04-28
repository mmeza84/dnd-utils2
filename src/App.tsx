import RouterView from './RouterView';
import { Header } from './components/header/Header';

import './App.scss';

function App() {
	return (
		<div className="app">
			<Header />
			<div className="router-view">
				<RouterView />
			</div>
		</div>
	);
}

export default App;
