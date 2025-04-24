import { Outlet, Route, Routes } from 'react-router';

import * as Breadcrumbs from './components/breadcrumbs/Breadcrumbs';
import Home from './views/Home';
import PlayerView from './views/PlayerView';

export default function RouterView() {
	return (
		<>
			<Breadcrumbs.Breadcrumbs />
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
			</Routes>
		</>
	);
}
