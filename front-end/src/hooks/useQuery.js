import { useEffect, useState } from "react";

const useQuery = (promise, dependencies = []) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const fetchData = async (query) => {
    setLoading(true);
    try {
      const res = await promise(query);
      if (res?.data) {
        setData(res.data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  return {
    loading,
    error,
    data,
    refetchData: fetchData,
  };
};

export default useQuery;
