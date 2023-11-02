import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../assets/styles/PostCardCompoment.scss';
class PostCardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDetail: false,

        }
    }

    render() {
        let { post } = this.props;
        let { isDetail } = this.state;

        if (isDetail) {
            post.body = post.body.substring(0, 100)
        }
        return (
            <div className="post-card" onClick={() => this.handleClick(post.id)} >
                <div className="card">
                    <div className="card-body">
                        <div className="card-title"><h2>{post.title}</h2></div>
                        <div className="card-info">
                            <div>Author: {post.name}</div>
                            <div>Created Date: Sep 20, 2018</div>
                        </div>

                        <span>{post.body.substring(0, 100)}</span>

                    </div>
                </div>
            </div>
        );
    }
    handleClick(id) {
        this.props.history.push({
            pathname: `/post/${id}`,
            state: {
                postDetail: {
                    post: this.props.post,
                    id: id
                }

            }
        });
    }

};

export default withRouter(PostCardComponent);