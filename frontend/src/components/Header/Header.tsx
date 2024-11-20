export const Header = () => {
	return (
		<div className="border border-4 px-4 border-dark border-start border-end border-4">
			<div className="row d-flex justify-content-between">
				<div className="col-5 p-0 d-flex align-items-center justify-content-start">
					<img
						src="https://www.itjobs.com.vn/Upload/Employer/Zigvy-logo.jpg"
						alt="logoZigvy"
					/>
					<span className="text-uppercase fw-bold">Logo</span>
				</div>
				<div className="d-flex align-items-center justify-content-center text-center bg-secondary bg-gradient col-2 text-center border-dark border-start border-end border-4">
					<h2>Blogs</h2>
				</div>
				<div className="col-5 text-end p-0 d-flex justify-content-end align-items-center">
					<img
						src="https://res.cloudinary.com/thanhngo56/image/upload/v1681359754/avata/avatar_dtdr9z.jpg"
						alt=""
						width={100}
					/>
					<span className="fw-bold text-capitalize fs-2">
						Adam Levine
					</span>
				</div>
			</div>
		</div>
	);
};
