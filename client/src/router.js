
import HomePage from "./views/HomePage.views"
import LoginForm from "./views/LoginPage.views"
import {RegisterForm} from "./views/RegisterPage.views"

let mainRouter = [
    {
        path: "home",
        name: "Trang chủ",
        layout: "/",
        component: HomePage,
        invisible: false
    },

]


export default mainRouter;