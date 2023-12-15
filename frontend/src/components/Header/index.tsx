import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import ReactLogo from "src/assets/images/react-logo.png";

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="justify-content-between">
      <Container fluid>
        <Navbar.Brand>
          <Image src={ReactLogo} alt="React" />
        </Navbar.Brand>
        <Navbar.Text>Tran Dang Hoang</Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;
