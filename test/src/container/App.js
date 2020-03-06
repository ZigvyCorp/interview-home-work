import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import LoginPage from '../components/loginPage';
import RegisterPage from '../components/registerPage';
import HomePage from '../components/homePage';
import AddPostPage from '../components/addPost';
import DetailPerson from '../components/DetailPerson';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/' exact={true} component={HomePage} />
                        <Route path='/login' component={LoginPage} />
                        <Route path='/register' component={RegisterPage} />
                        <Route path='/addPost' component={AddPostPage} />
                        <Route path="/detail" component={DetailPerson} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;