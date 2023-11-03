import { Card, Collapse } from "antd";
import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getComments } from "../../redux/actions/commentAction";
import { getPostDetail } from "../../redux/actions/postDetailAction";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const postDetail = useSelector((state) => state.postDetailReducer.data);
  const commentsObject = useSelector((state) => state.commentReducer.data);
  const comments = Object.values(commentsObject || []);
  
  React.useEffect(() => {
    dispatch(getComments(id));
    dispatch(getPostDetail(id));
  }, [id]);
  

  const collapseItems = [
    {
      key: "1",
      label: `comment : ${comments?.length || 0}`,
      children: (
        <div>
          {comments?.map((comment, index) => (
            <div key={comment.id}>
              <p>{`account : ${comment?.name}`}</p>
              <p>{`email: ${comment?.email}`}</p>
              <p>{comment?.body}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];
    


  return (
    <div style={{ marginRight: "30px", marginLeft: "30px" }}>
      <Card
        title={postDetail?.title}
        style={{ width: "100%", marginTop: "30px" }}
      >
        <p>{`time : ${moment(postDetail.createdAt).format("DD/MM/YYYY")}`}</p>
        <p>{`author : ${postDetail?.author}`}</p>
        <p>{postDetail?.body}</p>
      </Card>
      <Collapse style={{marginTop:"30px"}} items={collapseItems} defaultActiveKey={['1']} onChange={()=> {console.log("1212")}} />;
    </div>
  );
};

export default PostDetail;
