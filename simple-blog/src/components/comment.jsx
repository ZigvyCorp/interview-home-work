import React from "react";
import "../css/comment.css"
import avatar from "../img/avatar.png"
import axios from "axios";
import { Link } from "react-router-dom";



function Comment() {
    return (
        <div className="comment">
            <ul>
                <li><img src={avatar} className="avatar"></img></li>
                <li>
                    <a href="#" className="name">Han Solo</a>
                    <a href="#" className="commenttime">a day ago</a>
                    <p className="commentcontent">Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery. </p>
                    <a href="#" className="reply">Reply to</a>
                </li>
            </ul>


        </div>
    );
};

export default Comment;