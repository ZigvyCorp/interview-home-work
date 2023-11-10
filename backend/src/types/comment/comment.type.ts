export interface IComment {
	username: string; // id user comment
	postId: string; // id of post
	postUserId: string; // id post of user create
	content: string;
	// replyCm: { type: mongoose.Types.ObjectId, ref: "Comments" },
	// replyUser: { type: mongoose.Types.ObjectId, ref: "Users" },
}
