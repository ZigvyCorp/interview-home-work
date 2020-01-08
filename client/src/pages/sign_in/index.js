import React, { useState } from 'react'
import './login.less'
import { Button, Checkbox, Col, Form, Input, Row } from 'antd'

function onChange(e) {
  // console.log(`checked = ${e.target.checked}`)
}

const handleResetPassword = () => {}
const Home = props => {
  const [busy, setBusy] = useState(false)
  const { getFieldDecorator } = props.form

  const handleSubmit = () => {
    props.router.history.push('/posts')
  }
  return (
    <div id='login'>
      <section className='bg-login'>
        <span className='img-x' />
        <ul className='img-dot'>
          <li />
          <li />
          <li />
          <li />
        </ul>
      </section>
      <section className='wrap-lgform'>
        <h2>Sign in</h2>
        <p>Sign in and start managing data</p>
        <Form onSubmit={handleSubmit}>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [
                { required: true, message: 'Please input email' },
                {
                  type: 'email',
                  message: 'Email is invalid',
                },
              ],
            })(<Input size='large' placeholder='Email address' />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input password' },
                { min: 8, message: 'Password must be at least 8 characters' },
              ],
            })(<Input.Password size='large' placeholder='Password' />)}
          </Form.Item>
          <Row type='flex' gutter={10} justify='space-between'>
            <Col>
              <Form.Item>
                {getFieldDecorator('remember')(<Checkbox onChange={e => {}}>Remember me</Checkbox>)}
              </Form.Item>
            </Col>
            <Col>
              <Button type='link' onClick={handleResetPassword}>
                Forgot password?
              </Button>
            </Col>
          </Row>
          <Form.Item>
            <Row type='flex' gutter={0} justify='center' className='action-bar'>
              <Col>
                <Button type='primary' loading={busy} htmlType='submit' size='large' shape='round'>
                  Sign in
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
        <p className='wrap-signup'>
          Don’t have an account?<a href='#'>Sign up</a>
        </p>
      </section>
    </div>
  )
}

export default Form.create({ name: 'signinForm' })(Home)
