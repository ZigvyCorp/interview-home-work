import moment from "moment/moment";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const CommentComponent = ({ item }) => {
    const [replyVisible, setReplyVisible] = useState(false);
    const [onfocusComment, setOnfocusComment] = useState(false);
    const [comment, setComment] = useState("");
    const refTextarea = useRef();
    const [lengthOfComment, setLengthOfComment] = useState(0);
    //set username
    const state = useSelector((state) => state.user);

    const owner = state.user?.find((user) => user["_id"] === item?.owner);

    // convert time
    const date = moment([item["created_at"]]).fromNow();

    useEffect(() => {
        if (refTextarea.current) {
            onfocusComment && refTextarea.current.focus();
            const caretPosition = refTextarea.current;
            caretPosition.selectionStart = caretPosition.selectionEnd = caretPosition.value.length;
            setLengthOfComment(caretPosition.selectionStart);
        }
    }, [onfocusComment]);

    useEffect(() => {
        if (!replyVisible) {
            setComment("");
            setLengthOfComment(0);
        }
    }, [replyVisible]);

    const handleChange = (e) => {
        if (e.target.value.length > 255) return;
        setComment(e.target.value);
        setLengthOfComment(e.target.value.length);
    };
    return (
        <div
            className="row"
            style={{ height: "300px" }}>
            <div className="col-1">
                <img
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                    src="./public/avatar.png"
                    alt="avatar"
                />
            </div>
            <div className="col-11">
                <p className="mb-2">
                    {owner?.username} <span className="ms-3">{date}</span>
                </p>
                <p>{item.content}</p>
                <div className="mb-5">
                    <span
                        onClick={() => {
                            setReplyVisible(!replyVisible);
                            setOnfocusComment(!onfocusComment);
                            setComment((pre) => [...pre, `@${owner.username} `]);
                        }}
                        style={{ cursor: "pointer", userSelect: "none" }}>
                        Reply to
                    </span>
                    {replyVisible && (
                        <div className="position-relative">
                            <textarea
                                value={comment}
                                onChange={handleChange}
                                ref={refTextarea}
                                className="w-100 mt-3"
                                style={{ resize: "none" }}
                            />
                            <span className="lengthAndLimitText">{lengthOfComment}/255</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommentComponent;
