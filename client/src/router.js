
import HomePage from "./views/HomePage.views"
import LoginPage from "./views/LoginPage.views"
import RegisterPage from "./views/RegisterPage.views"

let mainRouter = [
    {
        path: "home",
        name: "Trang chủ",
        layout: "/",
        component: HomePage,
        invisible: false
    },
    {
        path: "login",
        name: "Đăng nhập",
        layout: "/",
        component: LoginPage,
        invisible: false
    },
    {
        path: "register",
        name: "Đăng kí",
        layout: "/",
        component: RegisterPage,
        invisible: false
    },
    // {
    //     path: "create-post",
    //     name: "Tạo bài viết",
    //     layout: "/",
    //     component: CreatePage,
    //     invisible: false
    // },

    // {
    //     path: "update-post",
    //     name: "Chỉnh sửa bài viết",
    //     layout: "/",
    //     component: CreatePage,
    //     invisible: false
    // },

]


export default mainRouter;