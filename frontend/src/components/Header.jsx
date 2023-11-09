import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
    return (
        <div className="container-fluid border align-items-center justify-content-evenly border-secondary-subtle d-flex header">
            <div className="logo">
                <Link
                    to="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    Logo
                </Link>
            </div>
            <SearchBar />
            <div className=""></div>
        </div>
    );
}
