import { Search } from "../components/Search/Search";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../page/HomePage";
import { SearchPage } from "../page/SearchPage";
import { PostDetailPage } from "../page/PostDetailPage";
export const Layout = () => {
    
  return (
    <div className="flex w-11/12  h-full flex-row ">
      <div className="h-1/4 flex ">
        <Search />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/post/:id" element={<PostDetailPage />}/>
      </Routes>
    </div>
  );
};
