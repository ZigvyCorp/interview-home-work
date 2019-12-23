
import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    }
  }
  componentDidMount() {
    const user = localStorage.getItem('user');
    if (user) this.setState({ username: user });
  }

  render() {
    const loginPageElement = <NavLink to="/login" exact><span className="glyphicon glyphicon-user"></span> Login</NavLink>;
    const detailPageElement = <NavLink to="/userdetail" exact><span className="glyphicon glyphicon-user"></span> {this.state.username}</NavLink>;
    const targetElement = this.state.username.length > 0 ? detailPageElement : loginPageElement;
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Dummy Social Club</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            {targetElement}
          </ul>
        </div>
        <ul className="nav navbar-nav navbar-right login-field">
          <NavLink to="/userdetail" exact><span className="glyphicon glyphicon-user"></span> Username</NavLink>
          <NavLink to="/login" exact><span className="glyphicon glyphicon-user"></span> Login</NavLink>
        </ul>
      </nav>
    );
  };
}

export default Header;