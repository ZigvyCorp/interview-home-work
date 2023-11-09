import DetailPage from '../pages/DetailPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import SignInPage from '../pages/SignInPage'
import SignUpPage from '../pages/SignUpPage'

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/detail',
        page: DetailPage,
        isShowHeader: true
    },
    {
        path: '/signIn',
        page: SignInPage,
        isShowHeader: false
    },
    {
        path: '/signUp',
        page: SignUpPage,
        isShowHeader: false
    },
    {
        path: '*',
        page: NotFoundPage
    }
]