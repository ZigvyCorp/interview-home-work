import { Layout, Row, Col } from "antd";
import styles from "./header.module.css";
import HeaderLogo from "./header-logo.component";
import HeaderBlog from "./header-blog.component";
import HeaderUser from "./header-user.component";
const { Header: HeaderLayout } = Layout;
const Header = () => {
  return (
    <HeaderLayout className={styles.header}>
      <Row className={styles.row} gutter={16}>
        <Col
          // style={{ justifyContent: "flex-start" }}
          span={10}
          className={styles.column}
        >
          <HeaderLogo />
        </Col>
        <Col span={4} className={styles.column}>
          <HeaderBlog />
        </Col>
        <Col span={10} className={styles.column}>
          <HeaderUser />
        </Col>
      </Row>
    </HeaderLayout>
  );
};
export default Header;
