import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import useMobile from '../../hooks/useMobile';

import './Header.css';

export function Header() {
	const isMobile = useMobile();
	const [menuCollapsed, setMenuCollapsed] = useState<boolean>(false);

	const handleToggleMenu = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
		const menuToggle = event.currentTarget;
		menuToggle.classList.toggle('change');
		setMenuCollapsed(!menuCollapsed);
	};

	const handleReCollapse = () => {
		if (isMobile) {
			document.getElementById('hamburger')?.classList.remove('change');
			setMenuCollapsed(true);
		}
	};

	useEffect(() => {
		if (isMobile) {
			setMenuCollapsed(true);
		} else {
			setMenuCollapsed(false);
		}
	}, [isMobile]);

	return (
		<div className="app-header">
			<h1>D&DUtils</h1>
			{isMobile && (
				<div id="hamburger" className="hamburger" onClick={handleToggleMenu}>
					<div className="bar1"></div>
					<div className="bar2"></div>
					<div className="bar3"></div>
				</div>
			)}
			<div className={`header-links ${menuCollapsed ? 'collapsed' : ''}`}>
				<Link to="/" onClick={handleReCollapse}>
					Home
				</Link>
				<Link to="/player" onClick={handleReCollapse}>
					Player Tools
				</Link>
				<Link to="/dm" onClick={handleReCollapse}>
					DM Tools
				</Link>
				<Link to="/resources" onClick={handleReCollapse}>
					Resources
				</Link>
			</div>
		</div>
	);
}
