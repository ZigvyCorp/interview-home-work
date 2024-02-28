import Container from 'react-bootstrap/Container';
import { UserOutlined } from '@ant-design/icons';
import Navbar from 'react-bootstrap/Navbar';
import logo  from '../../assets/logo.png';
import { Avatar } from 'antd';
export default function NavbarComs() {
  return (
    <div> 
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>


        
          <Navbar.Brand>Blog</Navbar.Brand>
        
          <Navbar.Brand><Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /></Navbar.Brand>


          
        </Container>
      </Navbar>
   
    
  </div>
  )
}
