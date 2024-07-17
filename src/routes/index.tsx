import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = () => {
	return <h2>Home</h2>;
};

const About = () => {
	return <h2>About</h2>;
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/about",
		element: <About />,
	},
]);

const App: React.FC = () => {
	return <RouterProvider router={router} />;
};

export default App;
