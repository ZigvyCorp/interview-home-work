import React from 'react'

import { Form, Input } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';

import './index.css';
import path from 'path';

const Header = () => {
    const { pathname } = useLocation()
    const home = '/';
    const createblog = '/createblog';
    const product = '/product';
    const blogs = '/blogs';
    return (
        <div className='container_header'>
            <div className="container_header--logo">
                <NavLink to={'/'}>
                    <img src="data:image/png;base64,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" alt="" />
                </NavLink>
            </div>
            <div className="container_header--menu">
                <ul>
                    <NavLink to={'/'}><li className={home === pathname ? 'active' : ''}> Trang chủ</li></NavLink>
                    <NavLink to={'/createblog'}><li className={createblog === pathname ? 'active' : ''}>Tạo bài đăng</li></NavLink>
                    <NavLink to={'/product'}><li className={product === pathname ? 'active' : ''}>Sản phẩm</li></NavLink>
                    <NavLink to={'/blogs'}><li className={blogs === pathname ? 'active' : ''}>Blogs</li></NavLink>
                </ul>
            </div>
            <Form className='container_header--search'>
                <Form.Item >
                    <Input placeholder='Tìm kiếm' />
                </Form.Item>

            </Form>
            <div className="container_header--user">
                <img src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/237209669_2754032388075638_8412174962747603408_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=o7fUTpxeAuAAX-YuImc&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfC6ho-qb1VYAUNCfINJ1i85K3aMqzholpm2ZWbAESEmtQ&oe=639DC953" alt="" />
                <p className='container_header--user-name'>Phạm Gia Bảo Trấn</p>
            </div>
        </div >
    )
}

export default Header