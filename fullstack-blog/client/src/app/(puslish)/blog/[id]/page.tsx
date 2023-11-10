"use client";
import AuthorCard from "@/components/blog/detail/authorCard";
import ListTag from "@/components/blog/listTag";
import { useGetAllCommentByPostId } from "@/hooks/useGetComment";
import { useGetPostById } from "@/hooks/useGetPost";
import { createComment } from "@/redux/actions/comment.action";
import { selectComment, showMoreComment } from "@/redux/reducers/comment.slice";
import { selectPost } from "@/redux/reducers/post.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { IError } from "@/types/error";
import { getDayMonthYear } from "@/utils/date";
import { toastError } from "@/utils/toast";
import { Form, Input } from "antd";
import { useState } from "react";

interface IParams {
	params: {
		id: string;
	};
}

export default function BlogDetailPage({ params }: IParams) {
	const [page, setPage] = useState<number>(1);
	const dispatch = useAppDispatch();

	type FieldType = {
		body?: string;
	};
	const { TextArea } = Input;

	useGetPostById(params.id);
	useGetAllCommentByPostId(params.id, page);

	const sComments = useAppSelector(selectComment).listComment;
	const sDetailPost = useAppSelector(selectPost).detailPost;

	const handleShowMore = (): void => {
		setPage((prev) => prev + 1);
		dispatch(showMoreComment(page));
	};

	const onFinish = async (values: ICommentCreate) => {
		try {
			await dispatch(createComment({ ...values, postId: params.id })).unwrap();
		} catch (error) {
			toastError((error as IError).message);
		}
	};

	if (!sDetailPost) return <h1>loading...</h1>;

	return (
		<section className="my-5 lg:my-10 flex flex-col lg:flex-row px-2 xl:px-0 gap-4 text-white tracking-wide">
			<div className="flex-1">
				<div className="bg-cyan-500 px-4 py-6 rounded-3xl mb-4">
					<h1 className="font-semibold text-2xl lg:text-3xl leading-snug mb-2">
						{sDetailPost.title}
					</h1>
					<p className="mb-8 italic text-slate-100">{getDayMonthYear(sDetailPost.createdAt)}</p>
					<div className="max-w-full flex flex-wrap overflow-hidden mb-5 gap-3">
						{sDetailPost.tags.map((tag) => (
							<ListTag key={tag} tag={tag} />
						))}
					</div>
					<p className="text-xl lg:text-2xl leading-8">{sDetailPost.body}</p>
				</div>
				<div className="bg-cyan-500 p-4 rounded-3xl">
					<h1 className="text-xl lg:text-2xl font-semibold mb-3">
						Comments ({sComments.totalComments})
					</h1>
					<Form name="basic" labelCol={{ span: 3 }} onFinish={onFinish} autoComplete="off">
						<Form.Item<FieldType> name="body">
							<TextArea rows={2} />
						</Form.Item>

						<Form.Item wrapperCol={{ offset: 0 }}>
							<button
								className="bg-white px-4 py-2 rounded-3xl tracking-wide font-semibold"
								type="submit"
							>
								Submit
							</button>
						</Form.Item>
					</Form>

					{sComments.comments.map((comment) => (
						<div key={comment._id} className="bg-white text-black rounded-3xl p-4 mt-4">
							<h3 className="text-xl lg:text-2xl font-semibold mb-1">{comment.name}</h3>
							<p className="mb-4 underline underline-offset-8 text-slate-600 italic">
								{comment.email}
							</p>
							<p className="">{comment.body}</p>
						</div>
					))}

					{sComments.totalComments > 6 && (
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
