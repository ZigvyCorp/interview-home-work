import { useQuery } from "@tanstack/react-query";

import { User } from "../types";
import axiosInstance from "../utils/axiosInstance";
import { queryKeys } from "./queryKeys";

const fetchData = async ({ id }: { id?: number }) => {
  const response = await axiosInstance.get(`/users/${id}`);
  return response.data;
};

const useProfile = ({ id }: { id?: number }) => {
  return useQuery<User>({
    queryKey: [queryKeys.useProfile, id],
    queryFn: () => fetchData({ id }),
    enabled: !!id,
  });
};

export default useProfile;
