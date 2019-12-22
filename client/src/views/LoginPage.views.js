import React from "react";
import { Form, Icon, Input, Button, Row, Col, notification } from 'antd'


import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {userAction} from '../actions/user.action'

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}



class FormLogin extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            login_button_disabled: false
        }
    }
  componentDidMount() {
    document.title = "Đăng nhập | Zigvy blog app";
    
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
    
  }
  async openNotification(description)  {
    
    let {dispatch} = await this.props
    await notification.open({
      message: 'Đăng nhập',
      description,
      duration: 5
    });
    await dispatch(userAction.clear_error())
  }
  handleLogin(values)
  {
    let {dispatch} = this.props
    dispatch(userAction.login(values))
  }

  handleSubmit = e => {
      this.setState({
        login_button_disabled: true
      })
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.form.resetFields()
        this.handleLogin(values)
      }
      this.setState({
        login_button_disabled: false
      })
    });
  };

  componentDidUpdate()
  {
    if(!this.props.state.userReducer.user.loading)
    {
        const {user} = this.props.state.userReducer
        if(typeof user.error !== 'undefined' && user.error && user.error !== '') {
            this.openNotification(user.error)
        } 
    }
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const emailError = isFieldTouched('email') && getFieldError('email');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
        <Row type="flex" justify="space-around" align="middle" style={{marginTop: '5%'}}>
            <Col span={8} style={{textAlign: 'center'}}>
                <h2 style={{marginBottom: '5%'}}>Đăng nhập</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Vui lòng nhập email' }],
                    })(
                        <Input
                        type="email"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Email"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Vui lòng nhập mật khẩu!' },
                                {min: 7, message: 'Mật khẩu phải hơn 7 ký tự'}],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    <Button type="primary" disabled={this.props.state.userReducer.user.loading || this.state.login_button_disabled} htmlType="submit" disabled={hasErrors(getFieldsError())}>
                        Đăng nhập
                    </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
  }
}

const LoginForm = Form.create({ name: 'horizontal_login' })(FormLogin);

function mapStatetoProps(state)
{
    return {state}
}

export default withRouter(connect(mapStatetoProps)(LoginForm));



