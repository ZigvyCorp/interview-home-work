import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import "./Header.scss";
import Avatar from "../../assets/images/avatar.png";
import { Dropdown, Menu } from "antd";
import authSlice from "../../services/auth/auth.slice";
import { useDispatch } from "react-redux";

function Header() {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem("userID");
        localStorage.removeItem("accessToken");
        dispatch(authSlice.actions.logout());
        navigate("/auth/login");
    };
    const menu = (
        <Menu>
            <Menu.Item>
                <span target="_blank" onClick={handleLogout}>
                    Logout
                </span>
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <header className="header">
                <div className="header__title">
                    <h2 className="header__title-content">Blog Zigvy</h2>
                </div>
                <div className="header__user">
                    <span className="header__user-name">Huynh Long Phap</span>
                    <img
                        className="header__user-img"
                        src={Avatar}
                        alt="Avatar"
                    />
                    <Dropdown
                        overlay={menu}
                        placement="bottomRight"
                        arrow={{ pointAtCenter: true }}
                    >
                        <DownOutlined className="header__user-dropdown" />
                    </Dropdown>
                </div>
            </header>
        </>
    );
}

export default Header;
