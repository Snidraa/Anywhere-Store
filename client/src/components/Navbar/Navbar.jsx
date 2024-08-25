import styles from './Navbar.module.scss';
import NavbarFooter from './NavbarFooter/NavbarFooter';
import NavbarHeader from './NavbarHeader/NavbarHeader';

const Navbar = () => {
	return (
		<header className={styles.navbar}>
			<NavbarHeader />
			<NavbarFooter />
		</header>
	);
};

export default Navbar;
