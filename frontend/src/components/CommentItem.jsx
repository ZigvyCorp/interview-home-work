/* eslint-disable react/prop-types */
export default function CommentItem({ data }) {
    return (
        <div className="comment d-flex gap-3 mt-2 mb-3">
            <div className="comment-avt">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpUF-wkEUfqNx7IIudXfmbaFg-ILMZwYYy2Tg-t4LrW2WFCwWPQoxxmI2-1UDL_Mhpe7U&usqp=CAU"
                    alt=""
                    style={{
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                    }}
                />
            </div>
            <div className="comment-content d-flex flex-column justify-content-between">
                <div className="comment-name d-flex gap-3">
                    <p>{data?.email}</p>
                    <p className="text-secondary">2 day ago</p>
                </div>
                <div className="comment-body">{data?.content}</div>
                <div className="comment-replyto text-secondary">Reply To</div>
            </div>
        </div>
    )
}
