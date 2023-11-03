import { Flex } from 'antd'
import Container from '../Container'
import Logo from './Logo'
import NavBar from './NavBar'
import User from './User'

const Header = () => {
  return (
    <Container>
      <Flex justify='space-between' align='center' className='w-full bg-white'>
        <Logo />
        <NavBar />
        <User />
      </Flex>
    </Container>
  )
}

export default Header