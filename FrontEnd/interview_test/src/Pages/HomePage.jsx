import { Outlet } from "react-router"
import Header from "../Components/Header"

const HomePage = () => {
  return (
    <div className="pb-[20px]">
        <Header />
        <Outlet />
    </div>
  )
}

export default HomePage
