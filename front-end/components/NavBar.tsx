import Image from "next/image";
import React from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";

function NavBar() {
	return (
		<nav className={styles.navBar}>
			<Link href="/">
				<Image
					src="/vercel.svg"
					alt="Vercel Logo"
					width={72}
					height={16}
				/>
			</Link>
			<Link href="/">Blogs</Link>
			<Link href="/posts/1">
				<div>Account</div>
			</Link>
		</nav>
	);
}

export default NavBar;
