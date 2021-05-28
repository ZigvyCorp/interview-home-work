import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";

import {Row, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import NoMatch from './pages/NoMatch'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'

function App() {
  return (
    <Router>
       <header className="App-header">
        <Row justify={'space-between'} align={'middle'}>
          <Col span={8} style={{textAlign: 'left'}}>
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
          </Col>
          <Col span={8} className="containter-logo">
            <Link to="/">
              <strong className='text-logo'>Blogs</strong>
            </Link>
          </Col>
          <Col span={8} style={{textAlign: 'right', paddingRight: '1rem'}}>
            <Avatar shape="square" size={'default'} icon={<UserOutlined />} /> 
            <span className="Account">Adam Levine</span>
          </Col>
        </Row>
      </header>


      <Switch>
          <Route path="/post">
            <PostDetail />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/notfound" exact>
            <NoMatch />
          </Route>
          <Route path="*">
              <NoMatch />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
