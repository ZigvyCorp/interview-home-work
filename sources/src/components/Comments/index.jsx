import React from 'react';
import { Collapse } from 'antd';
import './styles.scss'

const { Panel } = Collapse;

function Comments(props) {
    return (
        <div className="comments">
            <Collapse bordered={false} className="collapse" expandIconPosition='right' ghost>
                <Panel header={<h5 className="title">Comments</h5>} key="1">
                    <div className="rd-reviews">
                        <div className="review-item">
                            <div className="ri-pic">
                                <img src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOEkwREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--b8e41423e13aa379726379f1552baa9049a242ca/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU2RDJKaFkydG5jbTkxYm1SSklnd2pSa1pHUmtaR0Jqc0dWRG9MWlhoMFpXNTBTU0lNTXpBd2VETXdNQVk3QmxRPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e7fdcef80c9ebbfc67976b7f3c603c80163df0b0/zigvy-logo.jpg" alt="" />
                            </div>
                            <div className="ri-text">
                                <span>01 May 2021</span>
                                <div className="rating">
                                    <i className="icon_star" />
                                    <i className="icon_star" />
                                    <i className="icon_star" />
                                    <i className="icon_star" />
                                    <i className="icon_star-half_alt" />
                                </div>
                                <h5>Vũ Khánh</h5>
                                <p>Phòng đẹp, giá cả hợp lý, chủ nhà vui tính.</p>
                            </div>
                        </div>
                        <div className="review-item">
                            <div className="ri-pic">
                                <img src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOEkwREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--b8e41423e13aa379726379f1552baa9049a242ca/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU2RDJKaFkydG5jbTkxYm1SSklnd2pSa1pHUmtaR0Jqc0dWRG9MWlhoMFpXNTBTU0lNTXpBd2VETXdNQVk3QmxRPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e7fdcef80c9ebbfc67976b7f3c603c80163df0b0/zigvy-logo.jpg" alt="" />
                            </div>
                            <div className="ri-text">
                                <span>23 May 2021</span>
                                <div className="rating">
                                    <i className="icon_star" />
                                    <i className="icon_star" />
                                    <i className="icon_star" />
                                    <i className="icon_star" />
                                    <i className="icon_star-half_alt" />
                                </div>
                                <h5>Hoài Phong</h5>
                                <p>Phòng đẹp, book phòng nhanh, app vô cùng tiện lợi.</p>
                            </div>
                        </div>
                    </div>
                </Panel>
            </Collapse>
        </div>
    );
}

export default Comments;