import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { AppLayout } from "src/layouts";
import { ROUTES } from "src/constant/navigation.constant";
import { Post, Posts } from "src/pages";
import { NotFound } from "src/components";

const Root = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<AppLayout />}>
            <Route index element={<Posts />} />
            <Route path={ROUTES.POSTS} element={<Posts />} />
            <Route path={ROUTES.POST} element={<Post />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};
export default Root;
