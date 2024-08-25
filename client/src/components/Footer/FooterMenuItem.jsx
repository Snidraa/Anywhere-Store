import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useMediaQueries } from '../../Hooks/useMediaQueries';
import { useOutsideClick } from '../../Hooks/useOutsideClick';
import { arrowDownWhite } from '../../assets';
import styles from './FooterMenuItem.module.scss';

const FooterMenuItem = props => {
	const { isBigScreen } = useMediaQueries();
	const { title, items } = { ...props };
	const [showList, setShowList] = useState(false);
	const showListRef = useRef(null);

	const toggleList = () => {
		setShowList(!showList);
	};

	useOutsideClick(showListRef, toggleList, showList);

	return (
		<div className={styles.menuItem}>
			{isBigScreen ? (
				<>
					<h3 className={styles.title}>{title}</h3>
					<ul className={styles.list}>
						{items.map(item => (
							<li key={item[0]}>
								<a href={item[1]}>{item[0]}</a>
							</li>
						))}
					</ul>
				</>
			) : (
				<>
					<h3 className={styles.title} ref={showListRef} onClick={toggleList}>
						{title}{' '}
						{!isBigScreen && (
							<img src={arrowDownWhite} alt='arrow down' className={showList ? styles.arrow : styles.arrowDownWhite} />
						)}
					</h3>
					<CSSTransition
						in={showList}
						timeout={250}
						classNames={{ enterActive: styles.listShow, exitActive: styles.listHide }}
						mountOnEnter
						unmountOnExit
					>
						<ul className={styles.list}>
							{items.map(item => (
								<li key={item[0]}>
									<a href={item[1]}>{item[0]}</a>
								</li>
							))}
						</ul>
					</CSSTransition>
				</>
			)}
		</div>
	);
};

export default FooterMenuItem;
