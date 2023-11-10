import Footer from "../ui/Footer"
import Header from "../ui/Header"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout
