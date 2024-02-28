import { useState, useEffect } from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="transition-all">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed z-10 p-2 bottom-4 right-4 rounded-full "
                >
                    <IoArrowUpCircleOutline className="bg-transparen text-blue-400 text-6xl" />
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;
