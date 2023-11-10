import Container from 'react-bootstrap/Container'
import SearchBar from './SearchBar'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import { connect } from 'react-redux'

const Layout = connect((state) => state)(({ children, user }) => {
  return (
    <>
      <Navbar className="bg-body-tertiary" sticky="top">
        <Container className="d-flex justify-content-center position-relative">
          <Navbar.Brand href="/" className="position-absolute start-0">
            <Image src="/logo.png" height={50} width={50} />
            Twitter
          </Navbar.Brand>
          <Navbar.Text className="h5">Blogs</Navbar.Text>
          <div className="position-absolute end-0 d-flex">
            <SearchBar />
            <div>
              <Image
                src="/avatar-placeholder.svg"
                height={30}
                width={30}
                className="me-2 ms-3"
              />
              <Navbar.Text>{user.name}</Navbar.Text>
            </div>
          </div>
        </Container>
      </Navbar>
      {children}
    </>
  )
})

export default Layout
