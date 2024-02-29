import { randomDate } from "../utils";
import { IPost, IUser } from "../type";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { Space, Tag } from "antd";

interface ICardPostProp {
	post: IPost;
	children?: ReactNode;
}

const CardPost = ({ post, children }: ICardPostProp) => {
	const [user, setUser] = useState<IUser>({} as IUser);
	const [fullText, setFullText] = useState<boolean>(false);
	useEffect(() => {
		const fetchUser = async () => {
			if (post.userId) {
				try {
					const response = await fetch(
						`${
							import.meta.env.VITE_API_URL
						}/users/${post.userId}`
					);
					if (!response.ok) {
						throw new Error(
							"Failed to fetch data"
						);
					}
					const user: IUser = await response.json();
					setUser(user);
				} catch (error) {
					console.log(error);
				}
			}
		};
		fetchUser();
	}, [post.userId]);

	const memoDate = useMemo(() => randomDate(), []);
	return (
		<div className="p-6 border-solid border-2 border-sky-[#cdcdcd] rounded-xl transition duration-100 hover:bg-gray-50">
			<h3 className="text-center text-2xl font-semibold capitalize">
				{post.title}
			</h3>
			{/* Post */}
			<div className="text-left my-3">
				<div className="flex justify-between">
					<p className="flex-1 font-semibold capitalize">
						Author: &nbsp;
						<span className=" font-normal">
							{user.name}
						</span>
						<br />
						Created at: &nbsp;
						<span className=" font-normal">
							{memoDate}
						</span>
					</p>
					<Space
						className="w-[330px] flex-wrap"
						size={[0, 8]}
					>
						<Tag color="magenta">magenta</Tag>
						<Tag color="red">red</Tag>
						<Tag color="volcano">volcano</Tag>
						<Tag color="orange">orange</Tag>
						<Tag color="gold">gold</Tag>
						<Tag color="lime">lime</Tag>
						<Tag color="green">green</Tag>
						<Tag color="cyan">cyan</Tag>
						<Tag color="blue">blue</Tag>
						<Tag color="geekblue">geekblue</Tag>
						<Tag color="purple">purple</Tag>
					</Space>
				</div>
				<p
					className={`mt-4 capitalize ${
						fullText
							? "line-clamp-none"
							: "line-clamp-3"
					}`}
				>
					{post.body}
					{post.body?.slice(0, post.body?.length - 10)}
					{post.body?.slice(
						10,
						post.body?.length - 30
					)}
					{post.body?.slice(
						20,
						post.body?.length - 20
					)}
				</p>
				<span
					className="text-[#606060] text-sm font-normal hover:underline hover:cursor-pointer"
					onClick={() => setFullText(!fullText)}
				>
					{fullText ? "Hide" : "See more..."}
				</span>
			</div>

			{/* children */}
			<>{children}</>
		</div>
	);
};

export default CardPost;
