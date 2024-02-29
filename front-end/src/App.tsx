import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import LoadingPage from "./components/loading_page";
import Page404 from "./components/404_page";
import { DefaultLayout } from "./layout";
const App = () => {
	return (
		<Router>
			<React.Suspense fallback={<LoadingPage />}>
				<Routes>
					{routes.map((route, index) => {
						const Page = route.component;
						let Layout = DefaultLayout;
						// if (route.layout) {
						// 	Layout = route.layout;
						// }
						return (
							<Route
								key={index}
								path={route.path}
								element={
									<Layout
										children={
											<Page />
										}
									></Layout>
								}
							/>
						);
					})}
					<Route path="*" element={<Page404 />} />
				</Routes>
			</React.Suspense>
		</Router>
	);
};

export default App;
