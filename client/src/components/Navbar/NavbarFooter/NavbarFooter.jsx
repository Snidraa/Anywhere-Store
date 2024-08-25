import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { useMediaQueries } from '../../../Hooks/useMediaQueries';
import { logoBlue } from '../../../assets';
import { Context } from '../../../store/Context';
import { CART_ROUTE, SHOP_ROUTE } from '../../../utils/consts';
import styles from './NavbarFooter.module.scss';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import SearchArea from './Search/SearchArea';

const NavbarFooter = observer(() => {
	const { user } = useContext(Context);
	const { isBigScreen } = useMediaQueries();

	return (
		<div className={styles.navbarFooterWrapper}>
			<div className={styles.navbarFooter}>
				{isBigScreen ? (
					<>
						<div>
							<NavLink to={SHOP_ROUTE}>
								<img src={logoBlue} alt='logo' />
							</NavLink>
						</div>
						<SearchArea />
						<div className={styles.management}>
							<NavLink to={CART_ROUTE} className={styles.cart}>
								<FaCartShopping />
								<p>{user.cart.length}</p>
							</NavLink>
							<NavbarMenu />
						</div>
					</>
				) : (
					<>
						<SearchArea />
						<div className={styles.management}>
							<NavLink to={CART_ROUTE} className={styles.cart}>
								<FaCartShopping />
								<p>{user.cart.length}</p>
							</NavLink>
							<NavbarMenu />
						</div>
					</>
				)}
			</div>
		</div>
	);
});

export default NavbarFooter;
