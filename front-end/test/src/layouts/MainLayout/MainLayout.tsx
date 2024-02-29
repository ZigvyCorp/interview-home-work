import React from 'react'
import { Col, Flex, Grid, Image, Layout, Row } from 'antd'
import { Outlet } from 'react-router-dom'
import Search, { SearchProps } from 'antd/es/input/Search'
const { Header, Content, Footer } = Layout
import { UserOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { onChangeSearchText, selectSearchText } from 'src/store/slices/postsSlice'
const { useBreakpoint } = Grid

const DefaultLayout: React.FC = () => {
  const dispatch = useDispatch()
  const searchText = useSelector(selectSearchText)
  const onSearch: SearchProps['onSearch'] = (value, _e) => {
    dispatch(onChangeSearchText(value))
  }

  const screens = useBreakpoint()
  return (
    <Layout className='layout'>
      <Header
        style={{
          backgroundColor: 'white'
        }}
      >
        <Row gutter={8}>
          <Col flex={1} span={8}>
            {/* <Image width={50} preview={false} src={Logo} /> */}
          </Col>
          <Col
            span={8}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Search
              placeholder='Tìm kiếm'
              defaultValue={searchText}
              allowClear
              onSearch={onSearch}
              style={{ width: '100%' }}
            />
          </Col>
          <Col
            span={8}
            style={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center'
            }}
          >
            <UserOutlined rev={''} style={{ fontSize: '24px' }} />
          </Col>
        </Row>
      </Header>
      <Content style={{ marginTop: '16px' }}>
        <Flex justify='center'>
          <div style={{ width: screens['xs'] ? '100%' : '60%' }}>
            <Outlet />
          </div>
        </Flex>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  )
}

export default DefaultLayout
