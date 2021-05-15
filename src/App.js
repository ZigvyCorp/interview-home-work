import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'App.css'
import { Home, PostDetail } from 'containers/index'
import RouteWrapper from 'common/RouteWrapper'
import Header from 'components/Header/Header'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <RouteWrapper exact path="/" component={Home} layout={Header} />
                <RouteWrapper
                    exact
                    path="/detail"
                    component={PostDetail}
                    layout={Header}
                />
            </BrowserRouter>
        </div>
    )
}

export default App
