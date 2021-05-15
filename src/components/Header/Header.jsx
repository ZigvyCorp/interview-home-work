import React from 'react'
import { Navbar, Image, Row, Col } from 'react-bootstrap'
import { LOGO, USER_AVATAR } from 'common/images'
import 'styles/Header-styles.scss'

export default function Header(props) {
    return (
        <>
            <header className="container-fluid">
                <Navbar>
                    <Navbar.Brand href="/">
                        <img className="logo" src={LOGO} alt="Logo" />
                    </Navbar.Brand>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h2>Blogs</h2>
                        </Col>
                    </Row>
                    <Row className="user-info">
                        <Col className="user-info__avatar">
                            <Image
                                className="user-info__avatar--image"
                                src={USER_AVATAR}
                                rounded
                            />
                        </Col>
                        <Col className="user-info__user-name">
                            <p className="user-info__user-name--text">
                                Adam Levine
                            </p>
                        </Col>
                    </Row>
                </Navbar>
            </header>
            {props.children}
        </>
    )
}
