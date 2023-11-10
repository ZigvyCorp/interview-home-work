import { Outlet, NavLink } from 'react-router-dom'
import { Avatar, Flex, Typography, Input, Button } from 'antd'
import './Root.css'
import { SearchOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { preSearchPosts } from '../redux/features/post/postSlice'
import { AppState } from '../redux/store'
import { getUser, logout } from '../redux/features/user/userSlice'

const { Title, Text } = Typography

const Root = () => {
  const dispatch = useDispatch()

  const { user } = useSelector((state: AppState) => state.user)

  const handleSearchPosts = (e: any) => {
    dispatch(preSearchPosts(e?.target?.value))
  }

  const handleLogin = () => {
    dispatch(getUser())
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div>
      <Flex align='center' className='navbar'>
        <NavLink to='/' className='logo-link nav-link'>
          <Title level={2} className='logo link-text'>
            Logo
          </Title>
        </NavLink>
        <Title level={2} className='navbar-title'>
          Blogs
        </Title>
        <Input
          placeholder='Search by title'
          suffix={<SearchOutlined />}
          style={{ width: 200, marginRight: 16 }}
          onChange={e => handleSearchPosts(e)}
        />
        {user ? (
          <Flex align='center' gap='small'>
            <Avatar
              shape='square'
              src={'https://www.w3schools.com/w3images/avatar2.png'}
            />
            <Text>{user?.name}</Text>
            <Button onClick={handleLogout}>Logout</Button>
          </Flex>
        ) : (
          <Button onClick={handleLogin}>Login</Button>
        )}
      </Flex>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
export default Root
