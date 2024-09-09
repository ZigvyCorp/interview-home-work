import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_URL } from "./constants/navigation.constant";
import { Layout } from "./layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={APP_URL.HOME}
          element={
            <Suspense>
              <Layout />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
