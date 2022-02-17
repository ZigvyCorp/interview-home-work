import React from "react";
import Comment from "./commentComponent"

function postComponent({user,post,commentList}) {
    const styles = {
        title_header: {
          marginTop: '20px',
          textAlign: 'center'
        }
    }

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  return (
    <div>
        {
            post.map((post, index) => {
                let newCommentList = [];
                if (Object.keys(commentList).length > 0) {
                    for (let i = 0; i < commentList.length; i++) {
                        let comment = commentList[i];
                        if (comment.postId === index+1) {
                            newCommentList.push(comment);
                        }
                    }
                }
                return (
                <React.Fragment>
                    <div style={styles.title_header} ><h3 style={{fontSize: '70px'}}>Post Title {index + 1}</h3></div>
                    <div className='post_author-info'>
                        <h2 style={{margin: '0'}}>Author : {user.name}</h2>
                        <h2 style={{margin: '0'}}>Created At: {date}</h2>
                    </div>
                    <div key={index} style={{marginTop:'20px'}}><h2>{post.body}</h2>
                    <Comment comments={newCommentList} />
                    </div>
                </React.Fragment>
                );
            })
        }
    </div>
  );
}

export default postComponent;
