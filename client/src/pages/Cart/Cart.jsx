import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CartForm from '../../components/CartForm/CartForm';
import CartList from '../../components/CartList/CartList';
import styles from './Cart.module.scss';

const Cart = () => {
	return (
		<main className={styles.wrapper}>
			<div className={styles.container}>
				<Breadcrumbs pathname='Shopping Cart' />
				<h1>Shopping Cart</h1>
				<div className={styles.content}>
					<CartList />
					<CartForm />
				</div>
			</div>
		</main>
	);
};

export default Cart;
