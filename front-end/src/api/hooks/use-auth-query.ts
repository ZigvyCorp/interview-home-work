import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getLoggedUser, login, logout } from "@/api/methods/auth.ts";

const QUERY_KEY = ["auth"];

export const useGetLoggedUser = () => {
  return useQuery({
    queryKey: [...QUERY_KEY, "logged-user"],
    queryFn: async () => {
      return await getLoggedUser();
    },
    retry: 1
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logout,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    },
  });
};