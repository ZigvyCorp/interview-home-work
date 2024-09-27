import { Routes, Route } from "react-router-dom";
import * as Pages from "../pages";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Pages.HomePage/>}/>
            <Route path="/post/:postId" element={<Pages.PostDetailPage/>}/>
            <Route path="/search" element={<Pages.SearchResultPage/>}/>
        </Routes>
    );
}