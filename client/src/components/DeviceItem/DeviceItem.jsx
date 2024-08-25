import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { FaCartPlus, FaCartShopping } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { likeGray, likeRed } from '../../assets';
import { isDeviceInCart } from '../../middlewares/isDeviceInCart';
import { isDeviceInWishlist } from '../../middlewares/isDeviceInWishlist';
import { Context } from '../../store/Context';
import { CART_ROUTE, DEVICE_ROUTE } from '../../utils/consts';
import { BlueButton, GreenButton } from '../Buttons';
// import Rating from '../StarRating/Rating';
import Rating from '../Rating/Rating';
import styles from './DeviceItem.module.scss';

const DeviceItem = observer(props => {
	const { user } = useContext(Context);
	const { device } = { ...props };
	// const [rating, setRating] = useEffect(device.rating);
	const navigate = useNavigate();

	const toDevicePage = () => {
		navigate(DEVICE_ROUTE + '/' + device.id);
	};

	const addToWishlist = () => {
		user.setWishlist([...user.wishlist, device]);
	};

	const removeWishlistItem = id => {
		const wishlist = user.wishlist.filter(item => item.id !== id);
		user.setWishlist(wishlist);
	};

	const toCart = () => {
		navigate(CART_ROUTE);
	};

	const addToCart = () => {
		const itemToAdd = { count: 1, device: device };
		user.setCart([...user.cart, itemToAdd]);
	};

	// const ratingChanged = newRating => {
	// 	console.log(newRating);
	// };

	return (
		<div className={styles.deviceItem}>
			<div className={styles.addToWishlist}>
				{isDeviceInWishlist(user.wishlist, device.id) ? (
					<img src={likeRed} alt='' onClick={() => removeWishlistItem(device.id)} />
				) : (
					<img src={likeGray} alt='' onClick={addToWishlist} />
				)}
			</div>
			<img src={device.img} alt='' onClick={toDevicePage} />
			<div className={styles.deviceItemContent}>
				<div className={styles.deviceItemContent_Header}>
					<p className={styles.deviceItemContent_Name} onClick={toDevicePage}>
						{device.name}
					</p>
					<div className={styles.deviceItemContent_RatingRow}>
						{/* <StarRating /> */}
						<Rating rating={device.rating} type='indicator' />
						<span>
							{device.rating} ({device.ratesCount})
						</span>
						{/* <Rating /> */}
					</div>
				</div>
				<div className={styles.deviceItemContent_Footer}>
					<p className={styles.deviceItemContent_Price}>${device.price}</p>
					{isDeviceInCart(user.cart, device.id) ? (
						<GreenButton onClick={toCart}>
							<FaCartShopping /> Show
						</GreenButton>
					) : (
						<BlueButton onClick={addToCart}>
							<FaCartPlus /> Add
						</BlueButton>
					)}
				</div>
			</div>
		</div>
	);
});

export default DeviceItem;
