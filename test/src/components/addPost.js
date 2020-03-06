import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/actionCreators'
import { bindActionCreators } from 'redux';
import Header from './Header';
import Footer from './Footer';


class AddPostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postTitle: '',
            postTag: '',
            postContent: []
        }
    }


    onHandlePost = (e) => {
        e.preventDefault();
        let postTitle = e.target.postTitle.value;
        let postTag = e.target.postTag.value;
        let postContent = e.target.postContent.value;

        const data = {
            postTitle, postTag, postContent
        }
        this.props.addPost(data);

        console.log(data)
    }

    render() {
        return (
            <div className="container">
                <Header />
                <div className="form-group mt-4" style={{marginBottom: '60px'}}>
                    <div className="row col-sm-6">
                        <h2>Add Post Here</h2>
                    </div>
                    <div className="row col-sm-12 col-lg-12">
                        <form onSubmit={this.onHandlePost} className="formPost col-12">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" name="postTitle" id="postTitle" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tag">Tags</label>
                                <input type="text" id="postTag" name="postTag" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Content</label>
                                <input type="text" id="postContent" name="postContent" className="form-control" />
                            </div>
                            <div className="row btnSubmit" style={{ justifyContent: 'flex-end' }}>
                                <button type="submit" className="btn btn-primary ml-3">Post</button>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addPost
    }, dispatch)
}



export default connect(null, mapDispatchToProps)(AddPostPage)