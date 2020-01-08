import React from 'react'
import './login.less'
import { Button, Checkbox, Col, Input, Row } from 'antd'
function onChange(e) {
  // console.log(`checked = ${e.target.checked}`)
}
const Home = () => {
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
        <fieldset>
          <Input.Group>
            <Input size='large' placeholder='name@xightin.com' />
            <Input.Password size='large' placeholder='condition of Password' />
          </Input.Group>
          <Row type='flex' gutter={10} justify='space-between'>
            <Col>
              <Checkbox onChange={onChange}>Remember me</Checkbox>
            </Col>
            <Col>
              <a href='#'>Forgot password?</a>
            </Col>
          </Row>
        </fieldset>
        <Button type='primary' size='large' shape='round'>
          Sign in
        </Button>
        <p className='wrap-signup'>
          Don’t have an account?<a href='#'>Sign up</a>
        </p>
      </section>
    </div>
  )
}

export default Home
