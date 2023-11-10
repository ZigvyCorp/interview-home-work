import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchKeyword } from "../redux/actions";
import { Input, Button, Layout, Col, Row } from "antd";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearchKeyword(keyword));
  };

  return (
    <Layout>
      <Row style={{ padding: "10px 16px", margin: "20px 10px" }}>
        <Col span={20}>
          <Input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search"
          />
        </Col>
        <Col span={4}>
          <Button type="primary" onClick={handleSearch}>
            Search
          </Button>
        </Col>
      </Row>
    </Layout>
  );
};

export default SearchBar;
