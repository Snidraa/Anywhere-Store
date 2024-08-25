import { makeAutoObservable } from 'mobx';

export default class BrandStore {
	constructor() {
		makeAutoObservable(this);
	}
}
