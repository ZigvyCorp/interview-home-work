/**
 *
 * WritingPage
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Card,
  DatePicker,
  Input,
  Form,
  InputNumber,
  Radio,
  Select,
  Tooltip,
} from 'antd';

import UserActions, { UserSelectors, UserTypes } from '../App/reducer';

import { useInjectSaga } from '../../utils/injectSaga';
import { useInjectReducer } from '../../utils/injectReducer';
import Header from '../../components/Header';
import EditableTagGroup from './EditableTagGroup';
import makeSelectWritingPage from './selectors';
import reducer from './reducer';
import saga from './saga';

const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function WritingPage({ userPayload }) {
  const [user, setUser] = useState(false);
  const onFinish = values => {
    setUser(true);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  if (user) return <Redirect to="/" />;

  return (
    <div>
      <Header user={_.get(userPayload, 'user', null)} />
      <div style={{ paddingTop: 60 }}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Title was not empty' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Tags" name="tags">
            <EditableTagGroup />
          </Form.Item>
          <Form.Item label="Content" name="content">
            <Input.TextArea style={{ minHeight: 200 }} />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  userPayload: UserSelectors.selectPayload(state.user),
});

export default connect(mapStateToProps)(WritingPage);
