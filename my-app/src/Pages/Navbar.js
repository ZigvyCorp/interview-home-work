import React from 'react'
import { Col, Row, Space, Typography, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { getSearchData } from '../Redux/dataSlice';
import { StarTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const { Text  } = Typography;

const { Search } = Input;

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSearch = (searchData) => {
    dispatch(getSearchData(searchData));
  };

  return (
    <Row>
      <Col span={8}>
        <Space  style={{width: '100%', justifyContent: 'left'}}>
        <StarTwoTone twoToneColor="#eb2f96" style={{width: 32}}/>
          <Search
            style={{ paddingTop: "15px", paddingLeft: "40px" }}
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="middle"
            onSearch={onSearch}
          />
        </Space>
      </Col>
      <Col span={8}>
        <Space  style={{width: '100%', justifyContent: 'center'}}>
          <Text type="warning" strong onClick={() => {navigate("/")}}>Blogs</Text>
        </Space>
      </Col>
      <Col span={8}>
        <Space  style={{width: '100%', justifyContent: 'right'}}>
          <Text type="warning">Do Anh Huy</Text>
        </Space>
      </Col>
  </Row>
  )
}

export default Navbar