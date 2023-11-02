import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../store/actions/actions';
import Pagination from '../components/common/Pagination';
import '../assets/styles/Home.scss'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true,
            keySearch: '',
            filteredPosts: []
        }
    }

    async componentDidMount() {
        await this.props.fetchPosts();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.posts !== this.props.posts) {
            this.setState({
                posts: this.props.posts,
                loading: this.props.loading,
                filteredPosts: this.props.posts
            })
        }
        if (prevState.keySearch !== this.state.keySearch) {
            this.handleFilterCustomer();
        }
    }
    handleFilterCustomer = () => {
        let { posts, keySearch } = this.state
        const filteredPosts = posts.filter(post => {
            const isSearchMatched = Object.values(post).some(value => {
                if (typeof value === 'string') {
                    return value.toLowerCase().includes(keySearch.toLowerCase());
                }
            });

            return isSearchMatched;
        });

        this.setState({
            filteredPosts: filteredPosts
        })
    }
    handleChangeInput3 = (event) => {
        let { value } = event.target
        this.setState({
            keySearch: value

        })
    }

    handleClick = async () => {
        try {
            await this.props.fetchPosts();

        } catch (error) {
            console.log("Fetching posts", error);
        }

    }
    render() {
        const { filteredPosts, loading } = this.state;

        return (
            <>

                {filteredPosts && <>
                    <div className="row m-4">
                        <div className="col-12">
                            <div className="filterbox">
                                <div className="filter__body" >
                                    <div className="form-group">
                                        <div className="topnav__search" onChange={(event) => this.handleChangeInput3(event)}>
                                            <input type="text" name='searchValue' placeholder='Search here...' />
                                            <i className='bx bx-search'></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {loading ? (
                        <p>Loading...</p>
                    ) :
                        // (
                        //     posts.map((post) => (
                        //         <PostCardComponent key={post.id} post={post} />
                        //     )))

                        <Pagination posts={filteredPosts} limit='10' />

                    }
                </>}

            </>
        );
    }

}
function mapStateToProps(state) {
    return {
        posts: state.postsReducer.posts,
        loading: state.postsReducer.loading,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    };
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(Home);