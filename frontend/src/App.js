import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store"; // Corrected import
import HomePage from "./pages/HomePage.js";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add other routes here */}
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
