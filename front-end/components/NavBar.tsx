import Image from "next/image";
import React from "react";
import Link from "next/link";

function NavBar() {
	return (
		<nav className={`navbar bg-body-tertiary sticky-top`}>
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
				<div className="d-flex" style={{ gap: 15 }}>
					<div className="input-group">
						<div className="form-outline" data-mdb-input-init>
							<input
								type="search"
								id="form1"
								className="form-control"
							/>
						</div>
						<button
							type="button"
							className="btn btn-primary"
							data-mdb-ripple-init
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								width={18}
								height={18}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
								/>
							</svg>
						</button>
					</div>
					<div className="d-flex gap-2 align-items-center">
						<Image
							src="/cat.png"
							alt="User"
							width={32}
							height={32}
						/>
						<span>Account</span>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
