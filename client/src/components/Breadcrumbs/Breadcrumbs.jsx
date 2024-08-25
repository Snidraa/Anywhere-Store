import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../../utils/consts';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = props => {
	const { pathname } = { ...props };

	return (
		<div className={styles.breadcrumbs}>
			<NavLink to={SHOP_ROUTE} className={styles.homeLink}>
				Home
			</NavLink>
			<span>›</span> {pathname}
		</div>
	);
};

export default Breadcrumbs;
