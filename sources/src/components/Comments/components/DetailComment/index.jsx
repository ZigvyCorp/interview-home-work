import React from 'react';
import './styles.scss'
import moment from 'moment';

function DetailComment(props) {
    const toTimeString = (seconds) => {
        if (seconds)
            return moment(seconds).format('DD-MM-YYYY');
    }
    return (
        <div className="review-item">
            <div className="ri-pic">
                <img src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOEkwREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--b8e41423e13aa379726379f1552baa9049a242ca/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU2RDJKaFkydG5jbTkxYm1SSklnd2pSa1pHUmtaR0Jqc0dWRG9MWlhoMFpXNTBTU0lNTXpBd2VETXdNQVk3QmxRPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e7fdcef80c9ebbfc67976b7f3c603c80163df0b0/zigvy-logo.jpg" alt="" />
            </div>
            <div className="ri-text">
                <span>{toTimeString(props.item.created_at)}</span>
                <div className="rating">
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star-half_alt" />
                </div>
                <h5>{props.item.owner}</h5>
                <p>{props.item.content}</p>
            </div>
        </div>
    );
}
export default DetailComment;