
import PostList from "../components/PostList"
import DefaultLayout from "../components/layouts/defaultLayout/defaultLayout"
import PostDetail from "../components/PostDetail"
import NotFound from "../components/NotFound"

const mapRoutes = [
    { path: '/', component: PostList, layout: DefaultLayout },
    { path: '/detail/:id', component: PostDetail, layout: DefaultLayout },
    { path: '/404', component: NotFound, layout: DefaultLayout },
]

export { mapRoutes } 