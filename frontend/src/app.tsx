import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { APP_URL } from "./constants/navigation.constant";
import { Layout } from "./layout";
import { Blogs } from "./pages";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path={APP_URL.HOME}
            element={
              <Suspense fallback={<p>Loading....</p>}>
                <Layout />
              </Suspense>
            }
          >
            <Route index element={<Navigate to={APP_URL.BLOGS} replace />} />
            <Route path={APP_URL.BLOGS} element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
