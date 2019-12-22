import React from "react"
import { Switch, Route, Redirect, withRouter } from "react-router-dom"
import PostsView from '../components/posts_view/posts_view'


class Home extends React.Component {

    render()
    {
        return (
                <Switch>
                    <Route exact
                        path='/home/view/:page'
                        component={PostsView}/>
                    <Redirect from='/home' to='/home/view/1' />
                </Switch>
        );
    }
}
export default withRouter(Home);