import { Avatar, Button, Flex, Typography } from "antd";
import { images } from "../../../assets";
import { UserOutlined } from "@ant-design/icons";
import "./style.css";

const { Title } = Typography;

const Header = () => {
  return (
    <div className="header__sticky">
      <div className="header__container">
        <img src={images?.logo} alt="" />
        <Title level={3}>Blogs</Title>
        <Flex gap="8px">
          <Avatar size={32} icon={<UserOutlined />} />
          <Button>Ngô Công Huân</Button>
        </Flex>
      </div>
    </div>
  );
};

export default Header;
