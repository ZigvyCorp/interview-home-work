import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BlogPage, HomePage } from "./pages";
// import Layout from "layout";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from 'store'
import { lazy, Suspense } from "react";
import { Container, Loading } from "components";
const Layout = lazy(() => import('layout'))

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/blog/:id",
      element: <BlogPage />
    }
  ]);
  const persistor = persistStore(store)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={
          <Container className="w-screen h-screen">
            <Loading size='large' />
          </Container>
        }>
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </Suspense>
      </PersistGate>
    </Provider>
  )
}

export default App
