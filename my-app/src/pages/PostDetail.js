import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useLocation} from 'react-router-dom'

import {fetchPostDetail} from "../redux/action/index"

import ItemBlog from '../components/Blogs/itemBlog'
import ListComment from '../components/Comments/listComment'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
  
export default function PostDetail(){
    const dispatch = useDispatch();
    let query = useQuery();

    useEffect(() => {
        if(query.get("id")) 
            dispatch(fetchPostDetail(query.get("id")));
    })

    const PostDetail = useSelector((state) => state.postDetail);
    console.log()
    
    if(query.get("id") || PostDetail){
        if(PostDetail.postDetail != null || PostDetail.commentPost != null)
        return(
            <div className="container">
                <ItemBlog item={PostDetail.postDetail[0]}/>
                <div>{PostDetail.commentPost.length} replies</div>
                <ListComment visiable={true} data={PostDetail.commentPost}/>
            </div>
           
        )
    else return(<div>Not Found Post</div>)
    } else return(<h1>Loadding....</h1>)

    
}