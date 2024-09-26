import { Container, Row, Col, Button } from "react-bootstrap"; // Import từ react-bootstrap

function App() {
  return (
    <Container>
      <h1 className="text-center my-4">Welcome to My React App</h1>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Button variant="primary" className="w-100">
            Get Started
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
