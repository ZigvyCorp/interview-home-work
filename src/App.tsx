import { Layout } from "antd"
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import PostDetails from "./components/posts/post-detail/post-detail"
import Posts from "./components/posts/posts"
import MainLayout from "./layout/main/main-layout"
import { ROUTE_PATHS } from "./utils/route-path"

function App() {
	return (
		<Layout className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainLayout children={<Posts />} />} />
					<Route path={ROUTE_PATHS.PostDetail} element={<MainLayout children={<PostDetails />} />} />
				</Routes>
			</BrowserRouter>
		</Layout>
	)
}

export default App
