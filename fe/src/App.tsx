import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailPage, Home, NotFoundPage } from "./pages";
import { Header } from "./layouts";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
