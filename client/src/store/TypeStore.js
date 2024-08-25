import { makeAutoObservable } from 'mobx';

export default class TypeStore {
	constructor() {
		makeAutoObservable(this);
	}
}
