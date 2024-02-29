import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
export default function WebRoute()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="home" element={<Home/>}/>
                <Route path="post/:postId/details" element={<Details/>}/>
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    )
}