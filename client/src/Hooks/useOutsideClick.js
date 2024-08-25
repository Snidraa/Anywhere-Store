import { useEffect } from 'react';

export function useOutsideClick(elementRef, handler, attached = false) {
	useEffect(() => {
		if (!attached) return;

		const handleClick = e => {
			const target = e.target;
			if (!elementRef.current) return;
			if (!elementRef.current.contains(target)) {
				handler();
			}
		};

		document.addEventListener('mousedown', handleClick);
		document.addEventListener('touchstart', handleClick);

		return () => {
			document.removeEventListener('mousedown', handleClick);
			document.removeEventListener('touchstart', handleClick);
		};
	}, [elementRef, handler, attached]);
}
