import { Avatar, Space } from 'antd'

export default function Comment({ comment }) {
    return (
        <div className="comment">
            <div>
                <Space direction='horizontal' size={16}>
                    <Avatar size={40} src='./user.png' />
                </Space>
            </div>
            <div className="commentBody">
                <div style={{ display: 'flex', marginBottom: '0.3em', color: 'gray' }}>
                    <p className="username">Han Solo</p>
                    <p style={{ margin: '0 1em', opacity: '0.5' }}>{ Math.floor(Math.random() * 10) + 1 } days ago</p>
                </div>
                <p className="commentContent">{ comment.body }</p>
                <p className="replyButton">Reply to</p>
            </div>
        </div>
    )
}