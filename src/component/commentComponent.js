import React , {useState}from "react";
import {Collapse} from "react-bootstrap";

function commentComponent({comments}) {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);

  return (
    <div style={{padding: '0 16px 0 16px'}}>
      <div style={{borderBottom: '1px solid #ccc'}}>
        <p onClick={() => setOpen(!open)} className='replies'>{comments.length} replies</p>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {(Object.keys(comments).length === 0) ?  (<h1>...</h1>) : (comments.map((comment, index)=>{
              return (
                <div key={index}>
                  <div className="comments">
                    <div className="comments_logo">
                        <img src="https://inkythuatso.com/uploads/thumbnails/800/2021/11/logo-mu-inkythuatso-3-01-05-15-53-03.jpg"></img>
                    </div>
                    <div className="comments_title">
                      <div className="comments_title_header">
                        <p>{comment.name} </p>
                        <p style={{fontSize: '20px', color: '#cccccc', paddingLeft: '8px'}}>a day ago</p>
                      </div>
                      <div className="comments_title_body">
                        <h4 style={{fontSize: '26px'}}>{comment.body}</h4>
                      </div>
                      <div className="comments_title_replyto">
                        <p>Reply to</p>
                      </div>
                    </div>
                  </div>
                </div>)
            }))}
        </div>
      </Collapse>
    </div>
  );
}

export default commentComponent;
