import useSWR from 'swr';

import fetcher from '../lib/fetcher';

const useFetcher = (api) => {
    const { data, error, isLoading, mutate } = useSWR(api, fetcher);
    return { data, error, isLoading, mutate };
};

export default useFetcher;
