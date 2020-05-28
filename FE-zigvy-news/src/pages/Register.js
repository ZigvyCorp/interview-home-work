/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createUser } from '../actions';
import { TOKEN } from '../utils/constant';

const Register = props => {
    const initState = {
        username: '',
        password: '',
        name: '',
        dob: '1990-01-01',
    }
    
    const { history } = props;
    const [state, setState] = useState(initState)
    
    useEffect(() => {
        const token = localStorage.getItem(TOKEN);

        if (props.isLogin && token) {
            history.push('/');
        }
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        })
    } 

    const handleSubmit = e => {
        e.preventDefault();
        props.registerUserAction(state);
        setState(initState);
    }

    return (
        <div className="card w-50 mr-auto ml-auto mt-5">
            <div className="card-header text-center">
                Register
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label for="name">Name</label>
                      <input type="text" className="form-control" name="name" id="name" value={state.name} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                      <label for="username">Username</label>
                      <input type="text" className="form-control" name="username" id="username" value={state.username} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                      <label for="password">Password</label>
                      <input type="password" className="form-control" name="password" id="password" value={state.password} onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                      <label for="dob">DOB</label>
                      <input type="date" className="form-control" name="dob" id="dob" value={state.dob} onChange={handleChange}/>
                    </div>

                    <div className="text-center mt-5">
                        <button type="submit" className="btn btn-primary w-25 mr-5">Register</button>
                        <button type="reset" className="btn btn-outline-primary w-25" onClick={() => setState(initState)}>RESET</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userState: state.userState
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        registerUserAction: bindActionCreators(createUser, dispatch)
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));