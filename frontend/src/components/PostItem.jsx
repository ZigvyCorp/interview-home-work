import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
export default function PostItem({ data }) {
    return (
        <div className="mb-2 p-2 border boder-dark post-item">
            <Link
                to={`/${data.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
            >
                <h6 className="title">{data.title}</h6>
            </Link>
            <p>{data.body}</p>
        </div>
    );
}
