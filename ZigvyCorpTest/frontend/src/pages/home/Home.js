import { useEffect, useState } from 'react';
import Header from '../../layouts/header/Header';
import { Layout, Avatar, Space, Tag, Collapse, Input } from 'antd';
import {
    getListPostActionRequest,
    getCommentsInPostActionRequest,
    searchPostActionRequest,
} from '../../redux/actions/postActions';
import './home.scss';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/LoadingError/Loading';
import Comments from '../../components/comment/Comments';
import MyPagination from '../../components/pagination/Pagination';
const { Content } = Layout;
const { Search } = Input;
function Home() {
    const dispatch = useDispatch();
    const valuePostState = useSelector((state) => state.postStates);
    console.log('valuePostState = ', valuePostState);

    const { loading, error, listPost, commentsData } = valuePostState;
    const { data, Pagination } = listPost;
    const truncateText = (text) => {
        const words = text.split(' ');
        if (words.length <= 50) {
            return text;
        } else {
            const truncatedWords = words.slice(0, 50);
            return truncatedWords.join(' ') + '...';
        }
    };
    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const day = date.getDate();
        const month = date.getMonth() + 1; // Lưu ý: Tháng trong JavaScript bắt đầu từ 0
        const year = date.getFullYear();

        const formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;

        return formattedDate;
    }

    const CommentList = (arrComment, idPost) => {
        if (arrComment.length > 0) {
            const filteredComments = arrComment.filter((comment) => comment.post === idPost);
            console.log('filteredComments = ', filteredComments);
            if (filteredComments?.length > 0) {
                return filteredComments.map((item) => (
                    <div className="wrap-comment" key={item.id}>
                        <div className="wrap-avatar">
                            <Avatar
                                size={'large'}
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            />
                        </div>
                        <div>
                            <div className="wrap-name-time">
                                <p className="comment-user">{item.owner.name}</p>
                                <p className="comment-time">a day ago</p>
                            </div>
                            <p className="content-comment">{item.content}</p>
                            <div>
                                <p className="btn-replies">reply to</p>
                            </div>
                        </div>
                    </div>
                ));
            } else {
                return <>Không có bình luận</>;
            }
        }
    };
    useEffect(() => {
        dispatch(getListPostActionRequest({ pageNumber: 1, pageSize: 10 }));
    }, []);
    const onSearch = (value) => {
        dispatch(searchPostActionRequest({ pageNumber: 1, pageSize: 10, title: value }));
    };
    return (
        <>
            <Layout>
                <Header />
                <Content>
                    <div className="wrap-search">
                        <Search
                            placeholder="input search text"
                            className="input-search"
                            onSearch={onSearch}
                            enterButton
                        />
                    </div>
                    {loading && <Loading />}
                    {data?.map
                        ? data?.map((item) => (
                              <div>
                                  <div className="wrap-item-content">
                                      <div>
                                          <p className="post-title">{item.title}</p>
                                          <div className="wrap-info">
                                              <div className="item1">
                                                  <p className="author">Author: {item.owner.name}</p>
                                                  <p>Created at: {formatDate(item.created_at)}</p>
                                              </div>
                                              <div className="item2">
                                                  <Space size={[0, 'small']} wrap>
                                                      <Tag bordered={false} color="magenta">
                                                          magenta
                                                      </Tag>
                                                      <Tag bordered={false} color="red">
                                                          red
                                                      </Tag>
                                                      <Tag bordered={false} color="volcano">
                                                          volcano
                                                      </Tag>
                                                      <Tag bordered={false} color="orange">
                                                          orange
                                                      </Tag>
                                                      <Tag bordered={false} color="gold">
                                                          gold
                                                      </Tag>
                                                      <Tag bordered={false} color="lime">
                                                          lime
                                                      </Tag>
                                                      <Tag bordered={false} color="green">
                                                          green
                                                      </Tag>
                                                      <Tag bordered={false} color="cyan">
                                                          cyan
                                                      </Tag>
                                                      <Tag bordered={false} color="blue">
                                                          blue
                                                      </Tag>
                                                      <Tag bordered={false} color="geekblue">
                                                          geekblue
                                                      </Tag>
                                                      <Tag bordered={false} color="purple">
                                                          purple
                                                      </Tag>
                                                  </Space>
                                              </div>
                                          </div>
                                          <div className="content">
                                              <p>{truncateText(item.content)}</p>
                                          </div>
                                      </div>
                                      <Collapse
                                          accordion
                                          ghost
                                          onChange={() => {
                                              dispatch(getCommentsInPostActionRequest({ _id: item._id }));
                                          }}
                                          items={[
                                              {
                                                  key: '1',
                                                  label: (
                                                      <div>
                                                          <p>{`${item.numberReplies} replies`}</p>
                                                          <hr />
                                                      </div>
                                                  ),
                                                  children: CommentList(valuePostState?.commentsData, item._id),
                                                  //   children: (
                                                  //       <Comments
                                                  //           arrComment={valuePostState?.commentsData}
                                                  //           idPost={item._id}
                                                  //       />
                                                  //   ),

                                                  showArrow: false,
                                              },
                                          ]}
                                      />
                                      <hr className="horizon-line-custom" />
                                  </div>
                              </div>
                          ))
                        : ''}
                    <div className="footer">
                        <MyPagination current={Pagination?.currentPage} total={Pagination?.totalPage} />
                    </div>
                </Content>
            </Layout>
        </>
    );
}

export default Home;
