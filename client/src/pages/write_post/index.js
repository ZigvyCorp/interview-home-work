import React, { useState, useEffect } from 'react'
import { Form, Icon, Input, Button, Row, Col, Tag, Tooltip, Card, notification } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { createNewPost } from './redux'

const { TextArea } = Input

const Editor = props => {
  const [content, setContent] = useState('')

  useEffect(() => {
    props.form.validateFields()
    return () => {
      // cleanup
    }
  }, [])

  useEffect(() => {
    // props.form.validateFields()
    if (props.newPost.title) {
      notification.open({
        message: 'Success',
        description: 'Create Post Success',
        duration: 5,
      })
    }
    // console.log()

    return () => {
      // cleanup
    }
  }, [props.newPost])
  // constructor(props) {
  //   super(props)
  //   // this.state = {
  //   //   tags: [],
  //   //   inputVisible: false,
  //   //   inputValue: '',
  //   //   content: '',
  //   //   submit_disabled: true,
  //   // }
  // }

  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        props.form.resetFields()
        props.createNewPost(values.title, values.description, content)
        setContent('')
        // this.handleCreatePost(values)
      }
    })
  }

  const handleChangeQuill = value => {
    setContent(value)
  }
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ]

  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form

  const titleError = isFieldTouched('title') && getFieldError('title')
  const summaryError = isFieldTouched('summary') && getFieldError('summary')
  return (
    // <h1> hello world </h1>
    <Card>
      <Row type='flex' justify='space-around' align='middle' style={{ marginTop: '5%' }}>
        <Col span={20} style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '5%' }}>Tạo bài viết</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Item validateStatus={titleError ? 'error' : ''} help={titleError || ''}>
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Vui lòng nhập tiêu đề' }],
              })(
                <Input
                  prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder='Tiêu đề'
                  type='text'
                />
              )}
            </Form.Item>
            <Form.Item validateStatus={summaryError ? 'error' : ''} help={summaryError || ''}>
              {getFieldDecorator('description', {
                rules: [{ required: true, message: 'Vui lòng nhập nội dung miêu tả' }],
              })(<TextArea rows={4} placeholder='Nội dung tóm tắt' />)}
            </Form.Item>
            <Form.Item label='Nội dung: '>
              <ReactQuill
                value={content}
                onChange={value => handleChangeQuill(value)}
                modules={modules}
                formats={formats}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                // disabled={hasErrors(getFieldsError()) || this.state.submit_disabled}
              >
                Tạo bài viết
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */

const mapStatetoProps = state => {
  return { newPost: state.write_post.newPost }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    createNewPost: (title, description, content) => {
      dispatch(createNewPost(title, description, content))
    },
  }
}

const EditorCreate = Form.create({ name: 'create_post' })(Editor)
export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(EditorCreate))
