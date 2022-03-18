import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "antd/dist/antd.css";
import "@/styles/tailwind.css";
import "@/styles/globals.css";
import { Layout } from "antd";
import Header from "@/components/Header";

const queryClient = new QueryClient({
   shared: {
      suspense: false,
   },
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false,
         refetchOnMount: true,
         retry: 1,
      },
   },
});
function MyApp({ Component, pageProps }) {
   return (
      <QueryClientProvider client={queryClient}>
         <Layout>
            <Header />
            <Layout.Content className="min-h-screen">
               <div className="mx-auto mt-10 max-w-[1024px]">
                  <Component {...pageProps} />
               </div>
            </Layout.Content>
         </Layout>{" "}
         <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
   );
}

export default MyApp;
