import Image from "next/image";
import React from "react";

function Comment() {
	return (
		<div className="d-flex gap-3">
			<div className="avatar-container">
				<Image src="/cat.png" alt="User" width={32} height={32} />
			</div>
			<div className="text-container d-flex flex-column">
				<div>
					<span className="me-2 text-secondary">Varia</span>
					<span className="text-body-tertiary">
						<small>a day ago</small>
					</span>
				</div>
				<p className="mb-1">
					Some placeholder content for the collapse component. This
					panel is hidden by default but revealed when the user
					activates the relevant trigger.
				</p>
				<span className="text-secondary">
					<small>Reply to</small>
				</span>
			</div>
		</div>
	);
}

export default Comment;
