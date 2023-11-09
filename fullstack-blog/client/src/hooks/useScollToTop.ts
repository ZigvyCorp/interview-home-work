"use client";
export default function useScrollToTop() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return scrollToTop;
}
