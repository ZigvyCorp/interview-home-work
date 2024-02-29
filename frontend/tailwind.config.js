/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				success: "#52c41a",
				warning: "#faad14",
				error: "#ff4d4f",
				primary: "#1677ff",
			},
		},
	},
	plugins: [],
};
