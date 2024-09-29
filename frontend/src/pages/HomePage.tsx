import { useState } from "react";
import Post from "../components/Post";
import SearchBar from "../components/SearchBar";

function HomePage() {

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const handleSearch = (value: string) => {
        setSearchTerm(value);
        setCurrentPage(1);
    }

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <Post searchTerm={searchTerm} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
    );
}

export default HomePage;
