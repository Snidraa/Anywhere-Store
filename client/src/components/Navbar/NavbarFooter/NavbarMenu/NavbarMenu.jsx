import { observer } from 'mobx-react-lite';
import { useContext, useRef, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useOutsideClick } from '../../../../Hooks/useOutsideClick';
import { avatar } from '../../../../assets';
import { Context } from '../../../../store/Context';
import { ADMIN_ROUTE, LOGIN_ROUTE, TERMS_AND_CONDITIONS_ROUTE, WISHLIST_ROUTE } from '../../../../utils/consts';
import styles from './NavbarMenu.module.scss';

const NavbarMenu = observer(() => {
	const { user } = useContext(Context);
	const navigate = useNavigate();

	const [showMenu, setShowMenu] = useState(false);
	const showMenuRef = useRef(null);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const handleClick = route => {
		navigate(route);
		toggleMenu();
	};

	useOutsideClick(showMenuRef, toggleMenu, showMenu);

	return (
		<div ref={showMenuRef} className={styles.navbarMenuContainer}>
			{user.isAuth ? (
				<img src={avatar} alt='avatar' onClick={toggleMenu} />
			) : (
				<FaUser className={styles.accountIcon} onClick={toggleMenu} />
			)}
			<CSSTransition
				in={showMenu}
				timeout={250}
				classNames={{ enterActive: styles.menuShow, exitActive: styles.menuHide }}
				mountOnEnter
				unmountOnExit
			>
				<div className={styles.menu}>
					<div className={styles.menu_list}>
						{user.isAuth ? (
							<>
								<button onClick={() => handleClick(ADMIN_ROUTE)}>Admin Panel</button>
								<button>My Account</button>
								<button onClick={() => handleClick(WISHLIST_ROUTE)}>
									My Wishlist (<span>{user.wishlist.length}</span>)
								</button>
								<button onClick={() => handleClick(TERMS_AND_CONDITIONS_ROUTE)}>Terms & Conditions</button>
								<button onClick={() => handleClick(LOGIN_ROUTE)}>Sign Out</button>
							</>
						) : (
							<button onClick={() => handleClick(LOGIN_ROUTE)}>Sign In</button>
						)}
					</div>
				</div>
			</CSSTransition>
		</div>
	);
});

export default NavbarMenu;
