import './ReplyItem.scss'

const ReplyItem = ({ reply }) => {
	const { username, user_display_name, created_time, body } = reply;

	const createdDt = new Date(created_time);
	const createdDateStr = createdDt.toLocaleString();

	return (
		<div className="reply-item">
			<img
				className="reply-item__avatar"
				src={`https://robohash.org/${username}?set=set5`}
				alt={`${username} avatar`}
				width="50"
			/>
			<div className="reply-item__content">
				<p className="reply-item__content__metadata">
					{user_display_name}{" "}
					<span className="reply-item__content__created-time">
						{createdDateStr}
					</span>
				</p>
				<p className="reply-item__content__body">{body}</p>
        <p className='text-secondary'>Reply to</p>
			</div>
		</div>
	);
};

export default ReplyItem;
