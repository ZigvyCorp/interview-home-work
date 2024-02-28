import { useState } from "react";

type ApiCall<T> = () => Promise<T>;

type UseApiResult<T> = {
  data: T | null;
  loading: boolean;
  error: boolean;
  fetchData: () => void;
};

function useFetchData<T>(apiCall: ApiCall<T>): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await apiCall();
      setData(result);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
}

export default useFetchData;
