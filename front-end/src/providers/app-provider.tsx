import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "@/router.tsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "@/providers/auth-provider.tsx";

const queryClient = new QueryClient();

export default function AppProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  );
}