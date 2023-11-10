import { getDayMonthYear } from "@/utils/date";
import Image from "next/image";

interface IParams {
	author: IUser;
}

export default function AuthorCard({ author }: IParams) {
	return (
		<section className="lg:w-[330px] w-full bg-cyan-500 rounded-3xl h-full p-4">
			<h1 className="text-xl lg:text-2xl font-semibold mb-4">Author</h1>
			<div className="flex justify-between mb-5">
				<article className="flex-center-y gap-3">
					<Image
						src={author.image}
						alt="avatar"
						width={60}
						height={60}
						className="rounded-full bg-white"
					/>
					<div className="space-y-1">
						<h4 className="text-xl">{author.name}</h4>
						<h4 className="italic text-slate-100">{getDayMonthYear(author.createdAt)}</h4>
					</div>
				</article>
			</div>
			<div className="space-y-1.5">
				<h3 className="font-semibold text-lg">
					Name: <span className="text-white font-normal">{author.name}</span>
				</h3>
				<h3 className="font-semibold text-lg">
					Nick name: <span className="text-white font-normal">{author.username}</span>
				</h3>
				<h3 className="font-semibold text-lg">
					Email: <span className="text-white font-normal">{author.email}</span>
				</h3>
				<h3 className="font-semibold text-lg">
					Phone: <span className="text-white font-normal">{author?.phone}</span>
				</h3>
				<h3 className="font-semibold text-lg">
					Website: <span className="text-white font-normal">{author?.website}</span>
				</h3>
				<h3 className="font-semibold text-lg">
					Company:
					<div className="ml-3 space-y-1.5 mt-1.5">
						<h3>
							Name: <span className="text-white font-normal">{author.company?.name}</span>
						</h3>
						<h3>
							Bs: <span className="text-white font-normal">{author.company?.bs}</span>
						</h3>
						<h3>
							CatchPhrase:{" "}
							<span className="text-white font-normal">{author.company?.catchPhrase}</span>
						</h3>
					</div>
				</h3>
			</div>
		</section>
	);
}
