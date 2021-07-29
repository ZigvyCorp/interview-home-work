import "./home.css";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import SideBar from "../../sidebar/SideBar";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from "react";
import { connect } from 'react-redux'
import * as actions from '../../actions/Action'


import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // posts: [],
            // users: [],
            // comments: [],
            loading: false,
            toggle: false,
            post: {
                title: '',
                body: '',
            }
            // toggleId: "",
        }
    }
    render() {
        return (
            <div className="home">
                <div className="input-group rounded mt-3 px-5 pt-3 mb-5">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                        aria-describedby="search-addon" />
                    <span onClick={() => console.log("asd")} className="input-group-text border-0 btn btn-success" id="search-addon">
                        <i className="fas fa-search"></i>
                    </span>
                </div>


                <Button style={{ marginLeft: "94.5%" }} variant="primary" onClick={() => this.setState({ toggle: !this.state.toggle })}>
                    +
      </Button>

                <Modal show={this.state.toggle} onHide={() => {
                    this.setState({ toggle: !this.state.toggle })

                }} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Adding new post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className="mb-3">Title: <input type="text" style={{ marginLeft: 6 }}
                            // onChange={(e) => setPost({ title: e.target.value })}
                            /></div>
                            <div >Body: <input type="text"
                            // onChange={(e) => setPost({ body: e.target.value })} 
                            /></div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {
                            this.setState({ toggle: !this.state.toggle })

                        }} >
                            Close
          </Button>
                        <Button variant="primary" onClick={() => {
                            // this.props.addPost(post)
                            this.setState({ toggle: !this.state.toggle })
                        }} >
                            Save Changes
          </Button>
                    </Modal.Footer>
                </Modal>







                {/* ----------------------------------------- */}
                <Posts />
                {/* <SideBar /> */}
            </div>
        );
    }
}

// export default Home;



// function Home(props) {
//     const [toggleModal, setToggleModal] = useState(false);
//     const [post, setPost] = useState({
//         title: '',
//         author: '',
//         body: '',
//     })
//     return (
//         <>

//             {console.log(this.props)}
//             {/* <Header /> */}
//             <div className="home">
//                 <div className="input-group rounded mt-3 px-5 pt-3 mb-5">
//                     <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
//                         aria-describedby="search-addon" />
//                     <span onClick={() => console.log("asd")} className="input-group-text border-0 btn btn-success" id="search-addon">
//                         <i className="fas fa-search"></i>
//                     </span>
//                 </div>


//                 <Button style={{ marginLeft: "94.5%" }} variant="primary" onClick={() => this.setState({toggle:!this.state.toggle})}>
//                     +
//       </Button>

//                 <Modal show={toggleModal} onHide={() => {
//                     this.setState({toggle:!this.state.toggle})
//                     setPost({
//                         post: '',
//                         title: '',
//                         author: '',
//                     })
//                 }} animation={false}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>Adding new post</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <div>
//                             <div className="mb-3">Title: <input type="text" style={{ marginLeft: 6 }} onChange={(e) => setPost({ title: e.target.value })} /></div>
//                             <div >Body: <input type="text" onChange={(e) => setPost({ body: e.target.value })} /></div>
//                         </div>
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <Button variant="secondary" onClick={() => {
//                             this.setState({toggle:!this.state.toggle})
//                             setPost({
//                                 post: '',
//                                 title: '',
//                                 author: '',
//                             })
//                         }} >
//                             Close
//           </Button>
//                         <Button variant="primary" onClick={() => {
//                             this.props.addPost(post)
//                             this.setState({toggle:!this.state.toggle})
//                         }} >
//                             Save Changes
//           </Button>
//                     </Modal.Footer>
//                 </Modal>







//                 {/* ----------------------------------------- */}
//                 <Posts />
//                 {/* <SideBar /> */}
//             </div>
//         </>

//     );
// }

const mapDispatchToProps = (dispatch, props) => {
    return {
        addPost: (data) => {
            dispatch(actions.addPosts(data));
        }
    }
}
export default connect(null, mapDispatchToProps)(Home);