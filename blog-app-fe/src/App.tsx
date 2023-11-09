import React, { useCallback, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Header from "./components/header/header";
import Post from "./pages/postDetail";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { selectSearchPerformed } from "./redux/reducers/postSlice";
import { clearPosts } from "./redux/actions/postAction";

function App() {
	const searchPerformed = useAppSelector(selectSearchPerformed);
	const dispatch = useAppDispatch();

	const handleBeforePageReload = useCallback(() => {
		if (searchPerformed) {
			dispatch(clearPosts());
		}
	}, []);

	useEffect(() => {
		window.addEventListener("beforeunload", handleBeforePageReload);
		return () => {
			window.removeEventListener("beforeunload", handleBeforePageReload);
		};
	}, []);

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:slug" element={<Post />} />
			</Routes>
		</div>
	);
}

export default App;
