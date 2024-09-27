import AuthLogout from "@components/Auth/AuthLogout";
import dynamic from "next/dynamic";

const BlogPage = dynamic(() => import("@modules/BlogsPage/BlogPage"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <AuthLogout />
      <BlogPage />
    </>
  );
}
