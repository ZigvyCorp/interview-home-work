const { getPostsSummaries } = require("../services/posts.service");

exports.getAll = async (req, res) => {
	try {
		const posts = await getPostsSummaries();

		res.status(200).send(posts);
	} catch (err) {
		res.status(500).send({
			error: err.message,
		});
	}
};
