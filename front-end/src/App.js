import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import routes from "./routes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            path={route.path}
            element={<Layout>{route.element}</Layout>}
            index={index}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
