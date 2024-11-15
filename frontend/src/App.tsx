import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "antd/dist/reset.css";
import routes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
