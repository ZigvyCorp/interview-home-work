import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx";
import PostPage from "./pages/Post/PostPage.jsx";
import Header from "./components/Header.jsx";

const defaultLayout = (element) => (
	<>
		<Header />
		{element}
	</>
);

export const router = createBrowserRouter([
	{
		path: "/",
		element: defaultLayout(<HomePage />),
	},
	{
		path: "/posts/:postId",
		element: defaultLayout(<PostPage />),
	},
]);
