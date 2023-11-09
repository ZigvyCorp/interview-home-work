import { bgColor } from "@/utils/color";
import { title } from "process";

const tagExamples: string[] = [
	"reactjs",
	"nextjs",
	"javascript",
	"typescript",
	"nodejs",
	"expressjs",
	"mongodb",
	"nestjs",
	"python",
	"django",
];

export default function ListBlog() {
	const index = title.length ? (title.length - 1) % bgColor.length : 0;
	const color = bgColor[index];
	return (
		<section id="list-blog">
			<h1 className="text-center text-4xl font-semibold mb-8">Blog title 1</h1>
			<div className="flex justify-between">
				<article className="">
					<h4 className="text-xl font-semibold">Author: Linh</h4>
					<h4 className="text-xl font-semibold">Created at: Sep 20, 2018</h4>
				</article>
				<div className="max-w-sm flex-wrap flex gap-2">
					{tagExamples.map((tag, index) => (
						<span
							style={{
								backgroundColor: color,
							}}
							key={index}
							className=" text-white px-2 py-1.5 rounded-3xl"
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}

