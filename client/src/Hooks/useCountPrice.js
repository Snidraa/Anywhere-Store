import { useContext } from 'react';
import { Context } from '../store/Context';

export function useCountPrice() {
	const { user } = useContext(Context);
	const subTotal = user.cartSubTotal;
	const GST = Math.round((subTotal - subTotal * (100 / (100 + 12))) * 100) / 100;
	return { subTotal, GST };
}
