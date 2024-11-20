"use client";
import { resetUser, selectUser } from "@/redux/reducers/user.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
	const sUser = useAppSelector(selectUser).me;
	const dispatch = useAppDispatch();

	const handleLogout = (): void => {
		dispatch(resetUser());
	};
	return (
		<header className="bg-cyan-500 py-3 px-2 xl:px-0 shadow-pop">
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
				{sUser ? (
					<div className="flex-center-y gap-3 lg:gap-5">
						<div className="flex-center-y border border-white rounded-3xl p-1.5 text-white gap-2 cursor-pointer">
							<Image
								src={
									sUser?.image
										? sUser?.image
										: "https://res.cloudinary.com/azurestore/image/upload/v1695735133/avatar_sialno.png"
								}
								alt="Zigvy Logo"
								width={50}
								height={50}
								className="rounded-3xl bg-white"
							/>
							<p className="text-xl font-bold text-center hidden md:block">{sUser?.name}</p>
						</div>
						<button
							onClick={handleLogout}
							className="text-lg lg:text-xl font-bold text-center px-4 py-2 lg:px-6 rounded-3xl bg-white cursor-pointer"
						>
							Log out
						</button>
					</div>
				) : (
					<div className="flex gap-3 lg:gap-5">
						<Link href="/sign-in">
							<p className="text-lg lg:text-xl font-bold text-center px-4 py-2 lg:px-6 rounded-3xl bg-white cursor-pointer">
								Login
							</p>
						</Link>
						<Link href="/sign-up">
							<p className="text-lg lg:text-xl font-bold text-center px-4 py-2 rounded-3xl border-2 border-black cursor-pointer text-white">
								Sign-up
							</p>
						</Link>
					</div>
				)}
			</div>
		</header>
	);
}
