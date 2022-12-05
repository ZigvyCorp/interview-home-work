import React from 'react';
import Comment from './Comment';
import { Collapse } from 'antd';
import { useSelector } from 'react-redux'

const { Panel } = Collapse;

const CommentList = ({ postId }) => {
    const comment = useSelector(state => state.comment.allComment.filter(f => f.post === postId))
  return (
    <div>
          <Collapse ghost>
              <Panel header={`${comment.length} replies`}>
                {comment.map((item, i) =>
                  <Comment data={item} key={i} />
                )}
              </Panel>
          </Collapse>
    </div>
  )
}

export default CommentList