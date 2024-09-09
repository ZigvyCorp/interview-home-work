import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_URL } from "./constants/navigation.constant";
import { Layout } from "./layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path={APP_URL.HOME}
            element={
              <Suspense fallback>
                <Layout />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
