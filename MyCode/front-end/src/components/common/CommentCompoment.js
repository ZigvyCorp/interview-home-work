import React, { Component } from 'react'
import '../../assets/styles/Comment.scss'
export default class CommentCompoment extends Component {

    render() {
        let { comment } = this.props
        return (
            <>
                <div className="comment-card">


                    <div className="comment">
                        <div className="comment-body">
                            <div className="avatar">
                                <img style={{ border: '1px solid', width: "75px", height: '75px' }} />
                            </div>
                            <div className="detail">
                                <div className="name">
                                    <span>{comment.name}</span>
                                </div>
                                <div className="body">
                                    <span>{comment.body}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
