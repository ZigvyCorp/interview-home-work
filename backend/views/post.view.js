function postView(post) {
	return {
		...post,
		id: post._id,
		body: post.content,
		userId: post.owner._id,
		_id: undefined,
		content: undefined,
		owner: undefined,
	};
}

function postsView(posts) {
	return posts.map((post) => postView(post));
}

module.exports = { postView, postsView };
