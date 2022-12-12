import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './comment.css'
import {Divider} from "antd";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {name, email, body} = this.props.commentInfo
        return (
            <>
                <div className="comment">
                    <div className="comment__avatar"></div>
                    <div className="comment__info">
                        <p className="comment__info__name">{name}</p>
                        <p className="comment__info__email">{email || '--'}</p>
                        <p className="comment__info__content">{body || '--'}</p>
                    </div>
                </div>
                <Divider />
            </>
    );
    }
}

Comments.propTypes = {
    commentInfo: PropTypes.object
};

export default Comments;