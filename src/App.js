import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeTemplate from "./Template/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import MyBlog from "./pages/MyBlog/MyBlog";
import "./App.css";
import Detail from "./pages/Detail/Detail";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomeTemplate />,
			children: [
				{ index: true, element: <Home /> },
				{
					path: "myblog",
					element: <MyBlog />,
				},
				{
					path: "/:postId",
					element: <Detail />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}
export default App;
