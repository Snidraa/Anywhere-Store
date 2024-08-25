export const promocodes = {
	ANYWHERESTORE: 5,
	BLACKFRIDAY: 10,
	NEWYEAR: 15,
	PROMO5: 5,
	PROMO10: 10,
	PROMO15: 15,
};

export function getDiscount(code, subTotal) {
	if (!code || !promocodes[code]) return;
	const discountPercent = promocodes[code];
	const discountAmount = (subTotal * discountPercent) / 100;
	const discount = {
		percent: discountPercent,
		amount: discountAmount,
	};
	return discount;
}
