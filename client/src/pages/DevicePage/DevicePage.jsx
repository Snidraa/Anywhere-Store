import { observer } from 'mobx-react-lite';
import { useContext, useRef } from 'react';
import { FaCartPlus, FaCartShopping } from 'react-icons/fa6';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { likeGray, likeRed } from '../../assets';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { BlueButton, GreenButton } from '../../components/Buttons';
import Reviews from '../../components/Comments/Reviews';
import Rating from '../../components/Rating/Rating';
import { isDeviceInCart } from '../../middlewares/isDeviceInCart';
import { isDeviceInWishlist } from '../../middlewares/isDeviceInWishlist';
import { Context } from '../../store/Context';
import { CART_ROUTE } from '../../utils/consts';
import styles from './DevicePage.module.scss';

const DevicePage = observer(() => {
	const { user } = useContext(Context);
	const device = {
		id: 1,
		name: 'Iphone 12',
		price: 1500,
		rating: 4.5,
		ratesCount: 20,
		img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
		info: [
			{ id: 1, title: 'Оперативная память', description: '5 гб' },
			{ id: 2, title: 'Камера', description: '12 мп' },
			{ id: 3, title: 'Процессор', description: 'Пентиум 3' },
			{ id: 4, title: 'Кол-во ядер', description: '2' },
			{ id: 5, title: 'Аккумулятор', description: '4000 мАч' },
		],
	};

	const info = device.info;
	const DevicePageCounter = useRef(null);

	const navigate = useNavigate();

	const toCart = () => {
		navigate(CART_ROUTE);
	};

	const increment = () => {
		const prevValue = DevicePageCounter.current.value;
		const step = Number(DevicePageCounter.current.step);
		if (parseInt(prevValue) === parseInt(DevicePageCounter.current.max)) return null;
		DevicePageCounter.current.value = Number(prevValue) + step;
	};

	const decrement = () => {
		const prevValue = DevicePageCounter.current.value;
		const step = Number(DevicePageCounter.current.step);
		if (parseInt(prevValue) === parseInt(DevicePageCounter.current.min)) return null;
		DevicePageCounter.current.value = Number(prevValue) - step;
	};

	const addToCart = () => {
		const count = Number(DevicePageCounter.current.value);
		const itemToAdd = { count: count, device: device };
		user.setCart([...user.cart, itemToAdd]);
	};

	const addToWishlist = () => {
		user.setWishlist([...user.wishlist, device]);
	};

	const removeWishlistItem = id => {
		const wishlist = user.wishlist.filter(item => item.id !== id);
		user.setWishlist(wishlist);
	};

	console.log(user);
	return (
		<main className={styles.wrapper}>
			<div className={styles.container}>
				<Breadcrumbs pathname={device.name} />
				<div className={styles.content}>
					<div className={styles.content_header}>
						<img src={device.img} alt='device image' />
						<div className={styles.ratingRow}>
							<Rating rating={device.rating} type='indicator' />
							{device.rating} ({device.ratesCount})
						</div>
					</div>
					<div className={styles.content_footer}>
						<div className={styles.content_footerActions}>
							<div className={styles.addToWishlist}>
								{isDeviceInWishlist(user.wishlist, device.id) ? (
									<img src={likeRed} alt='like red' onClick={() => removeWishlistItem(device.id)} />
								) : (
									<img src={likeGray} alt='like gray' onClick={addToWishlist} />
								)}
							</div>
							<p className={styles.devicePrice}>
								On Sale from <span className={styles.devicePriceValue}>${device.price}</span>
							</p>
							{isDeviceInCart(user.cart, device.id) ? (
								<GreenButton onClick={toCart}>
									<FaCartShopping /> Show
								</GreenButton>
							) : (
								<>
									<div className={styles.DevicePageCounter}>
										<MdKeyboardArrowDown className={styles.DevicePageCounter_button} onClick={decrement} />
										<input
											ref={DevicePageCounter}
											className={styles.DevicePageCounter_textField}
											type='number'
											id='goodsCount'
											name='Goods count'
											step='1'
											min='1'
											max='100'
											defaultValue={1}
											readOnly
										/>
										<MdKeyboardArrowUp className={styles.DevicePageCounter_button} onClick={increment} />
									</div>
									<BlueButton onClick={addToCart}>
										<FaCartPlus /> Add
									</BlueButton>
								</>
							)}
						</div>
						<div className={styles.content_footerInfo}>
							<p className={styles.deviceName}>{device.name}</p>
							<div className={styles.deviceInfo}>
								{info.map(item => (
									<p key={item.title}>
										• {item.title}: {item.description}
									</p>
								))}
							</div>
						</div>
					</div>
				</div>
				<Reviews deviceId={device.id} userId={user.user.id} />
			</div>
		</main>
	);
});

export default DevicePage;
