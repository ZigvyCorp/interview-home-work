import BlogCard from "src/components/ui/BlogCard";
import Header from "src/components/ui/Header";
import { IPost } from "src/interfaces/post.interface";
import { Input, Skeleton } from "antd";
import { useGetAllPostByPageQuery } from "src/redux/services/post.api";
import { useEffect, useState } from "react";
import { useAppSelector } from "src/redux/hook";

const { Search } = Input;

const Home = () => {
    const user = useAppSelector((state) => state.user);
    const [page, setPage] = useState(1);
    const param = {
        page: page.toString(),
        accessToken: user.accessToken,
    };

    const { data, isLoading } = useGetAllPostByPageQuery(param);
    console.log(data);
    const [posts, setPost] = useState<IPost[]>(data?.message || []);
    console.log("posts", posts);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
                document.documentElement.offsetHeight ||
            isLoading
        ) {
            return;
        }
        setPost((prevPost: IPost[]) => prevPost.concat(data?.message));
        setPage((prevPage) => prevPage + 1);
    };

    useEffect(() => {
        handleScroll();
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isLoading]);

    const filterBySearch = (event: any) => {
        const query = event.target.value;
        if (query.length === 0) {
            setPost(data?.message);
        } else {
            var updatedPosts = [...posts];
            updatedPosts = updatedPosts.filter((item: IPost) => {
                return (
                    item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
                );
            });
            setPost(updatedPosts);
        }
    };

    return (
        <div className="w-full min-h-screen px-[200px]  ">
            <div className="shadow-2xl w-full min-h-screen relative pb-[50px]">
                <Header />

                <ul className="w-full mt-[80px]">
                    {isLoading && (
                        <Skeleton className=" bg-white mt-[100px]" active />
                    )}
                    {!isLoading &&
                        posts &&
                        posts.map((post: IPost, index: number) => {
                            return <BlogCard key={index} post={post} />;
                        })}
                </ul>
                <Search
                    placeholder="input search text"
                    allowClear
                    className="w-[300px] fixed top-[130px] right-[270px] opacity-70 focus:opacity-15 border-[1px] border-black rounded-[6px]"
                    size="large"
                    onChange={filterBySearch}
                />
            </div>
        </div>
    );
};

export default Home;
