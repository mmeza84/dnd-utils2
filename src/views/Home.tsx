import { Link } from 'react-router';

import './Home.scss';

export default function Home() {
	return (
		<div className="home-links">
			<Link to="/player">Player Tools</Link>
			<Link to="/dm">Dungeon Master Tools</Link>
		</div>
	);
}
