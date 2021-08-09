import './posts.css';
// import './../post/post.css';
import { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/Action'
import { Collapse } from 'react-collapse';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // posts: [],
            // users: [],
            // comments: [],
            loading: false,
            toggle: false,
            toggleId: "",
        }
    }

    componentWillMount() {
        this.fetchAll();
        // this.fetchAllUsers();
        // this.fetchAllPostComments();
        // this.props.fetchALlPosts()
        // console.log(this.state);
    }

    fetchAll = async () => {
        const arrOfPosts = await
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((res) => res.json())
                .then((data) => this.props.fetchAllPosts(data))
        const arrOfUsers = await
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((res) => res.json())
                .then((data) => this.props.fetchAllUsers(data))
        const arrOfComments = await
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then((res) => res.json())
                .then((data) => {
                    this.props.fetchAllComments(data)
                    this.setState({ loading: true })
                })
    }

    handleTogglePost = (id) => {
        // console.log(this.props.data.posts.map(post => post.id === id ? true : false));
        console.log(id);
        this.setState({ toggleId: `${id}`, toggle: !this.state.toggle })
        // this.props.data.posts.map(post => post.id === id ? true : false)
    }

    render() {
        // console.log(this.props.data.comments.filter(el => el.postId === 1).forEach(ele => console.log(ele)));
        // console.log(this.state.toggleId);
        return (
            <div className="posts">
                {
                    this.props.data.posts && this.props.data.users && this.props.data.comments
                        ?
                        this.props.data.posts.map((ele, ind) => {
                            return (
                                <div className="post mx-5 my-5 border border-success p-3" key={ele.id}>
                                    <div className="postTitle fw-bold fs-2">{ele.title}</div>
                                    <div className="postInfo mb-3">
                                        <div className="author">Author: {Array.isArray(this.props.data.users) && this.props.data.users[0] ? this.props.data.users.filter((user) => ele.userId === user.id)[0].name : null} </div>
                                        <div className="createDate">Created at: {new Date().toLocaleString()}</div>
                                    </div>
                                    <div className="des w-100 text-truncate">
                                        {ele.body}
                                    </div>

                                    <div onClick={() => this.handleTogglePost(ele.id)}><strong>{(this.props.data.comments.filter(el => el.postId === ele.id).length)}</strong> comments</div>
                                    <Collapse isOpened={this.state.toggleId == ele.id && this.state.toggle ? true : false}>
                                        {/* <div>1</div> */}
                                        {/* {console.log(this.props.data.comments.filter(el => el.postId === ele.id))} */}
                                        {
                                            this.props.data.comments.filter(el => el.postId === ele.id).map((comment) => {
                                                // console.log(comment);
                                                return (
                                                    <div className="container border mt-2 p-4">
                                                        <div className="row">
                                                            <img style={{ objectFit: 'cover', width: 80, height: 60, borderRadius: "50%" }} src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-avatar-vector-icon-white-background-png-image_5259668.jpg" alt="" />
                                                            <div className="col">
                                                                <div>Ano</div>
                                                                <div>{comment.body}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Collapse>
                                </div>)
                        })
                        :
                        <div>Loading....</div>
                }

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.posts
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllPosts: (data) => {
            dispatch(actions.fetchAllPosts(data))
        },
        fetchAllUsers: (data) => {
            dispatch(actions.fetchAllUsers(data))
        },
        fetchAllComments: (data) => {
            dispatch(actions.fetchAllComments(data))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);