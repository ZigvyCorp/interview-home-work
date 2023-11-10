import { useState } from "react";
import { Link } from "react-router-dom";

export default function PostItem({ data, detail = false }) {
    const [expand, setExpand] = useState(false);

    const handleClick = () => {
        setExpand(!expand);
    }

    const postInfos = [
        {
            id: 1,
            name: "Author: ",
            content: data.post.userId.name,
            button: null,
        },
        {
            id: 2,
            name: "Created at: ",
            content: data.post.createdAt.slice(0, 10),
            button: null,
        },
        {
            id: 3,
            name: null,
            content: detail ? data.post.body : data.post.body.slice(0, 100) + "...",
            button: !detail && <Link type="button" className="btn btn-link" to={`/post/${data.post._id}`}>read more</Link>
        },
    ];

    return (
        <div className="card mb-3">
            {/* POST INFO */}
            <div className="card-body">
                <h5 className="card-title text-center fs-2" >{data.post.title}</h5>
                {postInfos.map(postInfo => (
                    <p className="card-text" key={postInfo.id}>
                        <span className="fw-bold">{postInfo.name}</span>
                        <span>{postInfo.content} {postInfo.button}</span>
                    </p>
                ))}
            </div>
            
            {/* COMMENT */}
            <div className="cursor-pointer p-3">
                <p>
                    <span className="mx-1">{data.comments.length}</span>
                    <span>{data.comments.length > 1 ? "comments" : "comment"}</span>
                </p>
                {expand && data.comments.map(comment => (
                    <div key={comment._id} className="px-5">
                        <div className="mt-2 mb-1">
                            <span className="fw-semibold">{comment?.userId?.name} - </span>
                            <span className="fs-6 text-black-50">{comment.createdAt.slice(0, 10)}</span>
                        </div>
                        <p className="px-4">{comment.body}</p>
                    </div>
                ))}
                <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={handleClick}
                >
                    {expand && data.comments.length ? "Collapse" : "Expand"}
                </button>
            </div>
        </div>
    );
}