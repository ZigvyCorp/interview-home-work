import React from 'react'
import {
    Button,
    Form,
    Input,
  } from 'antd';
import Header from '../../components/Header'

import './index.css';

const CreateBlog = () => {
  return (
    <div className='container_createblog'>
        <Header/>
        <h3>Tạo bài đăng</h3>

        <Form className='container_createblog-form'>
            <Form.Item>
                <label>Tiêu đề</label>
                <Input type='text' name='title' title='Tiêu đề' placeholder='Vui lòng nhập tiêu đề'/>
            </Form.Item>
            <Form.Item>
                <label>Author</label>
                <Input type='text' name='author' title='Author' placeholder='Vui lòng nhập Author'/>
            </Form.Item>
            <Form.Item>
                <label>Tag</label>
                <Input type='text' name='tag' title='Tag' placeholder='Vui lòng nhập tag'/>
            </Form.Item>
            <Form.Item>
                <label>Mô tả</label>
                <Input type='text' name='description' title='Mô tả' placeholder='Vui lòng nhập mô tả'/>
            </Form.Item>
            <Button style={{background: 'blue', color:'#fff'}}>Xuất bản</Button>

        </Form>

    </div>
  )
}

export default CreateBlog