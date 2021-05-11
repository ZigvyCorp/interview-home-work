import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../images/zigvy.png";

class Navbar extends Component {
    state = {
        isOpen: false,
    };
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Zigvy" />
                        </Link>
                        <button
                            type="button"
                            className="nav-btn"
                            onClick={this.handleToggle}
                        >
                            <FaAlignRight className="nav-icon"> </FaAlignRight>
                        </button>
                    </div>
                    <ul
                        className={
                            this.state.isOpen
                                ? "nav-links show-nav"
                                : "nav-links"
                        }
                    >
                        <li>
                            <Link to="/account"> Huynh Kim Phat </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {};

export default Navbar;
