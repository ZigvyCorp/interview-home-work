import React from 'react';

import Header from './Header';
import Footer from './Footer';

class DetailPerson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    UNSAFE_componentWillMount() {
        var user = JSON.parse(localStorage.getItem('user'));
        this.setState({
            user: user
        })
    }

    render() {
        return (
            <div className="container">
                <Header />
                <div className="span3 well mt-4">
                    <center>
                        <a href="#aboutModal" data-toggle="modal" data-target="#myModal"><img src="./assets/myface.jpg" name="aboutme" width="140" height="140" className="img-circle" /></a>
                        <h3>{this.state.user.name}</h3>
                        <em>click my face for more</em>
                    </center>
                </div>
                {/* <!-- Modal --> */}
                <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header title-modal center">
                                <button type="button" className=" btn btn-primary close" data-dismiss="modal" aria-hidden="true">X</button>
                                <h4 className="modal-title" id="myModalLabel">More About {this.state.user.name}</h4>
                            </div>
                            <div className="modal-body">
                                <center>
                                    <a><img src="./assets/myface.jpg" name="aboutme" width="140" height="140" border="0" className="img-circle" /></a>
                                    <h3 className="media-heading">{this.state.user.name}</h3>
                                    <h6><strong>Email: {this.state.user.email} </strong></h6>
                                    <h6><strong>Password: {this.state.user.password}</strong></h6>
                                    <span><strong>Skills: </strong></span>
                                    <span className="btn btn-warning mr-2">HTML5/CSS</span>
                                    <span className="btn btn-info mr-2">JavaScript</span>
                                    <span className="btn btn-info mr-2">React JS - React Native</span>
                                    <span className="btn btn-success mr-2 mt-2">Ai - PSD</span>
                                </center>
                                <hr />
                                <center>
                                    <p className="text-left"><strong>Detail: </strong><br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem dui, tempor sit amet commodo a, vulputate vel tellus.</p>
                                    <br />
                                </center>
                            </div>
                            <div className="modal-footer">
                                <center>
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Save</button>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default DetailPerson;