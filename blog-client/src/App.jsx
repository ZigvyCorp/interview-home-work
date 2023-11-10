import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router";
import { Container } from "reactstrap";

function App() {
	return (
		<Container>
			<RouterProvider router={router} />
		</Container>
	);
}

export default App;
