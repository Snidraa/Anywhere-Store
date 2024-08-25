import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQueries } from '../../Hooks/useMediaQueries';
import { Context } from '../../store/Context';
import { SHOP_ROUTE } from '../../utils/consts';
import { BlackButton, GrayButton } from '../Buttons';
import CartItem from '../CartItem/CartItem';
import styles from './CartList.module.scss';

const CartList = observer(() => {
	const { user } = useContext(Context);
	const navigate = useNavigate();
	const { isBigScreen } = useMediaQueries();

	const toShopPage = () => {
		navigate(SHOP_ROUTE);
	};

	const removeCartItem = id => {
		const cart = user.cart.filter(item => item.device.id !== id);
		user.setCart(cart);
	};

	const clearCart = () => {
		user.setCart([]);
	};

	return (
		<div className={styles.cartList}>
			<table>
				{isBigScreen && (
					<thead className={styles.cartList_header}>
						<tr>
							<th>Item</th>
							<th>Price</th>
							<th>Qty</th>
							<th>Subtotal</th>
							<th></th>
						</tr>
					</thead>
				)}
				<tbody>
					{user.cart.map((item, index) => (
						<CartItem
							key={item.device.id}
							item={item}
							index={index}
							incrementCount={user.incrementCount}
							decrementCount={user.decrementCount}
							removeItem={removeCartItem}
						/>
					))}
				</tbody>
			</table>
			<div className={styles.cartList_buttons}>
				<GrayButton onClick={toShopPage}>Continue Shopping</GrayButton>
				<BlackButton onClick={clearCart}>Clear Shopping Cart</BlackButton>
				{/* <button onClick={() => console.log(user.cart)}>Update Shopping Cart</button> */}
			</div>
		</div>
	);
});

export default CartList;
