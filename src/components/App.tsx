import React from "react";
import { UIProvider } from "@yamada-ui/react";
import { CountButton, Counter, ResetButton } from "./Button";
import { Provider } from "jotai";
import { myStore } from "../stores";
import "./styles.css";

export default function App() {
	return (
		<>
			<React.StrictMode>
				<UIProvider>
					<Provider store={myStore}>
						<Counter />
					</Provider>
					<CountButton />
					<ResetButton />
				</UIProvider>
			</React.StrictMode>
		</>
	);
}
