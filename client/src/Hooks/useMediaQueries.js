import { useMediaQuery } from 'react-responsive';

export function useMediaQueries() {
	const isBigScreen = useMediaQuery({ query: '(min-width: 1025px)' });
	const isSmallScreen = useMediaQuery({ query: '(min-width: 769px)' });
	const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
	const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

	return { isBigScreen, isSmallScreen, isTablet, isMobile };
}
