import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './Login.css';

import * as actions from './../../store/actions';
import { Typography, Form, Input, Button } from 'antd';
import axios from './../../axios';
import withErrorHandler from './../../hoc/axiosWithErrorHandler/axiosWithErrorHandler';

const { Title } = Typography;

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.login(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    }
    let authenRedirect = 
    this.props.isAuthenticated ? 
      <Redirect to={this.props.authenRedirectPath} /> : 
      null;

    return (
      <div className="login-form">
        {authenRedirect}
        <Title className="title">Login</Title>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="Email">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Password">
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' },
                { min: 8, message: 'Password should have at least 8 characters.'}
              ],
            })(
              <Input.Password />,
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Login
            </Button>
            <span> Or </span><Link to="/signup">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { loading, userData, token, authenRedirectPath } = state.authen;
  return { loading, userData, token, authenRedirectPath, isAuthenticated: !!token }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (loginData) => dispatch(actions.login(loginData))
  }
}

const WrappedLoginForm = Form.create({ name: 'login' })(Login);

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(WrappedLoginForm, axios));