import { Layout } from 'antd'
const { Header, Content } = Layout
import { Col, Row, Avatar, Card, Tag, Space, Button, Input } from 'antd'
import { Link } from 'react-router-dom'
import logo from '../assets/download.png'
import { UserOutlined } from '@ant-design/icons'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsRequest } from '../redux/post/postSlice'
import { setPage } from '../redux/post/postPage'
import { setSearch } from '../redux/post/search'
import { format } from 'date-fns'

import './Home.css'

const headerStyle = {
  height: 64,
  backgroundColor: '#ffffff',
  padding: '0',
  boxShadow: '0 20px 35px -14px rgba(199,207,219,0.5)',
  position: 'fixed',
  zIndex: '2',
  width: '100%'
}
const contentStyle = {
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  borderRadius: '8px',
  marginTop: '80px',
  backgroundColor: '#ffffff'
}
const layoutStyle = {
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
  backgroundColor: '#fff'
}

const cardStyle = {
  width: '100%'
}

function Home() {
  const dispatch = useDispatch()

  const { posts } = useSelector((state) => state.posts)

  const page = useSelector((state) => state.page.page)

  const { search } = useSelector((state) => state.search)

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(search)
      // Send Axios request here
      dispatch(getPostsRequest({ page, search }))
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [dispatch, page, search])

  const handleNextPage = () => {
    dispatch(setPage(page + 1))
  }

  const handlePrePage = () => {
    dispatch(setPage(Math.max(page - 1, 1)))
  }

  const handleOnChange = (e) => {
    dispatch(setSearch(e.target.value))
    dispatch(setPage(1))
  }

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <div className='container'>
          <Row>
            <Col span={8}>
              <Link className='logo-button' to='/'>
                <img src={logo} className='logo' />
              </Link>
            </Col>
            <Col span={8}>
              <p className='title'>Blog</p>
            </Col>
            <Col span={8}>
              <div className='profile'>
                <Avatar shape='circle' size={40} icon={<UserOutlined />} />
                <p className='name'>Haidee Nguyen</p>
              </div>
            </Col>
          </Row>
        </div>
      </Header>
      <div className='container'>
        <Content style={contentStyle}>
          <Input value={search} onChange={handleOnChange} placeholder='Search' />
          {posts?.data?.posts?.map((post) => (
            <Card key={post.id} title={post.title} style={cardStyle}>
              <div className='info'>
                <Row>
                  <Col span={12}>
                    <p> Author: {post.user.name} </p>
                    <p> Created at: {format(post.createDate, 'yyyy-MM-dd HH:mm')} </p>
                  </Col>
                  <Col span={12}>
                    <Space size={[0, 8]} wrap>
                      <Tag color='magenta'>magenta</Tag>
                      <Tag color='red'>red</Tag>
                      <Tag color='volcano'>volcano</Tag>
                      <Tag color='orange'>orange</Tag>
                      <Tag color='gold'>gold</Tag>
                      <Tag color='lime'>lime</Tag>
                      <Tag color='green'>green</Tag>
                      <Tag color='cyan'>cyan</Tag>
                      <Tag color='blue'>blue</Tag>
                      <Tag color='geekblue'>geekblue</Tag>
                      <Tag color='purple'>purple</Tag>
                    </Space>
                  </Col>
                </Row>

                <div className='content'>{post.body}</div>
              </div>
            </Card>
          ))}
          {posts && (
            <div className='flex gap-4 mx-auto paginator'>
              {page > 1 && (
                <Button type='text' onClick={handlePrePage}>
                  Previous Page
                </Button>
              )}

              <Button disabled={posts.data.posts.length === 0} type='text' onClick={handleNextPage}>
                Next Page
              </Button>
            </div>
          )}
        </Content>
      </div>
    </Layout>
  )
}

export default Home
