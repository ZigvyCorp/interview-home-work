import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
const PostPage = lazy(() => import("./pages/posts/PostPage"));
const PostPageDatail = lazy(() => import("./pages/posts/PostDetail"));
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <PostPage />
          </Suspense>
        }
      />
      <Route
        path="/:id"
        element={
          <Suspense fallback={<Loading />}>
            <PostPageDatail />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Loading />}>
            <PostPageDatail />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
