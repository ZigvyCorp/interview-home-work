import { Card } from "antd";
import React from "react";
import './Card.css';

const CardComponent = () => {
    return (
        <Card
            title="Title"
            style={{width: "100%"}}
        >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    )
}

export default CardComponent