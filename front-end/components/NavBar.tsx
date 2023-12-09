import Image from "next/image";
import React from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";

function NavBar() {
	return (
		<nav className={`navbar bg-body-tertiary`}>
			<div className="container-fluid">
				<Link href="/" className="navbar-brand">
					<Image
						src="/vercel.svg"
						alt="Vercel Logo"
						width={72}
						height={16}
					/>
				</Link>
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link href="/" className="nav-link">
							Blogs
						</Link>
					</li>
				</ul>
				<div className="d-flex gap-2 align-items-center">
					<Image src="/cat.png" alt="User" width={32} height={32} />
					<span>Account</span>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
