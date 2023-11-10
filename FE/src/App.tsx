import { DetailPage, HomePage } from "./containers";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <HomePage />,
  },
  {
    path: "/:id",
    element: <DetailPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
