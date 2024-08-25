import { useRef, useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { MdOutlineToc } from 'react-icons/md';
import { CSSTransition } from 'react-transition-group';
import { useMediaQueries } from '../../Hooks/useMediaQueries';
import { useOutsideClick } from '../../Hooks/useOutsideClick';
import styles from './TableOfContents.module.scss';
import TableOfContentsList from './TableOfContentsList';

const TableOfContents = () => {
	const tableOfContentsRef = useRef();
	const [showTableOfContents, setShowTableOfContents] = useState(false);
	const { isBigScreen } = useMediaQueries();

	const toggleTableOfContents = () => {
		setShowTableOfContents(!showTableOfContents);
	};

	useOutsideClick(tableOfContentsRef, toggleTableOfContents, showTableOfContents);

	return (
		<div ref={tableOfContentsRef} className={styles.tableOfContents}>
			{isBigScreen ? (
				<TableOfContentsList />
			) : (
				<>
					{showTableOfContents ? (
						<FaXmark className={styles.tableOfContentsButton} onClick={toggleTableOfContents} />
					) : (
						<MdOutlineToc className={styles.tableOfContentsButton} onClick={toggleTableOfContents} />
					)}
					<CSSTransition
						in={showTableOfContents}
						timeout={250}
						classNames={{ enterActive: styles.tableOfContentsListShow, exitActive: styles.tableOfContentsListHide }}
						mountOnEnter
						unmountOnExit
					>
						<TableOfContentsList className={styles.tableOfContentsList} />
					</CSSTransition>
				</>
			)}
		</div>
	);
};

export default TableOfContents;
