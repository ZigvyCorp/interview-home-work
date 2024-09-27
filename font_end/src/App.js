import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Loading from "./page/Loading";
import { QueryClient, QueryClientProvider } from "react-query";
import Detail from "./page/Detail";
import { ToastContainer } from "react-toastify";
const HomePage = React.lazy(() => import("./page/HomePage"));
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Detail />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Suspense>
      </div>
    </QueryClientProvider>
  );
}

export default App;
