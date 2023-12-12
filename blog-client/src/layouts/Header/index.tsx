import s from "./style.module.scss";

import { Layout, Row, Col } from "antd";
import Logo from "@Components/Logo";
import User from "@Components/User";
import Search from "@Components/Search";
const { Header: HeaderAntDesign } = Layout;

export default function Header() {
  return (
    <HeaderAntDesign className={s.header}>
      <Col className="logo_name_blog">
        <Row>
          <Col className="logo">
            <Logo />
          </Col>
        </Row>
      </Col>

      <Col>
        <Search />
      </Col>

      <Col>
        <User />
      </Col>
    </HeaderAntDesign>
  );
}
