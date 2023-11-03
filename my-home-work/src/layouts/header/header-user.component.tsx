import { Avatar, Flex, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

import styles from "./header.module.css";
const { Text } = Typography;

const HeaderUser = () => {
  return (
    <Flex
      justify="flex-end"
      align="center"
      gap="middle"
      className={styles.user}
    >
      <Avatar
        size={64}
        shape="square"
        icon={<UserOutlined />}
        alt="user icon"
      />
      <Text strong>Adam Levine</Text>
    </Flex>
  );
};

export default HeaderUser;
