import React, { useState } from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import 'styles/SearchBar-Style.scss'

export default function SearchBar(props) {
    const [input, setInput] = useState('')

    const handleInput = text => {
        setInput(text.target.value)
    }

    const handleSearch = () => {
        return props.clickSearch(input)
    }

    return (
        <div className="search-bar">
            <Row>
                <Col>
                    <input
                        className="search-bar__input-text"
                        type="text"
                        placeholder="Search here ..."
                        onChange={handleInput}
                    />
                    <Button onClick={handleSearch} variant="outline-success">
                        Search
                    </Button>{' '}
                </Col>
            </Row>
        </div>
    )
}
