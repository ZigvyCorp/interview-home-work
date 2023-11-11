import { Button, Input, Tag, Space, Form, Select, Collapse, Avatar } from 'antd';
import './styles/homepage.css'
import { optionsTag } from '../../util/data';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs, postBlog } from './blogSlice';
import { useEffect } from 'react';
import moment from 'moment'
import CollapsePanel from 'antd/es/collapse/CollapsePanel';
import { useForm } from 'antd/es/form/Form';
import { getComments } from './commentSlice';
const HomePageView = () => {

    const [form] = useForm()
    const dispatch = useDispatch();
    const { blogs } = useSelector((state) => { return state.blogs });
    const { comments } = useSelector((state) => { return state.comments });
    useEffect(() => {
        dispatch(getBlogs())
    }, [])
    const onFinish = (value) => {
        dispatch(postBlog(value))
        form.resetFields();
    }

    const onChage = (value, item) => {

        if (value[0] === '0') {
            console.log(item);
            dispatch(getComments(item.id))
        }
    }

    return (
        <div className='homepage row'>
            <div className='col-8'> 
            {blogs.map((item, i) => {
                return (
                    <div key={i} className='post'>
                        <h2>{item.title}</h2>
                        <div className='body'>
                            <div className='body-head row'>
                                <div className='col'>
                                    <span>Author: {item.user_infor[0].username}</span><br />
                                    <span>Created at: {moment(item.create_At).format('DD/MM/YYYY')}</span>
                                </div>
                                <div className='all-tag col'>
                                    <Space size={[0, 8]} wrap>
                                        {item.tags.map((tag, ind) => {
                                            return <Tag key={ind} color={tag}>{tag}</Tag>
                                        })}

                                    </Space>

                                </div>
                            </div>
                            <div className='body-content'>
                                {item.content}
                            </div>
                            <div className='comment'>
                                <Collapse ghost onChange={(value) => onChage(value, item)}>
                                    <CollapsePanel header={`${item.comment_infor.length ?? 0} relies`}>
                                        {comments.map((comment, index) => {
                                            return <div key={index} className='row' style={{ marginBottom: 30 }}>
                                                <div className='col-1'>
                                                    <Avatar />
                                                </div>
                                                <div className='col-11'>
                                                    <div className='' style={{ color: 'gray' }}>
                                                        <span style={{ marginRight: 5 }}> {comment.user_infor[0].username} </span> <span style={{ fontSize: 12 }}> {moment(comment.create_At).format('DD/MM/YYYY')} </span>
                                                    </div>
                                                    <div>
                                                        {comment.content}
                                                    </div>
                                                    <div style={{ color: 'gray', marginTop: 8 }}>Reply to</div>
                                                </div>
                                            </div>;
                                        })}
                                        <div className='row' style={{ marginBottom: 30 }}>
                                                <div className='col-1'>
                                                    <Avatar />
                                                </div>
                                                <div className='col-11'>
                                                    <div>
                                                    <Form
                                                        form={form}
                                                        layout="horizontal"
                                                        className='w-100'
                                                        onFinish={onFinish}
                                                    >
                                                        <Form.Item
                                                            name="content"
                                                        >
                                                            <Input.TextArea placeholder='Content' maxLength={100} />
                                                        </Form.Item>
                                                        <Form.Item>
                                                            <Button type="primary" htmlType="submit">
                                                                Submit
                                                            </Button>
                                                        </Form.Item>
                                                    </Form>
                                                    </div>
                                                </div>
                                        </div>
                                    </CollapsePanel>
                                </Collapse>
                                
                            </div>
                        </div>
                    </div>
                );
            })}</div>
            <div className='input-post col-4'>
                <Form
                    form={form}
                    layout="horizontal"
                    className='w-100'
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="title"
                    >
                        <Input placeholder='Title' />
                    </Form.Item>

                    <Form.Item
                        name="content"
                    >
                        <Input.TextArea placeholder='Content' maxLength={100} />
                    </Form.Item>

                    <Form.Item
                        name="tags"
                    >
                        <Select
                            placeholder='Choose Tags'
                            options={optionsTag}
                            mode="multiple"
                            allowClear
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
export default HomePageView;