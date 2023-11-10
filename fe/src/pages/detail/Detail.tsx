import { useEffect } from "react";
import { BoxColor, Collapse, Comment } from "../../components";
import { useDispatch } from "react-redux";
import { postDetail } from "../../redux/postAction";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

type User = {
  name: string;
};

type Comment = {
  content: string;
  owner: User;
};

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.postData);
  useEffect(() => {
    dispatch(postDetail(id as string));
  }, [dispatch]);

  return (
    <div className="container home">
      {data.docs ? (
        <div className="home-body">
          <div key={data.docs._id} className="post">
            <div className="post-container">
              <div className="post-header">
                <div className="post-header-content">
                  <h4 className="post-header-content-title">
                    {data.docs.title}
                  </h4>
                  <i className="post-header-content-date">Sep 20, 2018</i>
                </div>

                <div>
                  {data.docs.tags.map((tag: string) => (
                    <BoxColor text={tag}></BoxColor>
                  ))}
                </div>
              </div>
              <i className="post-header-author">Author: John Smith</i>
              <div className="post-content">
                <p>{data.docs.content}</p>
              </div>
            </div>
            <Collapse
              id={data.docs._id}
              text={`Comments (${data.docs.comments.length})`}
            >
              {data.docs.comments.map((comment: Comment) => (
                <Comment content={comment.content} owner={comment.owner} />
              ))}
            </Collapse>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailPage;
