import { useEffect, useState } from 'react';

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
				<div className="hamburger" onClick={handleToggleMenu}>
					<div className="bar1"></div>
					<div className="bar2"></div>
					<div className="bar3"></div>
				</div>
			)}
			<div className={`header-links ${menuCollapsed ? 'collapsed' : ''}`}>
				<a href="/">Home</a>
				<a href="/player">Player Tools</a>
				<a href="/dm">DM Tools</a>
				<a href="/resources">Resources</a>
			</div>
		</div>
	);
}
