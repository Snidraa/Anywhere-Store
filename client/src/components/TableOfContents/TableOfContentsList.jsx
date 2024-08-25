import { useState } from 'react';
import { useHeadingsData } from '../../Hooks/useHeadingData';
import { useIntersectionObserver } from '../../Hooks/useIntersectionObserver';
import styles from './TableOfContentsList.module.scss';

const TableOfContentsList = () => {
	const { nestedHeadings } = useHeadingsData('h3');
	const [activeId, setActiveId] = useState();
	useIntersectionObserver(setActiveId, 'h3');

	return (
		<nav aria-label='Table of contents'>
			<ul>
				{nestedHeadings.map(heading => (
					<li key={heading.id} className={heading.id === activeId ? styles.active : ''}>
						<a
							href={`#${heading.id}`}
							onClick={e => {
								e.preventDefault();
								document.querySelector(`#${heading.id}`).scrollIntoView({ behavior: 'smooth' });
							}}
						>
							{heading.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default TableOfContentsList;
