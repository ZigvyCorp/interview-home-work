"use client";
import AuthorCard from "@/components/blog/detail/authorCard";
import ListTag from "@/components/blog/listTag";
import { useGetAllCommentByPostId } from "@/hooks/useGetComment";
import { useGetPostById } from "@/hooks/useGetPost";
import { selectComment } from "@/redux/reducers/comment.slice";
import { selectPost } from "@/redux/reducers/post.slice";
import { useAppSelector } from "@/redux/store";
import { useState } from "react";

interface IParams {
	params: {
		id: string;
	};
}

export default function BlogDetailPage({ params }: IParams) {
	const [page, setPage] = useState<number>(1);

	useGetPostById(params.id);
	useGetAllCommentByPostId(params.id, page);

	const sComments = useAppSelector(selectComment).listComment;
	const sDetailPost = useAppSelector(selectPost).detailPost;

	const handleShowMore = (): void => {
		setPage((prev) => prev + 1);
	};

	if (!sDetailPost) return <h1>loading...</h1>;

	return (
		<section className="mt-10 flex gap-4 text-white tracking-wide">
			<div className="flex-1">
				<div className="bg-cyan-500  px-4 py-6 rounded-3xl mb-4">
					<h1 className="font-semibold text-3xl leading-snug mb-2">{sDetailPost.title}</h1>
					<p className="mb-8 italic">11 09 2023</p>
					<div className="max-w-full flex flex-wrap overflow-hidden mb-5 gap-3">
						{sDetailPost.tags.map((tag) => (
							<ListTag key={tag} tag={tag} />
						))}
					</div>
					<p className="text-2xl leading-8">{sDetailPost.body}</p>
				</div>
				<div className="bg-cyan-500  p-4 rounded-3xl">
					<h1 className="text-2xl font-semibold">Comments ({sComments.totalComments})</h1>
					{sComments.comments.map((comment) => (
						<div key={comment._id} className="bg-white text-black rounded-3xl p-4 mt-4">
							<h3 className="text-2xl font-semibold mb-1">{comment.name}</h3>
							<p className="mb-4 underline underline-offset-8 text-slate-600 italic">
								{comment.email}
							</p>
							<p className="">{comment.body}</p>
						</div>
					))}

					{sComments.totalComments > 5 && (
						<div className="w-full flex-center">
							<button
								onClick={handleShowMore}
								className="bg-black px-10 py-3 text-lg mt-5 rounded-3xl"
							>
								Show more
							</button>
						</div>
					)}
				</div>
			</div>

			<AuthorCard author={sDetailPost.authorId} />
		</section>
	);
}
