import React, { Component } from 'react';
import API from "../../utils/api";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comments: [],
            users: [],
        };
    }

    componentDidMount() {
        API("user", "GET", null)
        .then((res) => {
            this.setState({ users: res.data });
        });
        API("post", "GET", null)
        .then((res) => {
            this.setState({ posts: res.data });
        })
        API("comment", "GET", null)
        .then((res) => {
            this.setState({ comments: res.data });
        })
    }

    render() {
        const users = this.state.users;
        const posts = this.state.posts;
        const comments = this.state.comments;
        return (
            <>
                {posts.map((post) =>(
                    <div className="container m-5">
                <div className="row">
                    <div className="col-md-8 offset-md-2 col-xs-12">
                        <img src="https://th.bing.com/th/id/OIP.MyIjAP-J-ngoUhEZKkW4NAHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" className="card-img-top w-25" alt="No images" />
                                <div className="Tags">
                                    <span className="Tag">TAGS</span>
                                    {post.tags.map((tag) => (
                                        <a className="Tag">{ tag }</a>
                            ))}
                        </div>
                        <div className="card-body">
                                    <h2 className="text-center post-title">{ post.title }</h2>
                                    <h6 className="card-title">Author: 
                                        {users.map((user) => {
                                            if (post.owner === user.id)
                                                return user.name;
                                        })}
                                        
                                    </h6>
                                    <h6 className="card-title">Created at:
                                        {Date(post.created_at).toString()}
                                    </h6>
                            <br></br>
                                    <p className="card-text">{ post.content }</p>
                            <p>
                            <button className="btn btn-secondary"
                                data-bs-toggle="collapse"
                                data-bs-target={"#collapseExample" + post.id} 
                                >
                                Comment 
                            </button>
                            </p>
                        <div
                                        className="collapse"
                                        id={"collapseExample" + post.id}
                        >
                            <div className="card card-body">
                                {comments.map(comment => {
                                    if (comment.post === post.id) {
                                        return <p>{ comment.content }</p>;
                                    }
                                })}
                            </div>
                        </div>  
                    </div>
                </div>              
            </div>
                <hr></hr>
            </div>
                ))}
            </>
            
        )
    }
}

export default Post;