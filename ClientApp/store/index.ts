import { CounterStore } from "./Counter";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";

export interface IInitialStoreState {
	counter: number;
}

export class ApplicationStore {
	counter: CounterStore;
	routing: RouterStore;

	constructor(state?: IInitialStoreState) {
		if (!state) {
			state = {
				counter: 0
			};
		}

		this.counter = new CounterStore(state.counter);
		this.routing = new RouterStore();
	}

	toJson() {
		return {
			counter: this.counter.count
		} as IInitialStoreState;
	}
}
