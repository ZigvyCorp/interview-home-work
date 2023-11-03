import { Flex, Typography } from "antd";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "src/constant/navigation.constant";

const { Text } = Typography;
const HeaderBlog = () => {
  return (
    <Flex align="center" justify="center" className={styles.blog}>
      <Link className={styles.link} to={ROUTES.POSTS}>
        <Text strong>Blogs</Text>
      </Link>
    </Flex>
  );
};
export default HeaderBlog;
