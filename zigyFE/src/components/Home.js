import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tags from './Tags';
import {getPostWatcher} from '../redux/actions/postAction';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import history from '../history';
import debounce from "lodash.debounce";

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
        page: 1,
        localPosts:[],
    }
    this.handleScroll = this.handleScroll.bind(this);

  }

  updateLoalPosts = () => {
      let numberOfPost = [];
      let pageCount = this.state.page;
      if(pageCount*3 <= this.props.posts.length){
          console.log(pageCount*3);
         numberOfPost = this.props.posts.slice(0,pageCount*3);
      }else{
        numberOfPost = [...this.props.posts];
      }
      
      console.log(numberOfPost)
      this.setState({localPosts: numberOfPost})
  }
  updatePageNumber = () =>{
      this.setState({page: this.state.page + 1})
      console.log(this.state.page)
  }
  componentDidMount(){
      window.addEventListener("scroll", this.handleScroll);
      this.props.getPostWatcher();
      this.initLocalPost();
      
  }

  initLocalPost = () => {
      if(this.props.posts.length !== 0){
        const numberOfPost = this.props.posts.slice(0,this.state.page*3)
        this.setState({localPosts: numberOfPost})
      }
  }

   componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

  handleScroll() {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
            this.updatePageNumber();
            this.updateLoalPosts();
        } else {
    }
}

  convertUnixtimeToDateTime(unixTime){
    const dateTime = new Date(unixTime * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = dateTime.getFullYear();
    const month = months[dateTime.getMonth()];
    const date = dateTime.getDate();
    const hour = dateTime.getHours();
    const min = dateTime.getMinutes();
    const sec = dateTime.getSeconds();
    const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
  render() {
    const {posts} = this.props;
    //const posts = this.state.localPosts;
    return (
    <div>
        <SearchBar/>
        <button className="btn btn-primary btn-block" style={{width: '10%',height:"10%"}}  onClick={() => {history.push('/createpost')}}>Create Post</button>
           {
            posts.map((post,i) => {
              return(
                <div className="container" k={i}>
                    <div className="col-md-12">
                        <h1>{post.title}</h1>
                        <p>{post.content.substring(0,100)}</p>
                        <div>
                        <h6>Author: {post.username}</h6>
                        <span className="badge">Posted: { this.convertUnixtimeToDateTime(post.created_at)}</span>
                        <Tags tags={post.tags}/>       
                        </div>
                        <hr/>
                    </div>
                </div>
              )
          }) } 
          
    </div>
    );
  }
}

Home.propTypes = {
  posts: PropTypes.array,
};
Home.defaultProps = {
  posts: []
};

const mapStateToProps = (state) => {
  return{
    posts: state.post.posts,
  }
  
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPostWatcher
    }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

// new Date(post.created_at * 1000