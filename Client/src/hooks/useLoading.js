import { useAppSelector } from '../store';
import { useMemo } from 'react';

function useLoading() {
    const { loadingPost } = useAppSelector(
        (state) => state.PostReducer)

    const isLoading = loadingPost


    return { isLoading };
}

export default useLoading;
