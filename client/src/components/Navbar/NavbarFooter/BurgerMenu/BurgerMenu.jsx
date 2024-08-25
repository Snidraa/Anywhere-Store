import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useOutsideClick } from '../../../../Hooks/useOutsideClick';
import { arrowRightBlack, burger, crossBlack, logoBlue } from '../../../../assets';
import { SHOP_ROUTE } from '../../../../utils/consts';
import styles from './BurgerMenu.module.scss';
const BurgerMenu = () => {
	const [showBurgerMenu, setShowBurgerMenu] = useState(false);
	const showBurgerMenuRef = useRef(null);

	const toggleBurgerMenu = () => {
		setShowBurgerMenu(!showBurgerMenu);
	};

	useOutsideClick(showBurgerMenuRef, toggleBurgerMenu, showBurgerMenu);

	return (
		<>
			<img src={burger} alt='burger' className={styles.burger} onClick={toggleBurgerMenu} />
			<CSSTransition
				in={showBurgerMenu}
				timeout={250}
				classNames={{ enterActive: styles.menuShow, exitActive: styles.menuHide }}
				mountOnEnter
				unmountOnExit
			>
				<div className={styles.menu} ref={showBurgerMenuRef}>
					<div className={styles.menuHeader}>
						<NavLink to={SHOP_ROUTE}>
							<img src={logoBlue} alt='logo' className={styles.logo} />
						</NavLink>
						<img src={crossBlack} alt='close' onClick={toggleBurgerMenu} />
					</div>
					<ul>
						<li>
							<a href=''>
								Laptops <img src={arrowRightBlack} alt='arrowRightBlack' />
							</a>
						</li>
						<li>
							<a href=''>
								Desktop PCs <img src={arrowRightBlack} alt='arrowRightBlack' />
							</a>
						</li>
						<li>
							<a href=''>
								Networking Devices <img src={arrowRightBlack} alt='arrowRightBlack' />
							</a>
						</li>
						<li>
							<a href=''>
								Printers & Scanners <img src={arrowRightBlack} alt='arrowRightBlack' />
							</a>
						</li>
						<li>
							<a href=''>
								PC Parts <img src={arrowRightBlack} alt='arrowRightBlack' />
							</a>
						</li>
						<li>
							<a href=''>
								All Other Products <img src={arrowRightBlack} alt='arrowRightBlack' />
							</a>
						</li>
					</ul>
				</div>
			</CSSTransition>
		</>
	);
};

export default BurgerMenu;
