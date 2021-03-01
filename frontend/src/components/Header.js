import { Container, Navbar, NavLink } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <NavLink to="/">
            <Navbar.Brand>Zigvy</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle/>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text> Nguyen Cao Thang </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
