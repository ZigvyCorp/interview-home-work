import './styles.css'
import { Col, Image, Row, Typography } from 'antd'
import React from 'react'

import imageDefault from '../../assets/Icon.jpg'
import users from '../../data/users.json'

let defaultContent =
  "This is one of the those songs that will never, ever get old... The frequencies and vibrations in this song gives me chills everytime not just that.. It gives me a really good feeling of hope and sadness at the same time but it's a song that I can listen to over and over again"

const Comment = ({ content, ownerId, createdAt }) => {
  const dayCreated = new Date(createdAt)
  const today = new Date()
  const dayCreatedText = today - dayCreated > 86400 ? dayCreated.toDateString() : 'a day ago'
  const owner = users.find((user) => user.id === ownerId)
  return (
    <Row gutter={16} className='comment' style={{ paddingTop: '2rem' }}>
      <Col sm={2} xs={4} className='image-container'>
        <Image src={imageDefault} preview={false} width={'50px'} />
      </Col>
      <Col sm={22} xs={20}>
        <Typography.Text style={{ color: '#9a9a9a' }}>{owner.name || 'Anonymous'}</Typography.Text>
        <span style={{ color: '#d3d3d3' }}> {dayCreatedText}</span>
        <p style={{ color: '#5d5d5d' }}>{content || defaultContent}</p>
        <span style={{ color: '#9a9a9a', cursor: 'pointer' }}>Reply to</span>
      </Col>
    </Row>
  )
}

export default Comment
