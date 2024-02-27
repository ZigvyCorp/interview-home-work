import className from "classnames/bind";
import style from "./Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const cx = className.bind(style);
function Header() {
  return (
    <div className={cx("header-container")}>
      <div className={cx("header-logo")}>
        <h5>Logo</h5>
      </div>
      <div className={cx("header-blog")}>
        <h5>Blog</h5>
      </div>
      <div className={cx("header-user-container")}>
        <div>
          <h6>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </h6>
        </div>
        <div>
          <h5>Adam Levine</h5>
        </div>
      </div>
    </div>
  );
}

export default Header;
