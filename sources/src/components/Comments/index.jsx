import React, { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import './styles.scss'
import { useSelector } from 'react-redux';
import DetailComment from './components/DetailComment';

const { Panel } = Collapse;

function Comments(props) {
    const listComments = useSelector(state => state.listComments.listComments);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        let postComments = listComments.filter((item) => {
            return item.post === props.idPost
        })
        setComments(postComments);
    }, [props.idPost])
    return (
        <div className="comments">
            <Collapse bordered={false} defaultActiveKey={props.defaultValue === "true" ? [1] : ''} className="collapse" expandIconPosition='right' ghost>
                <Panel header={<h5 className="title">{`Comments (${comments.length > 0 ? comments.length : 0})`}</h5>} key="1">
                    <div className="rd-reviews">
                        {
                            comments.map((item, index) => <DetailComment key={index} item={item} />)
                        }
                    </div>
                </Panel>
            </Collapse>
        </div>
    );
}

export default Comments;