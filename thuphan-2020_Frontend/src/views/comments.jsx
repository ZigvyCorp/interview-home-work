import React from 'react';
import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

class Comments extends Component {

    render() {
        return (
            <div className='mt-3'>
                <Row>
                    <Col>2 comments</Col>
                    <Col>(The comments sections can be toggled or expanded)</Col>
                </Row>
                <Row>
                    <Col>
                        <p> You can set breakpoints for the fluid prop. Setting it to a breakpoint (sm, md, lg, xl) will set the Container as fluid until the specified breakpoint.</p>
                    </Col>
                    </Row>
            </div>
        );
    }
}


export default Comments;
