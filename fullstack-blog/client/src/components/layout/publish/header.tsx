import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="bg-cyan-500  py-3 shadow-pop">
			<div className="container flex-center-y justify-between">
				<Link href="/">
					<Image
						src="/assets/images/zigvy-logo.jpg"
						alt="Zigvy Logo"
						width={60}
						height={60}
						className="rounded-3xl"
					/>
				</Link>
				<Link href="/" className="text-4xl font-bold text-center text-white">
					Blog
				</Link>
				<div className="flex-center-y border border-white rounded-3xl p-1.5 text-white gap-2 cursor-pointer">
					<Image
						src="https://res.cloudinary.com/azurestore/image/upload/v1695735133/avatar_sialno.png"
						alt="Zigvy Logo"
						width={50}
						height={50}
						className="rounded-3xl"
					/>
					<p className="text-xl font-bold text-center ">Nhật Linh</p>
				</div>
			</div>
		</header>
	);
}
