import PostsSearch from "@/components/PostSearch";
import { useSearchPost } from "@/hook/useSearchPost";
import { useRouter } from "next/router";

export default function Home() {
   const router = useRouter();
   const { data } = useSearchPost(router.query.keyword, false);
   return (
      <div>
         <h3 className="pr-3 pb-4 ml-4 text-right">
            Search results for {""}
            <span className="font-medium">
               `{router.query.keyword}` {data?.posts?.length}
            </span>
         </h3>
         <PostsSearch />
      </div>
   );
}
