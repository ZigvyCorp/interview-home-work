import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Button } from "react-bootstrap";
import Logo from "../assets/icon.png";
import { selectCurrentUser } from "../redux/reducers/userReducer";
import { useSelector } from "react-redux";

const Header: FC = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  const handleLoginClick = () => {
    navigate("/log-in");
  };

  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="row">
          <div className="col">
            <Link
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
            >
              <img src={Logo} alt="Logo Header" height="40" />
            </Link>
          </div>

          <div className="col text-center">
            <Link to="/" className="nav-link px-2 link-secondary ">
              <h3>Blogs</h3>
            </Link>
          </div>
          <div className="d-flex align-items-center col  d-flex justify-content-center ">
            <div>
              {currentUser ? (
                <Dropdown className="flex-shrink-0">
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="text-text-decoration-none d-flex align-items-center  bg-transparent border-0 gap-2"
                  >
                    <img
                      src="https://github.com/mdo.png"
                      alt="mdo"
                      width="32"
                      height="32"
                      className="rounded-circle"
                    />
                    <i className="text-black">{currentUser.name}</i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#"
                      onClick={() => {
                        alert("Logout");
                      }}
                    >
                      Sign out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Button variant="outline-dark" onClick={handleLoginClick}>
                  Login
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
