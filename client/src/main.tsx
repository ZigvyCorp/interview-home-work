import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import vi_VN from "antd/locale/vi_VN";
import Authentication from "./components/authentication/Authentication.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ConfigProvider locale={vi_VN}>
      <QueryClientProvider client={queryClient}>
        <Authentication>
          <App />
        </Authentication>
      </QueryClientProvider>
    </ConfigProvider>
  </BrowserRouter>
);
