import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { FormattedMessage } from 'react-intl'
import * as Yup from 'yup'
import { withFormik } from 'formik'
import { Form, Input, Button, Typography } from 'antd'

import { useValues, useErrors } from '../../hooks'
import { UserActions, UserSelectors } from '../../store/redux/user'
import messages from './messages'

const { Text } = Typography

const SignIn = ({ intl, signInPending, values, errors, touched, handleChange, handleSubmit }) => {
  const { username, password } = useValues(values, handleChange)
  const { username: usernameError, password: passwordError } = useErrors(errors, touched)

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item {...usernameError}>
        <Input name="username" placeholder={intl.formatMessage(messages.username)} {...username} />
      </Form.Item>
      <Form.Item {...passwordError}>
        <Input.Password name="password" placeholder={intl.formatMessage(messages.password)} {...password} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary" block size="large" loading={signInPending}>
          <Text strong className="text-white">
            <FormattedMessage {...messages.signIn} />
          </Text>
        </Button>
      </Form.Item>
    </Form>
  )
}

SignIn.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  signIn: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  signInPending: PropTypes.bool.isRequired,
}

const EnhancedSignIn = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({ username: '', password: '' }),
  validationSchema: ({ intl }) =>
    Yup.object().shape({
      username: Yup.string().required(intl.formatMessage(messages.usernameIsRequired)),
      password: Yup.string()
        .min(8, intl.formatMessage(messages.passwordMinLength))
        .max(30, intl.formatMessage(messages.passwordMaxLength))
        .required(intl.formatMessage(messages.passwordIsRequired)),
    }),
  handleSubmit: (values, { props }) => {
    const { signIn, toggle } = props
    signIn(values, toggle)
  },
  displayName: 'SignIn',
})

export default compose(
  connect(
    createStructuredSelector({
      signInPending: UserSelectors.makeSelectSignInPending(),
    }),
    {
      signIn: UserActions.signIn,
    },
  ),
  EnhancedSignIn,
)(SignIn)
