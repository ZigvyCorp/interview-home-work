import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts'

//Redux components
import {sendData , getData} from './actions/dashboardAction'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
class App extends Component {
  constructor(props){
    super();
    this.state = {
      response: '',
      post: '',
      responseToPost: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callApi = this.callApi.bind(this);
  }
  
  
  componentDidMount() {
    this.callApi();
  }
  
  callApi = () => {    
    this.props.getData('/api/hello/user');
  };
  
  handleSubmit = () => {
    this.props.sendData('/api/data',{ post: this.state.post });
  };
  
render() {
    return (
      <div className="container border border-2 border-dark shadow-lg mb-5 bg-body rounded">
        {/* <p>{this.props.getDataFromBackend.usersList.map(user => <div>{user.title}</div>)}</p> */}
        <div className="row my-row justify-content-between border-bottom border-2 border-dark">
          <div className="col my-background-color ">
          </div>
          <div className="col align-self-center  text-start fw-bold">
            Logo
          </div>
          <div className="col-2 text-start">
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center my-blog fw-bold">
            Blogs
          </div>
          <div className="col-2 text-start">
          </div>
          <div className="col-2 align-self-center text-end fw-bold ">
            <img src="https://i.pinimg.com/originals/6b/aa/98/6baa98cc1c3f4d76e989701746e322dd.png"
                  className="me-2 logo"></img>
            Adam Levine
          </div>
        </div>
        <Posts />
      </div>
    );
  }
}
//React Redux connecting code
function mapStateToProps(state){
  return {
   dataFromBackend : state.dashboardReducer.dataFromBackend,
   getDataFromBackend : state.dashboardReducer.getDataFromBackend
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  sendData,
  getData
},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);