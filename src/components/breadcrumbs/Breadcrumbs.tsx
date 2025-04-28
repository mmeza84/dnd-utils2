import { Link, useLocation } from 'react-router';

import './Breadcrumbs.scss';

export function Breadcrumbs() {
	const location = useLocation();

	if (location.pathname === '/') {
		return null; // No breadcrumbs on the home page
	}

	return (
		<div className="breadcrumbs">
			{location.pathname !== '/' && <Link to="/">&lt; Go Back Home</Link>}
		</div>
	);
}
