import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'reactstrap';
import axios from "axios";
import { Component } from "react";
export default class header extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name : "name",
      username : "name",
    };
  }
  componentDidMount() {
    axios
      .post(`http://localhost:3000/api/user/sign-in`, {
        username: "zigvy",
        password: "zigvy",
      })
      .then((res) => {
        console.log(res.data);
        let data = res.data.result;
        this.setState((state) => {
          state.name = data.name;
          state.username = data.username;
          return state;
        });
      })
      .catch((error) => console.log(error));
  }

  render(){
    return (
      <Container className="header">
        <Row>
          <Col xs="4" className=" border">
            <div className="side-column padding-top-10">Logo</div>
          </Col>
          <Col xs="4" className=" border">
            <div className=" padding-top-10 mid-column">Blogs</div>
          </Col>

          <Col className=" border">
            <Row>
              <Col xs="0.5" style={{ width: "50px", padding:"0"}}>
                <img
                  className="fit-img"
                  src="https://st.quantrimang.com/photos/image/072015/22/avatar.jpg"
                ></img>
              </Col>
              <Col className="padding-top-10 side-column">
                {this.state.name}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
