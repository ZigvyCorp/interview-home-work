import { Button, DatePicker, Form, Input } from 'antd';
import { AgGridReact } from "ag-grid-react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, postUser } from './userSlice';
import moment from 'moment';

const UserListView = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => {return state.users});

    useEffect(() => {

        dispatch(getUsers())
        
    }, [])
    const [columnDefs] = useState([
        { field: "username", },
        { field: "name" },
        { field: "password"},
        { field: "dob" }
      ]);

    const onFinish = (value) => {
        // console.log()
        dispatch(postUser({...value, dob: moment(new Date(value.dob)).format('DD/MM/YYYY')}))
    }
    return (
        <div className='row m-3'>
            <div className="ag-theme-alpine col-8" style={{ minHeight: 400 }}>
                <AgGridReact animateRows={true} rowData={selector.users} columnDefs={columnDefs} defaultColDef={{cellStyle: { 'text-align': "left" }}}></AgGridReact>
            </div>
            <div className='col-4'>
                <Form
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 13 }}
                    layout="horizontal"
                    style={{ maxWidth: 500 }}
                    onFinish={onFinish}
                >
                    <h3>Add User</h3>
                    <Form.Item
                        label="Username"
                        name="username"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Fullname"
                        name="name"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Date of Birth: "
                        name="dob"
                    >
                        <DatePicker className='w-100' format={'DD/MM/YYYY'} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 5, span: 13 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
export default UserListView;