import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Signup.css';

import * as actions from './../../store/actions';
import {
  Typography,
  Form,
  Input,
  Button,
} from 'antd';
import axios from './../../axios';
import withErrorHandler from './../../hoc/axiosWithErrorHandler/axiosWithErrorHandler';

const { Title } = Typography;

class Signup extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.signup(values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
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
    };
    let authenRedirect = 
      this.props.isAuthenticated ? 
        <Redirect to={this.props.authenRedirectPath} /> : 
        null;

    return (
      <div className="sign-up-form">
        {authenRedirect}
        <Title className="title">Sign Up</Title>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item
            label="Your Name"
          >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="E-mail">
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
          <Form.Item label="Password" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                { 
                  min: 8, 
                  message: 'Password should have at least 8 characters.'
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item label="Confirm Password" hasFeedback>
            {getFieldDecorator('passwordConfirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" loading={this.props.loading}>
              Register
            </Button>
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
    signup: (registerData) => dispatch(actions.signUp(registerData))
  }
}
const WrappedRegistrationForm = Form.create({ name: 'register' })(Signup);
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(WrappedRegistrationForm, axios));
