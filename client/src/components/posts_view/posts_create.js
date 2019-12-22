import React from "react";
import { Form, Icon, Input, Button, Row, Col, Tag, Tooltip, Card, notification } from 'antd';

import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';

import {getPostsAction} from '../../actions/post.action'

const { TextArea } = Input;



function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class PostCreateForm extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
        tags: [],
        inputVisible: false,
        inputValue: '',
        content: '',
        submit_disabled: true,
    }
  }
  modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
  componentDidMount() {
    document.title = "Tạo bài post | Zigvy blog app";
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  async openNotification(description)  {
    let {dispatch} = await this.props
    await notification.open({
      message: 'Tạo bài viết',
      description,
      duration: 5
    });
  }

  async handleCreatePost(values)
  {
    let {dispatch} = this.props
    await this.props.form.resetFields()
    const {content, tags} = await this.state
    await this.setState({
        submit_disabled: true
    })
    await dispatch(getPostsAction.createPost(values.title, values.summary, content, tags))
    await this.setState({
      tags: [],
        inputVisible: false,
        inputValue: '',
        content: '',
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.handleCreatePost(values)
      }
    });
  }

  handleChangeQuill(content)
  {
        this.setState({content})
        this.check()
        
  }

  check()
  {
    (this.state.content.indexOf('<p><br></p>') !== -1 || this.state.content == '' || (Array.isArray(this.state.tags) && this.state.tags.length  < 1)) ? 
    this.setState({submit_disabled: true}) :
    this.setState({submit_disabled: false})
  }

     handleClose = async removedTag => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        await this.setState({ tags });
        await this.check()
    };

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    };

    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
    };
   handleInputConfirm = async () => {
    
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    await this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
    
    await this.check()
  };

  saveInputRef = input => (this.input = input);

  componentDidUpdate()
  {
    let {create_post} = this.props.state.postReducer
    if(!create_post.loading)
    {
      if(create_post.status !== null)
      {
          (create_post.status) ? this.openNotification('Tạo bài viết thành công') : this.openNotification('Tạo bài viết thất bại')
      }

    }
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const { tags, inputVisible, inputValue } = this.state;

    // Only show error after a field is touched.
    const titleError = isFieldTouched('title') && getFieldError('title');
    const summaryError = isFieldTouched('summary') && getFieldError('summary');
    return (
        <Card>
            <Row type="flex" justify="space-around" align="middle" style={{marginTop: '5%'}}>
                <Col span={8} style={{textAlign: 'center'}}>
                    <h2 style={{marginBottom: '5%'}}>Tạo bài viết</h2>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item validateStatus={titleError ? 'error' : ''} help={titleError || ''}>
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: 'Vui lòng nhập tiêu đề' }],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Tiêu đề"
                            type="text"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item validateStatus={summaryError ? 'error' : ''} help={summaryError || ''}>
                        {getFieldDecorator('summary', {
                            rules: [{ required: true, message: 'Vui lòng nhập nội dung tóm tắt' }],
                            })(
                                <TextArea  rows={4} placeholder="Nội dung tóm tắt"/>,
                            )}
                        </Form.Item>
                        <Form.Item label="Nội dung: ">
                        <ReactQuill value={this.state.content}
                                    onChange={(value) => this.handleChangeQuill(value)} 
                                    modules={this.modules}
                                    formats={this.formats} />   
                        </Form.Item>
                        <Form.Item label="Thẻ: ">
                            {tags.map((tag, index) => {
                                const isLongTag = tag.length > 20;
                                const tagElem = (
                                    <Tag key={tag} closable onClose={() => this.handleClose(tag)}>
                                    {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                    </Tag>
                                );
                                return isLongTag ? (
                                    <Tooltip title={tag} key={tag}>
                                    {tagElem}
                                    </Tooltip>
                                ) : (
                                    tagElem
                                );
                                })}
                                {inputVisible && (
                                <Input
                                    ref={this.saveInputRef}
                                    type="text"
                                    size="small"
                                    style={{ width: 78 }}
                                    value={inputValue}
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleInputConfirm}
                                    onPressEnter={this.handleInputConfirm}
                                />
                                )}
                                {!inputVisible && (
                                <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                                    <Icon type="plus" /> New Tag
                                </Tag>
                            )}
                        </Form.Item>
                        <Form.Item>
                        <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError()) || this.state.submit_disabled}>
                            Tạo bài viết
                        </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </Card>
    );
  }
}

const FormPostCreate = Form.create({ name: 'horizontal_create_post' })(PostCreateForm);

function mapStatetoProps(state)
{
    return {state}
}

export default withRouter(connect(mapStatetoProps)(FormPostCreate));