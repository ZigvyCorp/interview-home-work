import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import http from '../config/config.js';
import CommentItem from '../components/CommentItem';
import { Card } from 'antd';

export default function PostDetailPage() {
  const [postDetail, setPostDetail] = useState({});
    const [comment, setComment] = useState([]);
  const [expendComment, setExpandComment] = useState(true);
  const { idPost } = useParams();
  
  useEffect(() => { 
    console.log(idPost);
    if (idPost) {
       http.get(`post/get-post/${idPost}`)
      .then((res) => { 
        setPostDetail(res.data);
      })
    .catch((err ) => { console.log(err); })
    }

    if (postDetail) {
      http.get(`/post/get-comment/${idPost}`)
      .then((res) => { 
        setComment(res.data);
      })
      .catch((err) => { 
        console.log(err);
       })
    }
   
  }, [])
  const convertBigInt = (dataTime) => { 
     var date = new Date(dataTime * 1000);
    return date.toDateString();
  }
  return (
   
    <div className='m-5'>
    <Card title={'Post ' + postDetail.id} headStyle={{ fontSize: "24px", textAlign: 'center' }} bordered={false}  >
        <div className=' text-xg-start'>
          <div>
            <p className='m-0'>
              Author:  {postDetail.owner_user?.username || ''}
            </p>
            <p>
              Create at: {convertBigInt(postDetail.owner_user?.create_at)}
            </p>
          </div>
          
          <p>
            {postDetail.content}
          </p>
           <hr />
          <div className='d-flex flex-row'>
            <p className='mx-3'>{ comment.length} replies</p>
            <a href="#" onClick={() => { 
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
