import * as StoreModule from "./store";
import { ApplicationStore } from "./store";
import { History } from "history";
import { syncHistoryWithStore } from "mobx-react-router";

export default function configureStore(
	history: History,
	initialState?: StoreModule.IInitialStoreState
) {
	const store = new ApplicationStore(initialState);
	return {
		history: syncHistoryWithStore(history, store.routing),
		store
	};
}
