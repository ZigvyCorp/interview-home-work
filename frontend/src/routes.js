import DetailPage from "./pages/DetailPage"
import HomePage from "./pages/HomePage"

const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/post_detail',
        element: <DetailPage />
    }
]

export default routes