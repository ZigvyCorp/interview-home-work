import { GET_POST, IPostTypes, IPosts } from "../../types/posts.type";

export const posts = (state: IPosts[] = [], action: IPostTypes): IPosts[] => {
	switch (action.type) {
		case GET_POST:
			return action.payload;
		default:
			return state;
	}
};
