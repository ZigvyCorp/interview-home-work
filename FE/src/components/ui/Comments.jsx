export const Comments = ({ content, name, avatar, date }) => (

    <div className="comments-container py-[3em] flex">
        <div className="avatar w-[50px] flex h-[50px] rounded-[10px] bg-rose-300 justify-center items-center">
                {avatar.toUpperCase()}
        </div>
        <div className="comments__box-right">
            <div className="flex">
                <p className="comment-name">{name} <span className="text-sm font-thin text-gray-600">replied:</span></p>
                <p className="comment-date">{date}</p>
            </div>
            <div className="comment__content text-2xl">{content}</div>
        </div>

    </div>

)

