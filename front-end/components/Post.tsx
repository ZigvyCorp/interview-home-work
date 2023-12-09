import React from "react";

function Post() {
	return (
		<article className={`container`}>
			<h1 className="text-center">Title</h1>
			<div className="d-flex flex-column">
				<span>Author: username</span>
				<span>Created at: 1/1/1111</span>
			</div>
			<p className="my-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
				modi optio aperiam nisi quisquam, atque blanditiis dicta.
				Quibusdam expedita repudiandae minus culpa quis, veritatis,
				voluptatem dolore tempore explicabo, quidem sit!
			</p>
			<section>
				<span className="text-secondary">
					<em>2 replies</em>
				</span>
			</section>
		</article>
	);
}

export default Post;
