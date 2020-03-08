import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { FormattedMessage } from 'react-intl'
import moment from 'moment'
import * as Yup from 'yup'
import { withFormik } from 'formik'
import { Form, Input, Button, Typography, Select, DatePicker } from 'antd'

import { Genders } from '../../utils/constants'
import { useValues, useErrors } from '../../hooks'
import { UserActions } from '../../store/redux/user'
import messages from './messages'

const { Text } = Typography

const dateFormat = 'DD/MM/YYYY'

const genderList = Object.values(Genders)

const GenderOptions = genderList.map(gender => (
  <Select.Option key={gender} value={gender}>
    <Text>
      <FormattedMessage {...messages[gender]} />
    </Text>
  </Select.Option>
))

const SignUp = ({ intl, toggle, values, errors, touched, handleChange, handleSubmit }) => {
  const { username, password, repeatPassword, name } = useValues(values, handleChange)

  const {
    username: usernameError,
    password: passwordError,
    repeatPassword: repeatPasswordError,
    name: nameError,
    dob: dobError,
    gender: genderError,
  } = useErrors(errors, touched)

  const handleDobChange = value => {
    handleChange({ target: { name: 'dob', value: value && value.toDate() } })
  }

  const handleGenderChange = value => {
    handleChange({ target: { name: 'gender', value } })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item {...usernameError}>
        <Input name="username" placeholder={intl.formatMessage(messages.username)} {...username} />
      </Form.Item>
      <Form.Item {...passwordError}>
        <Input.Password name="password" placeholder={intl.formatMessage(messages.password)} {...password} />
      </Form.Item>
      <Form.Item {...repeatPasswordError}>
        <Input.Password
          name="repeatPassword"
          placeholder={intl.formatMessage(messages.repeatPassword)}
          {...repeatPassword}
        />
      </Form.Item>
      <Form.Item {...nameError}>
        <Input name="name" placeholder={intl.formatMessage(messages.name)} {...name} />
      </Form.Item>
      <Form.Item {...dobError}>
        <DatePicker
          value={moment(values.dob, dateFormat)}
          onChange={handleDobChange}
          placeholder={intl.formatMessage(messages.dob)}
          format={dateFormat}
        />
      </Form.Item>
      <Form.Item {...genderError}>
        <Select value={values.gender} onChange={handleGenderChange}>
          {GenderOptions}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary" block size="large">
          <Text strong className="text-white">
            <FormattedMessage {...messages.signUp} />
          </Text>
        </Button>
      </Form.Item>
    </Form>
  )
}

SignUp.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  signUp: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
}

const EnhancedSignUp = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    username: '',
    password: '',
    repeatPassword: '',
    name: '',
    dob: new Date(),
    gender: Genders.Male,
  }),
  validationSchema: ({ intl }) =>
    Yup.object().shape({
      username: Yup.string()
        .min(8)
        .required(intl.formatMessage(messages.usernameIsRequired)),
      password: Yup.string()
        .min(8, intl.formatMessage(messages.passwordMinLength))
        .max(30, intl.formatMessage(messages.passwordMaxLength))
        .required(intl.formatMessage(messages.passwordIsRequired)),
      repeatPassword: Yup.string()
        .required()
        .test({
          name: 'testRepeatPassword',
          test(value) {
            return (
              value === this.parent.password ||
              this.createError({
                path: 'repeatPassword',
                message: intl.formatMessage(messages.repeatPasswordNotMatch),
              })
            )
          },
        }),
      name: Yup.string(),
      dob: Yup.date(),
      gender: Yup.string()
        .test({
          name: 'testGenderIsOneOfPredefinedValues',
          test(value) {
            return (
              genderList.includes(value) ||
              this.createError({
                path: 'gender',
                message: intl.formatMessage(messages.genderIsInvalid),
              })
            )
          },
        })
        .default(Genders.Male),
    }),
  handleSubmit: (values, { props }) => {
    console.log({ values, props })
    const { signUp } = props
    signUp(values)
  },
  displayName: 'SignUp',
})

export default compose(
  connect(
    createStructuredSelector({
      //
    }),
    {
      signUp: UserActions.signUp,
    },
  ),
  EnhancedSignUp,
)(SignUp)
