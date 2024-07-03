import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const contentElement = document.getElementById("root") as HTMLElement;

const root = createRoot(contentElement);
root.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
