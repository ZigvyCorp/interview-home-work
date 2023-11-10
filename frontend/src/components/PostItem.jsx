import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import http from '../config/config.js';
import {useNavigate } from 'react-router-dom';
import CommentItem from './CommentItem.jsx';

export default function PostItem(prop) {
  const [comment, setComment] = useState([]);
  const [expendComment, setExpandComment] = useState(true);
  const naviage = useNavigate();
  let { item } = prop;

  useEffect(() => {
    if (item) {
    http.get(`/post/get-comment/${item.id}`)
      .then((res) => { 
        setComment(res.data);
      })
      .catch((err) => { 
        console.log(err);
       })
    }
  
  }, [])
  
  const summarizeContent = (content) => { 
    content = content+"";
    let resuft = content.slice(0,100);
    return resuft + " ...";
  }
  const convertBigInt = (dataTime) => { 
     var date = new Date(dataTime * 1000);
    return date.toDateString();
   }
    
  
  return (
      <div>
      <Card title={'Post ' + item.title} headStyle={{ fontSize: "24px", textAlign: 'center' }} bordered={false} extra={<a href="#" onClick={
        () => { setTimeout(() => {
          naviage(`/post-detail/${item.id}`)
        }, 1000); }
            }>See article details</a>} >
        <div className=' text-xg-start'>
          <div>
            <p className='m-0'>
              Author:  {item.owner_user.username || ''}
            </p>
            <p>
              Create at: {convertBigInt(item.owner_user.create_at)}
            </p>
          </div>
          
          <p>
            {summarizeContent(item.content)}
          </p>
           <hr />
          <div className='d-flex flex-row'>
            <p className='mx-3'>{ comment.length} replies</p>
            <a href="#" onClick={(e) => { 
              e.preventDefault();
              setExpandComment(!expendComment)
            }}>{ expendComment ?  "View comments": "Hidden comments"} </a>
          </div>
         
          <div hidden ={expendComment}>
            {
              comment.map((cmt) => { 
                return (
                  <CommentItem key={cmt.id} cmt={ cmt} />
                )
               })
            }
          </div>
       </div>
      </Card>
    </div>
  )
}
