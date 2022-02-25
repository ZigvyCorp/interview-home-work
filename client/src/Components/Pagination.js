import React from 'react';

const Pagination = props => {
	const pageNumbers = [];

	for (
		let i = 0;
		i < Math.ceil(props.totalPosts / props.postsPerPage);
		i++
	) {
		pageNumbers.push(i + 1);
	}
	return (
		<nav>
			<ul className="pagination justify-content-center">
				{pageNumbers.map(p => (
					<li key={p} className="page-item">
						<a
							onClick={() => props.paginate(p)}
							href="!#"
							className="page-link"
						>
							{p}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
