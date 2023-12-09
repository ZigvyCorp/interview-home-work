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
			<div>
				<span
					className="text-secondary"
					role="button"
					data-bs-toggle="collapse"
					data-bs-target="#commentContainer"
					aria-expanded="false"
					aria-controls="commentContainer"
				>
					<em>2 replies</em>
				</span>
				<div className="collapse" id="commentContainer">
					<div className="card card-body">
						Some placeholder content for the collapse component.
						This panel is hidden by default but revealed when the
						user activates the relevant trigger.
					</div>
				</div>
			</div>
		</article>
	);
}

export default Post;
