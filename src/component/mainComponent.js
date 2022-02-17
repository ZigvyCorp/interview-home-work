/* eslint-disable react-hooks/rules-of-hooks */
import React , {useEffect,useState}from "react";
import Post from "./postComponent"
import {Row,Col,Container} from "react-bootstrap";
import ReactPaginate from "react-paginate";

function mainComponent({userList,postList,commentList}) {

  const styles = {
    header: {
       border: '2px solid'
    },
    title_header: {
      marginTop: '20px',
      textAlign: 'center'
    },
    display_flex: {
      display: 'flex',
    }
}
  const [users, setUsers] = useState(userList);
  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 1 ; 
  const pageVisited = pageNumber * userPerPage;

  const displayUsers = users.slice(pageVisited, pageVisited + userPerPage)
                            .map((user,index)=>{
                              let newPostList = [];
                              if (Object.keys(postList).length > 0) {
                                for (let i = 0; i < postList.length; i++) {
                                  let post = postList[i];
                                  if (post.userId === index+1) {
                                    newPostList.push(post);
                                  }
                                }
                              }
                              return (
                                <div key={index}>
                                  <Post user={user}post={newPostList} commentList={commentList}/>
                                </div>
                              )
                            });
  const pageCount = Math.ceil(users.length / userPerPage);
  const changePage = ({selected}) => {
    setPageNumber(selected);
  }
  return (
    <>
    <Container fluid>
      <Row style={styles.header}>
        <Col xs={6} md={4}>
          <h1 className="text-center">Logo</h1>
        </Col>
        <Col xs={6} md={4}>
          <h1 className="text-center">Blog</h1>
        </Col>
        <Col xs={6} md={4}>
          <h1 className="text-center">User</h1>
        </Col>
      </Row>
      </Container>
      <div className="App">
      <header className="App-header">
        <Container fluid>
          <Row>
            <Col>
                { displayUsers  }
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName="paginationBttns"
              previousLinkClassName="previousBttns"
              nextLinkClassName="nextBttns"
              disableLinkClassName="paginationDisabled"
              activeLinkClassName="paginationActive"
            ></ReactPaginate>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  </>
  );
}

export default mainComponent;
