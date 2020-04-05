import React, { Component } from "react";
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {createPostWatcher} from '../redux/actions/postAction';
import PropTypes from 'prop-types';

 class CreatePost extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            tags: [],
            content:'',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.props.owner)
        const tagsArr = this.state.tags.split(',')
        this.props.createPostWatcher({
            title: this.state.title,
            tags: tagsArr,
            owner: this.props.owner,
            content: this.state.content,
        })
    }
    handleInputChange(event){
        const {value, name} = event.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-8 col-md-offset-2">
                        
                        <h1>Create Post</h1>
                        
                        <form onSubmit={this.handleSubmit}>
                            
                            <div className="form-group">
                                <label for="title">Title <span className="require">*</span></label>
                                <input type="text" className="form-control" name="title" onChange={this.handleInputChange} required/>
                            </div>
                            
                            <div className="form-group">
                                <label for="tags">Tags<span className="require">* (Please input tags as string ex: 'doc,it,hr'</span></label>
                                <input type="text" className="form-control" name="tags" onChange={this.handleInputChange} required/>
                            </div>

                            <div className="form-group">
                                <label for="content">Content</label>
                                <textarea rows="5" className="form-control" name="content" onChange={this.handleInputChange}></textarea>
                            </div>
                            
                            
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">
                                    Create
                                </button>
                                <button className="btn btn-default">
                                    Cancel
                                </button>
                            </div>
                            
                        </form>
                    </div>
                    
                </div>
            </div>
        );
    }
}

CreatePost.propTypes = {
  tags: PropTypes.array,
};
CreatePost.defaultProps = {
  tags: []
};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        createPostWatcher
    }, dispatch)
}

const mapStateToProps = (state) => {
  return{
    owner: state.user.profile._id,
  }
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost)