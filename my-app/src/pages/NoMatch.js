import React from 'react'
import {Link} from 'react-router-dom'
import { Col } from 'antd';

export default function NoMatch(){
    return(
        <Col style={{textAlign: 'center', marginTop: '4rem'}}>
            <h1>404 - Not Found!</h1>
            <Link to="/">
                Go Home
            </Link>
        </Col>
    )
}