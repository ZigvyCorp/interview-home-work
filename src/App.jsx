import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import PostDetail from "./components/PostDetail";
import ScrollToTopButton from "./components/ScrollToTop";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <div className="fixed w-full z-10">
                    <Header />
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts/:postId" element={<PostDetail />} />
                </Routes>
                <ScrollToTopButton />
            </BrowserRouter>
        </>
    );
}
