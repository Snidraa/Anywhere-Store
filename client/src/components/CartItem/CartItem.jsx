import { useRef, useState } from 'react';
import { FaRegCircleXmark } from 'react-icons/fa6';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useMediaQueries } from '../../Hooks/useMediaQueries';
import styles from './CartItem.module.scss';

const CartItem = props => {
	const { item, index, incrementCount, decrementCount, removeItem } = { ...props };
	console.log(`CartItem ${index} rendered`);
	const { price } = { ...item.device };
	const CartItemCounter = useRef(null);
	const [subTotal, setSubTotal] = useState(price * item.count);
	const { isBigScreen } = useMediaQueries();

	const setCount = value => {
		const newCount = Number(value);
		setSubTotal(price * newCount);
	};

	const increment = () => {
		const prevValue = CartItemCounter.current.value;
		const step = Number(CartItemCounter.current.step);
		if (parseInt(prevValue) === parseInt(CartItemCounter.current.max)) return null;
		CartItemCounter.current.value = Number(prevValue) + step;
		incrementCount(item, step);
		setCount(CartItemCounter.current.value);
	};

	const decrement = () => {
		const prevValue = CartItemCounter.current.value;
		const step = Number(CartItemCounter.current.step);
		if (parseInt(prevValue) === parseInt(CartItemCounter.current.min)) return null;
		CartItemCounter.current.value = Number(prevValue) - step;
		decrementCount(item, step);
		setCount(CartItemCounter.current.value);
	};

	return (
		<tr className={styles.cartItem}>
			<td className={styles.itemInfo}>
				<img src={item.device.img} alt="good's image" />
				<div>
					{item.device.name},&nbsp;
					{item.device.info ? (
						item.device.info.map(infoItem => (
							<div key={infoItem.title}>
								<span>{infoItem.title}: </span>
								<span>{infoItem.description},&nbsp;</span>
							</div>
						))
					) : (
						<p>No info</p>
					)}
				</div>
			</td>
			{!isBigScreen && <td className={styles.title}>Price</td>}
			{!isBigScreen && <td className={styles.title}>Qty</td>}
			{!isBigScreen && <td className={styles.title}>Subtotal</td>}
			{!isBigScreen && <td className={styles.title}></td>}
			<td className={styles.price}>${price}</td>
			<td className={styles.Qty}>
				<div className={styles.Qty_container}>
					<MdKeyboardArrowDown className={styles.Qty_button} onClick={decrement} />
					<input
						ref={CartItemCounter}
						className={styles.Qty_textField}
						type='number'
						id='count'
						name='count'
						step='1'
						min='1'
						max='100'
						defaultValue={item.count}
						readOnly
					/>
					<MdKeyboardArrowUp className={styles.Qty_button} onClick={increment} />
				</div>
			</td>
			<td className={styles.subtotal}>${subTotal}</td>
			<td className={styles.actions}>
				<FaRegCircleXmark className={styles.actions_close} onClick={() => removeItem(item.device.id)} />
			</td>
		</tr>
	);
};

export default CartItem;
