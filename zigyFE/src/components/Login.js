import React, { Component } from "react";
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import {loginWatcher} from '../redux/actions/userAction'
 class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.loginWatcher({
            username: this.state.userName,
            password: this.state.password
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
         <div style={{display: "table-cell", verticalAlign: "middle", width:2000, height: 500}}>
            <form style={{display: "inline-block", width: "30%",height:"50%"}} onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>User Name</label>
                    <input name="userName" type="text" className="form-control" placeholder="User Name" value={this.state.email} onChange={this.handleInputChange} required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name="password" type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handleInputChange} required />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
         </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loginWatcher
    }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(Login)