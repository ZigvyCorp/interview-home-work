"use client";
import { useGetAllPost } from "@/hooks/useGetPost";
import { selectPost } from "@/redux/reducers/post.slice";
import { useAppSelector } from "@/redux/store";
import { getDayMonthYear } from "@/utils/date";
import { Pagination } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ListTag, NewBlog } from ".";

export default function ListBlog() {
	const [title, setTitle] = useState<string>("");
	const [page, setPage] = useState<number>(1);

	useGetAllPost(page, title);

	const sPost = useAppSelector(selectPost).listPost;

	const onChange = (page: number): void => {
		window.scrollTo(0, 0);
		setPage(page);
	};

	return (
		<section id="list-blog" className="px-2 xl:px-0 ">
			<div className="flex-center-y mb-4 gap-3">
				<NewBlog />
				<input
					type="text"
					className="w-full rounded-3xl p-4 pl-6  border border-black"
					placeholder="Search..."
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{sPost.posts.length ? (
					sPost.posts.map((post) => (
						<Link
							href={`/blog/${post._id}`}
							key={post._id}
							className="bg-cyan-500  p-4 rounded-3xl text-white shadow-pop border-b-2 border-slate-400 tracking-wide"
						>
							<div className="flex justify-between mb-5">
								<article className="flex-center-y gap-3">
									<Image
										src={post.authorId.image}
										alt="avatar"
										width={60}
										height={60}
										className="rounded-full bg-white"
									/>
									<div className="space-y-1">
										<h4 className="text-xl">{post.authorId.name}</h4>
										<h4 className="italic text-slate-100">
											{getDayMonthYear(post.createdAt)}
										</h4>
									</div>
								</article>
							</div>
							<div className="max-w-full flex flex-wrap overflow-hidden mb-3 gap-1">
								{post.tags.slice(0, 2).map((tag) => (
									<ListTag key={tag} tag={tag} />
								))}
							</div>
							<h1 className="text-xl mb-2 font-semibold max-w-full break-words line-clamp-2">
								{post.title}
							</h1>
							<p className="text-lg leading-7 max-w-full break-words line-clamp-4">
								{post.body}
							</p>
						</Link>
					))
				) : (
					<h1 className="text-3xl font-semibold text-center animate-pulse transition-all duration-500 opacity-50 pointer-events-none">
						Loading...
					</h1>
				)}
			</div>
			{sPost.totalPosts ? (
				<div className="mb-5 mt-10 flex-center shadow-pop py-3 rounded-2xl text-3xl">
					<Pagination pageSize={6} total={sPost.totalPosts} current={page} onChange={onChange} />
				</div>
			) : null}
		</section>
	);
}
