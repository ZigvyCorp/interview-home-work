import React from 'react'
import { Route } from 'react-router-dom'

export default function RouteWrapper({
    component: Component,
    layout: Layout,
    ...rest
}) {
    return (
        <Route
            {...rest}
            render={props => (
                <Layout {...props}>
                    <Component {...props} />
                </Layout>
            )}
        />
    )
}
