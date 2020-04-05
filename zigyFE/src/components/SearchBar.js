import React, { Component } from 'react';
import {getPostByKeywordWatcher} from '../redux/actions/postAction';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

class SearchBar extends Component {
    constructor(){
        super();
    this.handleOnchange = this.handleOnchange.bind(this);
    }


handleOnchange(event){
    const {value} = event.target;
    this.props.getPostByKeywordWatcher(value)
    
}

render() {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label>Search Post</label>
                    <input onChange={this.handleOnchange} querystring="queryString" type="text" className="form-control" placeholder="Search Post"/>
                </div>
            </form>
        </div>
    )
  }
}

SearchBar.propTypes = {
  posts: PropTypes.array,
};
SearchBar.defaultProps = {
  posts: []
};

const mapStateToProps = (state) => {
  return{
    posts: state.post.posts,
  }
  
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPostByKeywordWatcher
    }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
