import { AppContainer } from "../../components/AppContainer";
import { PostList } from "./components/PostList";

export const HomePage = () => {
	return (
		<AppContainer className="min-h-full flex flex-col">
			<PostList />
		</AppContainer>
	);
};
