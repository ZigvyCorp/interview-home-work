import "./NavBar.scss"
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar-container"  >
            <ul>
                <CustomLink to="/">Blogs</CustomLink>
            </ul>
        </nav>
    );
}
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props} >{children}</Link>
        </li>
    )
}

export default Navbar;
