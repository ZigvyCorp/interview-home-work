import { Badge } from "reactstrap";

/**
 * Placeholder for the tags in the mockup, as we're not implement it
 */
const MockTags = () => {
	return (
		<div>
			<Badge color="primary" pill>
				Tag1
			</Badge>
			<Badge pill>Tag2</Badge>
			<Badge color="success" pill>
				Tag3
			</Badge>
			<Badge color="danger" pill>
				Tag4
			</Badge>
			<Badge color="warning" pill>
				Tag5
			</Badge>
			<Badge color="info" pill>
				Tag6
			</Badge>
			<Badge color="dark" pill>
				Tag7
			</Badge>
		</div>
	);
};

export default MockTags;
