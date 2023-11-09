import { Routes, Route } from "react-router-dom";
import pageRouter from "./router";

function App() {
  return (
    <>
      <Routes>
        {pageRouter.map((route, index) => {
          const Page = route.page;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
    </>
  );
}

export default App;
