import React from 'react'
import FormPostCreate from '../components/posts_view/posts_create'
import { Switch, Route, Redirect, withRouter } from "react-router-dom"

class PostCreate extends React.Component
{
    render()
    {
        return(<FormPostCreate />);
    }
}

export default withRouter(PostCreate)