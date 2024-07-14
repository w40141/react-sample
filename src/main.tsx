import React from "react";
import ReactDOM from "react-dom/client";
import { Container, UIProvider } from "@yamada-ui/react";
import { DemoButton } from "./components/Button";
import customTheme from "./themes";

const contentElement = document.getElementById("root") as HTMLElement;

const Demo = () => {
	return (
		<>
			<Container size="sm" variant="with-border-dotted">
				This is a demo component.
			</Container>
			<DemoButton />
			<Container>This is a demo component.</Container>
		</>
	);
};

ReactDOM.createRoot(contentElement).render(
	<React.StrictMode>
		<UIProvider theme={customTheme}>
			<h1>Hello, world!</h1>
			<DemoButton />
			<Demo />
		</UIProvider>
	</React.StrictMode>,
);
