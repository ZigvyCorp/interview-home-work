import { TAGS } from "@/constants/tags.constant";
import { getBlog } from "@/services/blog.service";
import { useQuery } from "@tanstack/react-query";

function useBlog(id: string) {
  const { data, isPending, error } = useQuery({
    queryKey: [TAGS.BLOG],
    queryFn: () => getBlog({ id }),
  });

  console.log(data);
  return { data, isPending, error };
}

export default useBlog;
