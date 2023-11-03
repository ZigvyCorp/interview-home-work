import { useState } from "react";
import { Flex, Typography } from "antd";
import Search from "antd/es/input/Search";
import styles from "./header.module.css";
import { useDispatch } from "react-redux";
import { setPostsParams } from "src/store/modules/posts/posts.action";
const { Text } = Typography;
const HeaderLogo = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    const page = 1;
    dispatch(setPostsParams(page, value));
  };
  return (
    <Flex gap="small" align="center" className={styles.logo}>
      {/* avatar */}
      <div className={styles.logoBox}></div>
      <Text strong>Logo</Text>
      <Search
        placeholder="Search blogs"
        value={query}
        onChange={handleSearch}
        style={{ width: 200 }}
      />
    </Flex>
  );
};
export default HeaderLogo;
