import React, { memo, useState } from 'react';
import styles from './itemPost.module.scss';
import {
  Row,
  Col,
  Layout,
  Divider,
} from 'antd';
import moment from 'moment';
import { handleCutText } from 'helpers'
import { TagCustom, Comment } from 'components';
import dataUsers from 'data/users.json';
import dataComments from 'data/comments.json';

const ItemPost = memo(({ data }) => {
  const { Header, Footer, Content } = Layout;
  const [isShowReply, setIsShowReply] = useState(false)
  const [isShowMoreContent, setIsShowMoreContent] = useState(false)

  const getUser = () => {
    const user = dataUsers.filter((item) => item.id === data.owner)[0]
    return user.username
  }

  const getComments = () => {
    const comment = dataComments.filter((item) => item.post === data.id)
    return comment
  }

  const handleShowReply = () => {
    setIsShowReply((prev) => !prev)
  }

  const handleShowMoreContent = () => {
    setIsShowMoreContent((prev) => !prev)
  }

  return (
    <>
      {data &&
        <Layout className={styles.layout}>
          <Header className={styles.header}>{data.title}</Header>
          <Content className={styles.content}>
            <Row>
              <Col xs={{ span: 12 }} lg={{ span: 12 }}>
                <Row justify="start" className={styles.container__author}>
                  <div>Author: {getUser()}</div>
                  <div>Created at: {moment(data.created_at).format('MMM DD, YYYY')}</div>
                </Row>
              </Col>
              <Col xs={{ span: 12 }} lg={{ span: 12 }}>
                <Row justify="end">
                  {data.tags.length !== 0 && data.tags.map((tag, idx) =>
                    <TagCustom key={idx} value={tag} />
                  )}
                </Row>
              </Col>
            </Row>
            <Col xs={{ span: 24 }} className={styles.content__description}>
              <div>
                {isShowMoreContent ?
                  <>
                    {data.content}
                  </>

                  :
                  <>
                    {handleCutText(data.content)}
                  </>
                }
                <span style={{ cursor: 'pointer', color: 'blue' }} onClick={handleShowMoreContent}>{isShowMoreContent ? ` Less more` : ` Show more`}</span>
              </div>
            </Col>
          </Content>
          <Footer className={styles.footer}>
            <div onClick={handleShowReply} style={{ cursor: 'pointer' }}>{getComments().length} {getComments().length > 1 ? 'replies' : 'reply'}</div>
            <Divider />
            {isShowReply && getComments().map((comment, idx) =>
              <Comment key={idx} value={comment} />
            )}
          </Footer>
        </Layout>
      }
    </>
  )
})

export default ItemPost