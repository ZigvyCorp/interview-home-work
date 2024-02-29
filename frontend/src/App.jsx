import { HashRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components";
import { HomePage } from "./pages/home";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<AppLayout />}>
						<Route index element={<HomePage />}/>
				</Route>
			</Routes>
		</HashRouter>
	)
}

export default App;
