/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["res.cloudinary.com"],
	},
	env: {
		NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
	},
};

module.exports = nextConfig;
