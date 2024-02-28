import { Link } from "react-router-dom";
import Navbar from "../Nav/NavBar";
import userimg from "../../assets/defaultimg.png"
import "./Header.scss";

function Header() {
    return (
        <div
            className="header-container"
        >
            <div className="header-left-container">
                <Link to="/" className="header-title">
                    Logo
                </Link>
            </div>
            <div className="header-center-container">
                <Navbar />
            </div>
            <div className="header-right-container  ">
                <div className="right-content">
                    <div className="right-content-img"><img src={userimg} width="40" height="40" /></div>
                    <div className="right-content-user">
                        Nguyen Hoang Minh
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
