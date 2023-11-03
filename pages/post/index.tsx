import { useEffect, useState } from "react"
import getListPosts from "../../app/actions/getListPost"
import PostItem from "./components/PostItem";
import Search from "../../app/components/Search";
import { useDebounce } from "../../app/hooks/useDebounce";
import InfinityScroll from "../../app/components/InfinityScroll"

type Post = {
    items: { data: string[] }
}
export default function Post(): JSX.Element {
    const [list, setList] = useState<Post[]>([]);
    const [textSearch, setTextSearch] = useState<string>('');
    const debouncedValue = useDebounce<string>(textSearch, 500)
    const [totalRows, setTotalRows] = useState<number>(0);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        let mounted = true;
        getListPosts(textSearch, page)
            .then((items: any) => {
                console.log(items)
                if (mounted) {
                    setList([...list, ...items.data]);
                    setTotalRows(100);
                }
            });
        return () => {
            mounted = false;
        };
    }, [debouncedValue, page])

    return (
        <div className="container">
            <div className="p-3">
                <Search setSearch={setTextSearch} value={textSearch} />
            </div>
            <div className="p-3">
                <InfinityScroll
                    loader={<p>loading...</p>}
                    className="w-[800px] mx-auto my-10"
                    fetchMore={() => setPage((prev) => prev + 10)}
                    hasMore={list.length < totalRows}
                    endMessage={<p>You have seen it all</p>}
                >
                    {list.map((item: any) => {
                        return (
                            <PostItem key={item.id} id={item.id} title={item.title} author={'me'} createAt={'20-11-2023'} body={item.body} />
                        )
                    })}
                </InfinityScroll>
            </div>
        </div>
    );
}