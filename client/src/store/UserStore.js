import { action, computed, makeAutoObservable } from 'mobx';

export default class UserStore {
	constructor() {
		this._isAuth = true;
		this._user = {
			id: 1,
			role: 'USER',
		};
		this._wishlist = [
			{
				id: 1,
				name: 'Iphone 12',
				price: 1500,
				rating: 5,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
				info: [
					{ title: 'screen', description: '7inch' },
					{ title: 'CPU', description: 'M1' },
					{ title: 'RAM', description: '8gb' },
				],
			},
			{
				id: 2,
				name: 'Iphone 12',
				price: 1500,
				rating: 5,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
				info: [
					{ title: 'screen', description: '7inch' },
					{ title: 'CPU', description: 'M1' },
					{ title: 'RAM', description: '8gb' },
				],
			},
			{
				id: 3,
				name: 'Iphone 12',
				price: 1500,
				rating: 5,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
				info: [
					{ title: 'screen', description: '7inch' },
					{ title: 'CPU', description: 'M1' },
					{ title: 'RAM', description: '8gb' },
				],
			},
		];
		this._cart = [
			{
				count: 2,
				device: {
					id: 1,
					name: 'Iphone 12',
					price: 1500,
					rating: 5,
					ratesCount: 20,
					img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
					info: [
						{ title: 'screen', description: '7inch' },
						{ title: 'CPU', description: 'M1' },
						{ title: 'RAM', description: '8gb' },
					],
				},
			},
			{
				count: 1,
				device: {
					id: 2,
					name: 'Iphone 15',
					price: 2000,
					rating: 5,
					ratesCount: 20,
					img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
					info: [
						{ title: 'screen', description: '7inch' },
						{ title: 'CPU', description: 'M1' },
						{ title: 'RAM', description: '8gb' },
					],
				},
			},
			{
				count: 3,
				device: {
					id: 3,
					name: 'Iphone 10',
					price: 1000,
					rating: 5,
					ratesCount: 20,
					img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
					info: [
						{ title: 'screen', description: '7inch' },
						{ title: 'CPU', description: 'M1' },
						{ title: 'RAM', description: '8gb' },
					],
				},
			},
		];
		// this._cartSubTotal = this._cart.reduce((acc, curr) => acc + curr.count * curr.device.price, 0);
		makeAutoObservable(this, { cartSubTotal: computed, incrementCount: action, decrementCount: action });
	}

	setIsAuth(bool) {
		this._isAuth = bool;
	}

	setUser(user) {
		this._user = user;
	}

	setWishlist(wishlist) {
		this._wishlist = wishlist;
	}

	setCart(cart) {
		this._cart = cart;
	}

	setCartSubTotal(cartSubTotal) {
		this._cartSubTotal = cartSubTotal;
	}

	get isAuth() {
		return this._isAuth;
	}

	get user() {
		return this._user;
	}

	get wishlist() {
		return this._wishlist;
	}

	get cart() {
		return this._cart;
	}

	get cartSubTotal() {
		return this.cart.reduce((subTotal, item) => subTotal + item.count * item.device.price, 0);
	}

	incrementCount(item, step) {
		item.count += step;
	}

	decrementCount(item, step) {
		item.count -= step;
	}

	// setCountValueOfSelectedDeviceInCart(index, newCount) {
	// 	runInAction(() => {
	// 		this._cart[index].count = newCount;
	// 	});
	// }
}
