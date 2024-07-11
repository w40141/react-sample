import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import Todo from "./Todo";

const contentElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(contentElement).render(
	<React.StrictMode>
		<App />
		<Todo />
	</React.StrictMode>,
);
