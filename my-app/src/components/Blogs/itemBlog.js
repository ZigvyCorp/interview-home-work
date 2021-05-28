import React from 'react';
import {Link} from 'react-router-dom'
import AuthorBlog from './authorBlog'
import ContentBlog from './contentBlog'



export default function Item(props) {
    return(
        <div>
            <div className="title-blog">
                <Link to= {`/post?id=` + props.item.id}><strong style={{color: "#000"}}>{props.item.title}</strong></Link>
            </div>
            <AuthorBlog id={props.item.id}/>
            <div className="date-blog">
                <span><strong>Create Date:</strong> {new Date().toDateString()}</span>
            </div>
            <ContentBlog content={props.item.body} />
           
           
        </div>
    )
}