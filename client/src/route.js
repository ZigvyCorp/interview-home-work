import React, { lazy } from 'react'
// import NotFoundPage from "./pages/404/components/App";

import GlobalLayOut from './common/GlobalLayout'
import { BlankLayout } from './common/BlankLayout'

const HomePage = lazy(() => import('./pages/home'))
const MapPage = lazy(() => import('./pages/write_post'))
const SignIn = lazy(() => import('./pages/sign_in'))
const SignUp = lazy(() => import('./pages/sign_in/sign_up'))
const PostDetail = lazy(() => import('./pages/detail_post'))

const route = [
  {
    path: '/',
    exact: true,
    auth: false,
    layout: BlankLayout,
    main: props => <SignIn router={props} />,
  },
  {
    path: '/register',
    exact: true,
    auth: false,
    layout: BlankLayout,
    main: props => <SignUp router={props} />,
  },
  {
    path: '/posts',
    exact: true,
    auth: false,
    layout: GlobalLayOut,
    main: props => <HomePage router={props} />,
  },
  {
    path: '/writer',
    exact: true,
    auth: false,
    layout: GlobalLayOut,
    main: props => <MapPage router={props} />,
  },
  {
    path: '/post/:postId',
    exact: true,
    auth: false,
    layout: GlobalLayOut,
    main: props => <PostDetail router={props} />,
  },
]

export default route
