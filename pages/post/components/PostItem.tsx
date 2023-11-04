import Link from "next/link";
import Comments from "./Comments";

const PostItem = ({ title, author, createAt, body, id }: any) => {
    return (
        <div className="border-bottom">
            <h3 className="text-center"><Link href={`post/${id}`}>{title}</Link></h3>
            <div className="d-flex justify-content-between">
                <div>
                    <p>Author: {author}</p>
                    <p>Create at: {createAt}</p>
                </div>
                <div>
                    <span className="border border-secondary border-success d-inline-block px-2 rounded">abc</span>
                </div>
            </div>
            <p>{body}</p>
            <Comments id={id} />
        </div>
    )
}

export default PostItem;