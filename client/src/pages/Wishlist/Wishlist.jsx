import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQueries } from '../../Hooks/useMediaQueries';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import BlackButton from '../../components/Buttons/BlackButton';
import GrayButton from '../../components/Buttons/GrayButton';
import WishlistItem from '../../components/WishlistItem/WishlistItem';
import { Context } from '../../store/Context';
import { SHOP_ROUTE } from '../../utils/consts';
import styles from './Wishlist.module.scss';

const Wishlist = observer(() => {
	const { user } = useContext(Context);
	const navigate = useNavigate();
	const { isBigScreen, isSmallScreen } = useMediaQueries();

	const toShopPage = () => {
		navigate(SHOP_ROUTE);
	};

	const removeWishlistItem = id => {
		const wishlist = user.wishlist.filter(item => item.id !== id);
		user.setWishlist(wishlist);
	};

	const clearWishlist = () => {
		user.setWishlist([]);
	};

	return (
		<main className={styles.wrapper}>
			<div className={styles.container}>
				<Breadcrumbs pathname='Wishlist' />
				<h1>Wishlist</h1>
				<div className={styles.content}>
					<div className={styles.cartList}>
						<table>
							{(isBigScreen || isSmallScreen) && (
								<thead className={styles.cartList_header}>
									<tr>
										<th>Item</th>
										<th>Price</th>
										<th>Qty</th>
										<th></th>
									</tr>
								</thead>
							)}
							<tbody>
								{user.wishlist.map((item, index) => (
									<WishlistItem key={item.id} item={item} index={index} removeItem={removeWishlistItem} />
								))}
							</tbody>
						</table>
						<div className={styles.cartList_buttons}>
							<GrayButton className={styles.continueButton} onClick={toShopPage}>
								Continue Shopping
							</GrayButton>
							<BlackButton onClick={clearWishlist}>Clear Wishlist</BlackButton>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
});

export default Wishlist;
