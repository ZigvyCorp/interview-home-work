import { Comment, List, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
import React, { useEffect, useState } from 'react';
import axiosClient from '../../api/axios.config';
import Moment from 'moment';
const { Panel } = Collapse;
const action = [<span key="comment-list-reply-to-0">Reply to</span>]
const avatar= 'https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg'

const ListComment = ({pid}) => {


    const [expanded, setExpanded] = useState(false);
    const onChange = (key) => {
        console.log(key);
    };
    const [comments,setComments] =useState([])
    const [length,setLength] =useState(0)

    useEffect(() => {
         axiosClient.get(`/comments/posts/${pid}`) 
            .then(function (response) {
               
                setComments(response?.elements)
                setLength(response.total)
            })
            .catch(function (error) {
                console.log(error);
            });

      
    }, [expanded]);

    const convertDate = (date)=>{
        Moment.locale('en');
        const newDate = new Date(date)
        return Moment(newDate).format('dd MM YYYY HH:mma');
    }
    const calDate = (date)=>{
        const newDate = new Date(date)
        const diff = Moment(newDate).diff(Date.now);
        
        return diff.days
    }
    function getPostTime(date) {
        const now = Moment();
        const postDate = Moment(date);
      
        const diff = now.diff(postDate, "days");
      
        if (diff === 0) {
          return "Hôm nay, lúc " + postDate.format("HH:mm");
        } else if (diff === 1) {
          return "Hôm qua, lúc " + postDate.format("HH:mm");
        } else {
          return `${diff} ngày trước, lúc " + postDate.format("HH:mm")}`;
        }
      }
    return (
        <Collapse defaultActiveKey={['0']} onChange={onChange} ghost>
            <Panel header={`${length} replies`} key="1" showArrow={false} className="">
                <List
                    className="comment-list"
                    itemLayout="horizontal"
                    dataSource={comments}
                    renderItem={(item) => (
                        <li>
                            <Comment
                                actions={action}
                                author={item.owners.username||item.owners.name}
                                avatar={avatar}
                                content={ <p>
                                    {item.content}
                                </p>}
                                datetime={ <Tooltip title={`${convertDate(item.created_at)}`}>
                                <span>{getPostTime(item.created_at)}</span>
                            </Tooltip>}
                            />
                        </li>
                    )}
                />
            </Panel>
        </Collapse>
    );
};

export default ListComment;
