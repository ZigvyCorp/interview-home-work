import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Root from './routes/root.jsx'
import ErrorPage from './routes/error-page.jsx'
import ListPost from './routes/list-post.jsx'
import PostDetail from './routes/post-detail.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ListPost />,
      },
      {
        path: "/:postId",
        element: <PostDetail />,
      }
    ]

  }
]);

import './index.css'


const sagaMiddleware = createSagaMiddleware()
const middlewares = applyMiddleware(sagaMiddleware)
const composed = composeWithDevTools(middlewares)

const store = createStore(rootReducer, composed)
sagaMiddleware.run(rootSaga)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)

