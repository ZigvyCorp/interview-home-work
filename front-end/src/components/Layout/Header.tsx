import { Flex } from 'antd'
import Container from '../Container'
import Logo from './Logo'
import NavBar from './NavBar'
import User from './User'

const Header = () => {
  return (
    <div className='bg-primary'>
      <Container>
        <Flex justify='space-between' align='center' className='w-full'>
          <Logo />
          <NavBar />
          <User />
        </Flex>
      </Container>
    </div>
  )
}

export default Header