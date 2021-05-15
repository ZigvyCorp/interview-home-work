import React, { useState } from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import CommentList from 'components/CommentList/CommentList'
import { randomTimeInWorkday, randomDayStarting } from 'common/helpsFunc'
import 'styles/PostItem-styles.scss'

export default function PostItem(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [mes, setMes] = useState()
    const colorList = [
        {
            id: 1,
            name: 'magenta',
            code: '#FF00FF',
            bg: 'rgba(255,0,255, 0.1)'
        },
        {
            id: 2,
            name: 'red',
            code: '#FF0000',
            bg: 'rgba(255,0,0, 0.1)'
        },
        {
            id: 3,
            name: 'volcano',
            code: '#F84F3E',
            bg: 'rgba(248, 79, 62, 0.1)'
        },
        {
            id: 4,
            name: 'orange',
            code: '#FFA500',
            bg: 'rgba(255,165,0, 0.1)'
        },
        {
            id: 5,
            name: 'gold',
            code: '#FFD700',
            bg: 'rgba(255,215,0, 0.1)'
        },
        {
            id: 6,
            name: 'lime',
            code: '#00FF00',
            bg: 'rgba(0,255,0, 0.1)'
        },
        {
            id: 7,
            name: 'green',
            code: '#008000',
            bg: 'rgba(0,128,0, 0.1)'
        },
        {
            id: 8,
            name: 'cyan',
            code: '#00FFFF',
            bg: 'rgba(0,255,255, 0.1)'
        },
        {
            id: 9,
            name: 'blue',
            code: '#0000FF',
            bg: 'rgba(0,0,255, 0.1)'
        },
        {
            id: 10,
            name: 'geekblue',
            code: '#1269C7',
            bg: 'rgba(18, 105, 199, 0.1)'
        },
        {
            id: 11,
            name: 'purple',
            code: '#800080',
            bg: 'rgba(128,0,128, 0.1)'
        }
    ]

    const styleButton = color => {
        var styleButton
        // eslint-disable-next-line no-unused-vars
        return (styleButton = {
            color: color.code,
            borderColor: color.code,
            backgroundColor: color.bg,
            opacity: 0.5
        })
    }

    const randomCreateDate = () => {
        let date = new Date()
        var randomDay = randomDayStarting(date)
        var timestamp = randomTimeInWorkday(randomDay)
        return new Date(timestamp).toDateString()
    }

    const handleNumberCmt = number => {
        setMes(number)
    }

    return (
        <div className="post-item">
            <h2 className="post-item__title">{props?.data?.title}</h2>
            <Row className="post-item__content">
                <Col className="post-item__content--left">
                    <p className="post-item__content--info">
                        <span className="post-item__content--label">
                            Author:{' '}
                        </span>
                        <span>{props?.data?.name}</span>
                    </p>
                    <p className="post-item__content--info">
                        <span className="post-item__content--label">
                            Create at:{' '}
                        </span>
                        <span>{randomCreateDate()}</span>
                    </p>
                </Col>
                <Col className="post-item__content--right">
                    {colorList.map(color => (
                        <Button
                            key={color.id}
                            style={styleButton(color)}
                            variant="outline"
                        >
                            {color.name}
                        </Button>
                    ))}
                </Col>
            </Row>
            <Row className="post-item__description">
                <p className="post-item__description--content">
                    {props?.data?.body.substring(0, 100)}
                    {'...'}
                </p>
            </Row>
            <Row className="post-item__list-comment">
                <p
                    className="post-item__list-comment--number-reply"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span>{mes} </span>
                    <span>replies</span>
                </p>
                <hr />
                <div
                    className="wrapper"
                    style={
                        isOpen === true
                            ? { display: 'block' }
                            : { display: 'none' }
                    }
                >
                    <CommentList
                        postId={props?.data?.id}
                        takeNumber={handleNumberCmt}
                    />
                </div>
            </Row>
        </div>
    )
}
