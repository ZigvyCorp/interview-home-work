import React from "react";
import { capitalize, formatDateToString } from "../../utils/helper";
import { withRouter } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';
import { connect } from "react-redux";
import CommentList from "../comments/comment-list";
import { Collapse } from 'antd';
import 'antd/dist/antd.css';

const { Panel } = Collapse;

const PostTable = (props) => {
  const { posts, history } = props;

  return (
    <table className="table table-hover table-borderless table-responsive w-100 d-table mr-2 ml-2">
      <tbody>
        {posts && posts.length !== 0 ? (
          posts.map((post, index) => {
            const comments = post.comments.filter(item => !item.isDelete).reverse();
            const { owner } = post;
            return (
              <tr key={index.toString()}>
                <td>
                  <div className="card" style={{ width: "calc(100vw - 50px)" }}>
                    <div className="card-body post-hover" style={{ cursor: 'pointer' }} onClick={() => history.push(`/post/${post._id}`)}>
                      <div className="d-flex">
                        <img height={90} width={90} src={post.images} alt="" />
                        <div className="ml-2">
                          <h4 className="card-title">{capitalize(post.title)}</h4>
                          <div className="card-text-content">
                            {ReactHtmlParser(post.content)}...
                          </div>
                          <span className="card-text small">
                            Created at {formatDateToString(post.createdAt)} | {owner && owner.name}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer p-0">
                      <Collapse>
                        <Panel header={`${comments.length} comments`} key="1">
                          <CommentList comments={comments} />
                        </Panel>
                      </Collapse>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td className="m-5 text-center"> There are no records</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PostTable));
