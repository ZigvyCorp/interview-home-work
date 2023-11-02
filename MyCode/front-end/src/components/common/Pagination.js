import React, { Component } from 'react'
import '../../assets/styles/Pagination.scss';
import PostCardComponent from './PostCardCompoment';
export default class Pagination extends Component {
    constructor(props) {
        super(props);
        const initDataShow =
            props.limit && props.posts
                ? props.posts.slice(0, Number(props.limit))
                : props.posts;


        this.state = {
            dataShow: initDataShow,
            pages: 1,
            range: [],
            currPage: 0,
            limit: props.limit,
        };
    }
    componentDidMount() {
        this.calculatePagination();
    }
    componentDidUpdate(prevProps) {
        if(prevProps.posts!==this.props.posts) {
            this.calculatePagination();
            this.selectPage(0);
        }
    }
    selectPage(page) {
        const { posts } = this.props;

        const { limit } = this.state;
        const start = Number(limit) * page;
        const end = start + Number(limit);
        const dataShow = posts.slice(start, end);
        this.setState({ dataShow, currPage: page });
    }



    calculatePagination() {
        const { posts } = this.props;
        const { limit } = this.state;
        if (limit !== undefined) {
            const page = Math.floor(posts.length / Number(limit));
            const pages =
                posts.length % Number(limit) === 0 ? page : page + 1;
            const range = [...Array(pages).keys()];
            this.setState({ pages, range });
        }
    }
    render() {

        let { dataShow, pages, range, currPage } = this.state
        return (
            <>
                {dataShow && dataShow.length > 0 &&
                    <>
                        <div>
                            <div className="table-wrapper">
                                {dataShow.map((data,index) => {
                                    return (
                                        <PostCardComponent post={data} key={index}/>
                                    )
                                })}

                            </div>

                            {pages > 1 && (
                                <div className="table__pagination" >

                                    {range.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`table__pagination-item ${currPage === index ? 'active' : ''
                                                }`}
                                            onClick={() => this.selectPage(index)}
                                        >
                                            {item + 1}
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                    </>
                }
            </>
        )
    }
}
