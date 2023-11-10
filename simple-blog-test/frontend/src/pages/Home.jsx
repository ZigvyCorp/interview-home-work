import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import PostList from "../components/PostList";

export default function Home() {
    return (
        <>
            <Navbar/>
            <Outlet />
        </>
    );
}