import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
	constructor() {
		this._devices = [
			{
				id: 1,
				name: 'Iphone 12',
				price: 1500,
				rating: 5,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
				info: [
					{ title: 'screen', description: '6inch' },
					{ title: 'CPU', description: 'M1' },
					{ title: 'RAM', description: '8gb' },
				],
			},
			{
				id: 2,
				name: 'Iphone 12',
				price: 1500,
				rating: 4.9,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
				info: [
					{ title: 'screen', description: '6inch' },
					{ title: 'CPU', description: 'M1' },
					{ title: 'RAM', description: '8gb' },
				],
			},
			{
				id: 3,
				name: 'Iphone 12',
				price: 1500,
				rating: 4.8,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
				info: [
					{ title: 'screen', description: '6inch' },
					{ title: 'CPU', description: 'M1' },
					{ title: 'RAM', description: '8gb' },
				],
			},
			{
				id: 4,
				name: 'Iphone 12',
				price: 1500,
				rating: 4.7,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
				info: [
					{ title: 'screen', description: '6inch' },
					{ title: 'CPU', description: 'M1' },
					{ title: 'RAM', description: '8gb' },
				],
			},
			{
				id: 5,
				name: 'Iphone 12',
				price: 1500,
				rating: 4.6,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
				info: [
					{ title: 'screen', description: '6inch' },
					{ title: 'CPU', description: 'M1' },
					{ title: 'RAM', description: '8gb' },
				],
			},
			{
				id: 6,
				name: 'Iphone 12',
				price: 1500,
				rating: 4.5,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
				info: [
					{ title: 'screen', description: '6inch' },
					{ title: 'CPU', description: 'M1' },
					{ title: 'RAM', description: '8gb' },
				],
			},
			{
				id: 7,
				name: 'Iphone 12',
				price: 1500,
				rating: 4.4,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
				info: [
					{ title: 'screen', description: '6inch' },
					{ title: 'CPU', description: 'M1' },
					{ title: 'RAM', description: '8gb' },
				],
			},
			{
				id: 8,
				name: 'Iphone 12',
				price: 1500,
				rating: 4.3,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
				info: [
					{ title: 'screen', description: '6inch' },
					{ title: 'CPU', description: 'M1' },
					{ title: 'RAM', description: '8gb' },
				],
			},
			{
				id: 9,
				name: 'Iphone 12',
				price: 1500,
				rating: 4.2,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
				info: [
					{ title: 'screen', description: '6inch' },
					{ title: 'CPU', description: 'M1' },
					{ title: 'RAM', description: '8gb' },
				],
			},
			{
				id: 10,
				name: 'Iphone 12',
				price: 1500,
				rating: 4.5,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
				info: [
					{ title: 'screen', description: '6inch' },
					{ title: 'CPU', description: 'M1' },
					{ title: 'RAM', description: '8gb' },
				],
			},
		];
		this._brands = [
			{ id: 1, name: 'Intel' },
			{ id: 2, name: 'HP' },
			{ id: 3, name: 'MSI' },
			{ id: 4, name: 'ASUS' },
			{ id: 5, name: 'Gigabyte' },
			{ id: 6, name: 'AsRock' },
			{ id: 7, name: 'Dell' },
			{ id: 8, name: 'Kingston' },
			{ id: 9, name: 'Thermaltake' },
			{ id: 10, name: 'AMD' },
			{ id: 11, name: 'Corsair' },
		];
		this._types = [
			{ id: 1, name: 'CPUS' },
			{ id: 2, name: 'Graphic Cards' },
			{ id: 3, name: 'Motherboards' },
			{ id: 4, name: 'RAM (Memory)' },
			{ id: 5, name: 'HDD / SSD' },
			{ id: 6, name: 'Power Supplies' },
			{ id: 7, name: 'Cases' },
			{ id: 8, name: 'Cooling' },
			{ id: 9, name: 'Add On Cards' },
			{ id: 10, name: 'Keyboards / Mice' },
			{ id: 11, name: 'Speakers / Headsets' },
			{ id: 12, name: 'Software' },
		];
		this._selectedType = {};
		this._selectedBrand = {};

		makeAutoObservable(this);
	}

	setDevices(devices) {
		this._devices = devices;
	}

	get devices() {
		return this._devices;
	}

	setBrands(brands) {
		this._brands = brands;
	}

	get brands() {
		return this._brands;
	}

	setTypes(types) {
		this._types = types;
	}

	get types() {
		return this._types;
	}

	setSelectedType(type) {
		this._selectedType = type;
	}

	get selectedType() {
		return this._selectedType;
	}

	setSelectedBrand(brand) {
		this._selectedBrand = brand;
	}

	get selectedBrand() {
		return this._selectedBrand;
	}
}
