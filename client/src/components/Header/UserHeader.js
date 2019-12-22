import React from "react";
import { Menu, Icon } from 'antd';

import {history} from '../../helpers/history.helpers'

const { SubMenu } = Menu;

class UserHeader extends React.Component {

  constructor(props)
  {
    super(props)
  }

  handleClick(e)
  {
    (e.key == 'login') ? history.push('/login')  : history.push('/register')
  }

  handleLogout()
  {
    localStorage.removeItem('token')
    localStorage.removeItem('userData')
    window.location.href= "/home"
  }
  handleToCreatePost()
  {
    history.push('/create-post')
  }
  showName()
  {
    let data = JSON.parse(localStorage.getItem('userData'))
    return data.name
  }


  render() {
    return (
      <>
        {(localStorage.getItem('token')) ? 
        <Menu theme="dark" style={{ lineHeight: '64px', textAlign:"right" }} mode="horizontal">
        <SubMenu style={{textAlign: "right"}} onTitleClick={this.handleToLogin}
          title={
            <span className="submenu-title-wrapper">
              <Icon type="user" />
                Xin chào, {this.showName()}
            </span>
          }
        >
            <Menu.Item onClick={this.handleToCreatePost.bind(this)} key="user:1">Tạo post</Menu.Item>
            <Menu.Item key="user:2">Thông tin cá nhân</Menu.Item>
            <Menu.Item onClick={this.handleLogout.bind(this)} key="user:3">Đăng xuất</Menu.Item>
        </SubMenu> 
      </Menu>
: 
<Menu theme="dark" onClick={this.handleClick} style={{ lineHeight: '64px', textAlign:"right" }} mode="horizontal">
            <Menu.Item key="login" style={{textAlign: "right"}}>
            <span className="submenu-title-wrapper">
                <Icon type="user" />
                  Đăng nhập
              </span>
            </Menu.Item>
            <Menu.Item key="register">
            <span className="submenu-title-wrapper">
              <Icon type="user-add" />
                  Đăng ký
              </span>
            </Menu.Item>
          </Menu>
        }
</>
    );
  }
}

export default UserHeader;