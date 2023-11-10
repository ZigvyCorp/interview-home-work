import { NavLink } from "react-router-dom"
const Header = () => {
    return (
        <div className="container-lg header-container">
            <div className="header__logo ml-3"><img src="/logo.png" alt="" /></div>

            <div className="header__content ">
                <div className="header__links">
                    <NavLink to="/">Posts</NavLink>
                </div>
                <div className="header__account">
                    <p className="text-xl">
                        Hello, xxx
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Header
