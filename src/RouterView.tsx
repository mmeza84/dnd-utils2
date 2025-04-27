import { Outlet, Route, Routes } from 'react-router';

import Home from './views/Home';
import PlayerView from './views/PlayerView';
import Resources from './views/resources/Resources';

export default function RouterView() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="player" element={<PlayerView />} />
			<Route
				path="dm"
				element={
					<div>
						DM Tools
						<Outlet />
					</div>
				}
			>
				<Route path="random-encounter" element={<div>Random Encounter</div>} />
			</Route>
			<Route path="resources" element={<Resources />} />
		</Routes>
	);
}
