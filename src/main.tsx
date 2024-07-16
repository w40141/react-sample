import ReactDOM from "react-dom/client";
import App from "./components/App";

const contentElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(contentElement).render(<App />);
