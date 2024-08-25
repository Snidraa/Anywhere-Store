import { useEffect, useState } from 'react';

export function useHeadingsData(selectors) {
	const [nestedHeadings, setNestedHeadings] = useState([]);

	useEffect(() => {
		const headingElements = Array.from(document.querySelectorAll(selectors));
		const newNestedHeadings = getNestedHeadings(headingElements);
		setNestedHeadings(newNestedHeadings);
	}, [selectors]);

	return { nestedHeadings };
}

const getNestedHeadings = headingElements => {
	let currentH2 = null;

	return headingElements.reduce((nestedHeadings, heading) => {
		const { innerText: title, id } = heading;

		if (heading.nodeName === 'H2') {
			currentH2 = { id, title, items: [] };
			nestedHeadings.push(currentH2);
		} else if (heading.nodeName === 'H3') {
			if (currentH2) {
				currentH2.items.push({ id, title });
			} else {
				nestedHeadings.push({ id, title });
			}
		}

		return nestedHeadings;
	}, []);
};
