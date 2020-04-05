import React, { Component } from "react";
import {signUpWatcher} from '../redux/actions/userAction'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

 class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            dob: '',
            userName: '',
            passWord: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.signUpWatcher({
            name: this.state.name,
            dob: this.state.dob,
            username: this.state.userName,
            password: this.state.passWord
        })
    }
    handleInputChange(event){
        const {value, name} = event.target;
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
         <div style={{display: "table-cell", verticalAlign: "middle", width:2000, height: 650}}>
            <form style={{display: "inline-block", width: "30%"}} onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input onChange={this.handleInputChange} required name='name' type="text" className="form-control" placeholder="Name" />
                </div>

                <div className="form-group">
                    <label>Day Of Birth</label>
                    <input onChange={this.handleInputChange} name='dob' type="dayOfBirth" className="form-control" placeholder="Enter day of birth" />
                </div>

                <div className="form-group">
                    <label>User Name</label>
                    <input onChange={this.handleInputChange} required name='userName' type="username" className="form-control" placeholder="Enter user name" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange={this.handleInputChange} required name='passWord' type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
          </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signUpWatcher
    }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(SignUp)