import "./index.scss";
import React, { Component, Fragment } from "react";
import { Menu, Icon, Avatar } from "antd";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

export default class Topbar extends Component {
  state = {
    current: "blog"
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
   
  };

  render() {
    return (
      <Fragment>
        <Menu
          className="topbar"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item className="home" key="modal">
            <Icon type="home" />
          </Menu.Item>

          <Menu.Item className="blog" key="blog">
            <Icon type="appstore" /> Blogs
            <Link to='/postlist'></Link>
          </Menu.Item>
          <SubMenu
            className="sign"
            title={
              <span className="submenu-title-wrapper">
                <Avatar icon="user" style={{marginRight: 5}}/>
                Admin
              </span>
            }
          >
            <Menu.Item key="setting:1">Your profile</Menu.Item>
            <Menu.Item key="setting:2">Sign out</Menu.Item>
          </SubMenu>
        </Menu>
      </Fragment>
    );
  }
}
