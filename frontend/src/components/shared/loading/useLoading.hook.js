import { useSelector } from "react-redux";

export const useLoading = () => {
    const { isLoading } = useSelector(
        (state) => state.loading
    );

    return { isLoading };
};