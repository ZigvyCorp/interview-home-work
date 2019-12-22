import React from "react";
import { Form, Icon, Input, Button, Row, Col, notification } from 'antd';

import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {userAction} from '../actions/user.action'

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class FormRegister extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
      confirmDirty: false
    }
  }
  componentDidMount() {
    document.title = "Đăng ký tài khoản | Zigvy blog app";
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleRegister(values)
  {
    let {dispatch} = this.props
    this.props.form.resetFields()
    dispatch(userAction.register(values))
  }
  async openNotification(description)  {
    
    let {dispatch} = await this.props
    await notification.open({
      message: 'Đăng ký',
      description,
      duration: 5
    });
    await dispatch(userAction.clear_error_register())
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.handleRegister(values)
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
      callback('Mật khẩu bạn nhập không khớp, vui lòng kiểm tra');
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

  componentDidUpdate()
  {
    if(!this.props.state.userReducer.register.loading)
    {
        const {register} = this.props.state.userReducer
        if(typeof register.error !== 'undefined' && register.error && register.error !== '') {
            this.openNotification(register.error)
        }
    }
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const emailError = isFieldTouched('email') && getFieldError('email');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    const conf_passwordError = isFieldTouched('conf_password') && getFieldError('conf_password');
    const nameError = isFieldTouched('name') && getFieldError('name');
    return (
        <Row type="flex" justify="space-around" align="middle" style={{marginTop: '5%'}}>
            <Col span={8} style={{textAlign: 'center'}}>
                <h2 style={{marginBottom: '5%'}}>Đăng ký tài khoản</h2>
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
                        rules: [
                        {required: true, message: 'Vui lòng nhập mật khẩu!'},
                        {min: 7, message: 'Mật khẩu phải hơn 7 ký tự'},
                        {validator: this.validateToNextPassword},
                      ],
                    })(
                        <Input.Password
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item validateStatus={conf_passwordError ? 'error' : ''} help={conf_passwordError || ''}>
                    {getFieldDecorator('conf_password', {
                        rules: [
                          { required: true, message: 'Vui lòng xác nhận lại mật khẩu!' },
                          {
                            validator: this.compareToFirstPassword,
                          },
                      
                      ],
                    })(
                        <Input.Password
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Confirm Password"
                        onBlur={this.handleConfirmBlur}
                        />,
                    )}
                    </Form.Item>
                    <Form.Item validateStatus={nameError ? 'error' : ''} help={nameError || ''}>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Vui lòng nhập tên!' }],
                    })(
                        <Input
                        prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="text"
                        placeholder="Name"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                        Đăng ký
                    </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
  }
}

const RegisterForm = Form.create({ name: 'horizontal_register' })(FormRegister);

function mapStatetoProps(state)
{
    return {state}
}

export default withRouter(connect(mapStatetoProps)(RegisterForm));




