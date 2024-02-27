import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function TextLinkExample() {
  return (
    <Navbar className="bg-dark">
      <Container>
        <div className="d-flex justify-content-center w-100">
          <Navbar.Brand href="/">
            <img src="https://avatars.githubusercontent.com/u/40911893?s=200&v=4" style={{width: 50, height: 50}} alt="Corporation"/>
          </Navbar.Brand>
          {/* <Navbar.Toggle /> */}
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-center fw-bold fs-1 text-white">POSTS</Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Image
                src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                style={{ width: 50, height: 50 }}
                roundedCircle
              />
            </Navbar.Text>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;
