import React from 'react';
import {Router, Route, Redirect, Switch} from 'react-router-dom';
import Blogs from './views/Blogs.container';

interface ILoginProps {
  location: {state: {from: string}};
}

class Login extends React.Component<ILoginProps> {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }
 
    return (
      <div>
        <p>You must log in to view the page</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

interface AppProps {
    history?: any
}
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb: Function) {
    this.isAuthenticated = true
    setTimeout(cb, 100);
  },
  signOut(cb: Function) {
    this.isAuthenticated = false
    setTimeout(cb, 100);
  }
}
const PrivateRoute = (Component: React.ComponentType<any>, path: string) => (
  <Route path={path} render={ (props) => 
    class extends React.Component {
      render() {
        return fakeAuth.isAuthenticated === true? <Component />: <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}  />;
      }
    }
  } />
)

class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }
  render() {
    return (
      <Router history={this.props.history}>
        <Switch>
          <Route path="/" render={(): React.ReactNode => <Redirect to="/login" />} exact />
          <Route path="/login" component={Login}/>
          {/* {PrivateRoute(BlogWrapper, '/blogs')} */}
          <Route path='/blogs' component={Blogs} />
          <Route path='*' render={(): React.ReactNode => <div>Error</div>} />
        </Switch>
      </Router>
    )
  }
}
	

export default App;
