import "./css/site.css";
import "bootstrap";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { createBrowserHistory } from "history";
import configureStore from "./configureStore";
import { ApplicationStore, IInitialStoreState } from "./store";
import * as RoutesModule from "./routes";
import { Provider } from "mobx-react";
import { Router } from "react-router-dom";

let routes = RoutesModule.routes;

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href")!;
const browserHistory = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = (window as any).initialMobxState as IInitialStoreState;
const { store, history } = configureStore(browserHistory, initialState);

function renderApp() {
	// This code starts up the React app when it runs in a browser. It sets up the routing configuration
	// and injects the app into a DOM element.
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<Router history={history} children={routes} />
			</Provider>
		</AppContainer>,
		document.getElementById("react-app")
	);
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
	module.hot.accept("./routes", () => {
		routes = require<typeof RoutesModule>("./routes").routes;
		renderApp();
	});
}
