import React, { Component } from 'react'
import { getComments } from '../services/commentService';
import { connect } from 'react-redux';
import { fetchComments } from '../store/actions/actions';
import CommentCompoment from '../components/common/CommentCompoment';
class PostDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            loading: true,
            comments: null,
            isShowCommnent: false,
        }
    }

    async componentDidMount() {
        let { postDetail } = this.props.location.state
        if (postDetail) {
            this.setState({
                post: postDetail.post
            })
            await this.props.fetchComments(postDetail.id)
        }

    }
    componentDidUpdate(prevProps) {
        if (prevProps.comments !== this.props.comments) {
            this.setState({
                comments: this.props.comments
            })
        }
    }
    render() {
        let { post, loading, comments, isShowCommnent } = this.state

        return (
            <>
                {post && comments && comments.length > 0 &&

                    <>
                        <div className="post-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title"><h2>{post.title}</h2></div>
                                    <div className="card-info">
                                        <div>Author: {post.name}</div>
                                        <div>Created Date: Sep 20, 2018</div>
                                    </div>
                                    <p>{post.body}</p>
                                    <div onClick={() => this.setState({ isShowCommnent: !isShowCommnent })} >{comments.length} bình luận</div>
                                    {isShowCommnent && <>
                                        {comments.map((comment, index) => {
                                            return (<CommentCompoment comment={comment} key={index} />)

                                        })}
                                        <div onClick={() => this.setState({ isShowCommnent: false })} >Ẩn bình luận</div>
                                    </>
                                    }


                                </div>
                            </div>

                        </div>

                    </>
                }


            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        comments: state.commentsReducer.comments,
        loading: state.commentsReducer.loading,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchComments: (postId) => dispatch(fetchComments(postId))
    };
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(PostDetails);