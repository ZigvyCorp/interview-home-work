import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Post from "./components/Post";
import Navbar from "./components/Navbar";
import PostDetail from "./pages/PostDetail";

function App() {
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Outlet />
      </QueryClientProvider>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Post />,
        },
        {
          path: "/postDetail",
          element: <PostDetail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
