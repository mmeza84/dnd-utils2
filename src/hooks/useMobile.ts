import { useEffect, useState } from 'react';

const useMobile = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 600);
		};
		window.addEventListener('resize', handleResize);
		handleResize(); // Initial check
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return isMobile;
};

export default useMobile;
