import ReactDOM from "react-dom/client";
import React from "react";
import MyStore from "./stores";
import App from "./routes";
import MyUI from "./themes";

const contentElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(contentElement).render(
	<React.StrictMode>
		<MyUI>
			<MyStore>
				<App />
			</MyStore>
		</MyUI>
	</React.StrictMode>,
);
