import { Layout, Button, Row, Col } from "antd";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import Logo from "~/assets/logo/logo.png";
import { Link } from "react-router-dom";
import config from "~/config";

const { Header: Navbar } = Layout;
const cx = classNames.bind(styles);
function Header() {
  return (
    <Navbar className={cx("wrapper")}>
      <Row justify="space-between">
        <Col lg={6} xs={24}>
          <Link to={config.routes.home} className={cx("logo")}>
            <img src={Logo} alt="Logo" />
          </Link>
        </Col>
        <Col xs={0} lg={10}>
          <h3 className={cx("blog")}>Blogs</h3>
        </Col>
        <Col lg={8} xs={0} >
          <div className={cx("user-info")}>
            <Button type="primary" style={{ marginRight: "10px" }}>
              Sign in
            </Button>
            <Button>Sign up</Button>
          </div>
        </Col>
      </Row>
    </Navbar>
  );
}

export default Header;
