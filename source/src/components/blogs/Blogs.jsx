import React, { Component } from 'react'
import "./blogs.scss";

export default class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reply_expand: false
        }
    }
    expandReply = (params) => {
        this.setState({reply_expand: !this.state.reply_expand})
    }
    render() {
        let {data} = this.props;
        let element_applies = <div className="blog-replies d-flex">
                                <div className="avatar">
                                    <img src="images/man.png" />
                                </div>
                                <div className="reply-infor">
                                    <p><span className="user-name">Han Solo</span> <small className="time">a day ago</small></p>
                                    <p className="reply-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt ducimus aliquam est rerum esse, incidunt laudantium vitae tempora eius pariatur quasi neque porro quos repellendus cumque.</p>
                                    <a className="" href="#">Reply to</a>
                                </div>
                            </div>;
        return (
            <div className="container">
                <div className="row blog">
            <div className="blog-head">
                <h2 className="blog-title text-center">{data.title}</h2>
                <div className="blog-info d-flex justify-content-between">
                    <div className="blog-info-info">
                        <p className="author">{data.author}</p>
                        <p className="create-at">{data.created_at}</p>
                    </div>
                    <div className="blog-info-color d-flex flex-wrap">
                        <span className="badge badge-magenta">magenta</span>
                        <span className="badge badge-red">red</span>
                        <span className="badge badge-volcano">volcano</span>
                        <span className="badge badge-orange">orange</span>
                        <span className="badge badge-gold">gold</span>
                        <span className="badge badge-lime">lime</span>
                        <span className="badge badge-green">green</span>
                        <span className="badge badge-cyan">cyan</span>
                        <span className="badge badge-blue">blue</span>
                        <span className="badge badge-greekblue">geekblue</span>
                        <span className="badge badge-purple">purple</span>
                    </div>
                </div>
            </div>
            <div className="blog-body">
                <p>{data.content}</p>
            </div>
            <div className="blog-foot">
                <div className="blog-reply-title"><span onClick={() => this.expandReply()}>{data.replies_count} replies</span></div>
                <hr/>
                { this.state.reply_expand && element_applies }
                
            </div>
        </div>
            </div>
            
        )
    }
}

