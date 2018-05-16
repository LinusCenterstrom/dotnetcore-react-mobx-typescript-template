import { observable, action } from "mobx";

export class CounterStore {
	@observable count: number;
	constructor(initialCount: number) {
		this.count = initialCount;
	}

	@action
	Increment() {
		this.count++;
	}

	@action
	Decrement() {
		this.count--;
	}
}
