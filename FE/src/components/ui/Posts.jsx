import { Comments } from "./Comments"

export const Posts = ({ title, author, createdDate, content }) => {
    return (
        <div className="post-container container mx-auto pt-[2em] pb-[5em]">
            <h1 className="text-3xl text-center">{title}</h1>
            <div>
                <div className="post__info">
                    <p className="post__info-author">{author}</p>
                    <p className="post__info-created-date">{createdDate}</p>
                </div>
                <div className="post__content">
                    {content}
                </div>
                <div className="post__comments"></div>
            </div>
            <Comments />
        </div>
    )
}




