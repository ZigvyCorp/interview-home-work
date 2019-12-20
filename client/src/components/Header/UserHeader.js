import React from "react";
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class UserHeader extends React.Component {
  state = {
    current: 'mail',
  };

//   handleClick = e => {
//     console.log('click ', e);
//     this.setState({
//       current: e.key,
//     });
//   };
  handleToLogin() {
    
  }

  render() {
    return (
      <Menu theme="dark" style={{ lineHeight: '64px', textAlign:"right" }} selectedKeys={[this.state.current]} mode="horizontal">
        <SubMenu style={{textAlign: "right"}} onTitleClick={this.handleToLogin}
          title={
            <span className="submenu-title-wrapper">
              <Icon type="user" />
                Đăng nhập
            </span>
          }
        >
            {/*TODO: check if user login not show this */}
            <Menu.Item key="setting:1">Thông tin cá nhân</Menu.Item>
            <Menu.Item key="setting:2">Đăng xuất</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default UserHeader;