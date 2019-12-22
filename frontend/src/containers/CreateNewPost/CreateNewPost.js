import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './CreateNewPost.css';
import * as actions from './../../store/actions';
import { Typography, Form, Input, Button, Tooltip, Icon } from 'antd';

const { Title } = Typography;

class CreateNewPost extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.tags = values.tags.split(';').map(i => i.trim());
        this.props.createNewPost(values);
      }
    });
  };

  componentWillUnmount() {
    this.props.clearRedirect();
  }

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

    let afterCreatePostRedirect = 
    this.props.redirect ? 
      <Redirect to={'/'} /> : 
      null;

    return (
      <div className="create-new-post-form">
        {afterCreatePostRedirect}
        <Title className="title">Create New Post</Title>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="Title">
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: 'Please input post title!',
                },
                { 
                  min: 10, 
                  message: 'Title should have at least 10 characters.'
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Content">
            {getFieldDecorator('content', {
              rules: [
                {
                  required: true,
                  message: 'Please input post content!',
                }
              ],
            })(<Input.TextArea 
              autoSize={{ minRows: 8, maxRows: 10 }}
            />)}
          </Form.Item>
          <Form.Item
            label={
              <span>
                Tags&nbsp;
                <Tooltip title="Devide your tag by semi-colon">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
          {getFieldDecorator('tags')(<Input />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" loading={this.props.loading}>
              Create Post
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  const { loading, redirect } = state.createNewPost
  return {
    loading,
    redirect
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNewPost: (postData) => dispatch(actions.createNewPost(postData)),
    clearRedirect: () => dispatch(actions.clearRedirect())
  }
}

const WrappedCreateNewPostForm = Form.create({ name: 'create-new-post' })(CreateNewPost);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedCreateNewPostForm);