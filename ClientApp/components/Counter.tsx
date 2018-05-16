import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { CounterStore } from "../store/Counter";
import { inject, observer } from "mobx-react";
import { ApplicationStore } from "../store";

type CounterProps = {
	counterStore: CounterStore;
};

@observer
class Counter extends React.Component<CounterProps, {}> {
	public render() {
		const { counterStore } = this.props;

		return (
			<div>
				<h1>Counter</h1>

				<p>This is a simple example of a React component.</p>

				<p>
					Current count: <strong>{counterStore.count}</strong>
				</p>

				<button
					onClick={() => {
						counterStore.Increment();
					}}
				>
					Increment
				</button>
			</div>
		);
	}
}

export default inject(({ store }: { store: ApplicationStore }) => ({
	counterStore: store.counter
}))(Counter);
