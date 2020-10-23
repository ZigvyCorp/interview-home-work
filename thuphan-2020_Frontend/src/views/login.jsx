import React, { Component } from "react";
import { Row, Col, Container, Card, Form, Button } from "react-bootstrap";
import "./login.css";
import Cookies from "js-cookie";
import axios from "axios";

class Login extends Component {
  state = {
    message: "",
  };
  usernameRef = React.createRef();
  passwordRef = React.createRef();
  componentDidMount() {
    this.usernameRef.current.focus();
    Cookies.remove("token");
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.usernameRef.current.value;
    const password = this.passwordRef.current.value;

    // UserService.login(username, password).then(
    //   (res) => {
    //     this.setState({ message: "" });
    //     Cookies.set("token", res.data.access_token, { expires: 1 });
    //     this.props.history.push("/dashboard");
    //   },
    //   (error) => {
    //     if (error.response.status === 400) {
    //       this.setState({ message: "Wrong username or password." });
    //     }
    //   }
    // );
    axios.post('http://localhost:1607/login', {
      username: username,
      password: password
    }).then((res) => {
      if (res.data.errorCode === 0){
        this.props.history.push("/")
      }
      else this.setState({message: res.data.message})
    }).catch((err) => {
      console.log(err)
    });

    
  };
  render() {
    return (
      <Container className="h-100">
        <Row className="align-items-center justify-content-center h-100">
          <Col md="8" lg="5">
            <Card border="primary">
              <Card.Header className="bg-primary">Login</Card.Header>
              <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                  <p className="text-danger text-center">
                    {this.state.message}
                  </p>
                  <Form.Group as={Row}>
                    <Form.Label column sm="3">
                      Username
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        ref={this.usernameRef}
                        placeholder="Enter Username"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Form.Label column sm="3">
                      Password
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        ref={this.passwordRef}
                        type="password"
                        placeholder="Password"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-0">
                    <Col sm={{ span: 9, offset: 3 }}>
                      <Button type="submit" variant="primary">
                        Sign in
                      </Button>
                    </Col>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
