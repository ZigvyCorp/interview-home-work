import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Drawer, Flex, List } from "antd";
import CreateBlog from "../components/blog/CreateBlog";
import { useEffect, useState } from "react";
import SearchBlog from "../components/blog/SearchBlog";
import Blogs from "../components/blog/Blog";
import { useSelector } from "react-redux";
import { IBlog } from "../utils/type.ts";
import { selectState } from "../redux/store.ts";
import { getApi } from "../utils/fetch.ts";
import { apiRoutes } from "../utils/apiRoutes.ts";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);
const Home = () => {
  const { authReducer } = useSelector(selectState);

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [numPage, setNumPage] = useState<number>(0);
  const [listBlog, setListBlog] = useState<IBlog[]>([]);
  useEffect(() => {
    const getBlog = async () => {
      return await getApi(apiRoutes.blog + `?page=${page}`).then((res) => {
        setListBlog(
          res.blogs.map((item: IBlog) => ({
            _id: item._id,
            title: item.title,
            content: item.content,
            createAt: item.createdAt,
            author: item.user.fullName,
          })),
        );
        setNumPage(res.total);
      });
    };
    getBlog();
  }, [page]);

  return (
    <>
      <Flex gap={12}>
        {authReducer.user && (
          <Button
            icon={<PlusCircleOutlined />}
            type="primary"
            onClick={() => setOpenDrawer(true)}
          >
            Add Blog
          </Button>
        )}
        <SearchBlog />
      </Flex>
      <List
        dataSource={listBlog}
        renderItem={(item) => (
          <Blogs
            title={item.title}
            content={item.content.slice(0, 99)}
            createdAt={dayjs(item.createdAt).format("LL")}
            author={item.author}
            _id={item._id}
          />
        )}
        pagination={{
          total: numPage * 10,
          align: "center",
          defaultCurrent: 1,

          onChange(p) {
            setPage(p);
          },
        }}
      />

      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        title="Create Blog"
        placement="left"
      >
        <CreateBlog
          onSuccess={function (data): void {
            setOpenDrawer(false);
            setListBlog((p) => [data, ...p]);
          }}
        />
      </Drawer>
    </>
  );
};

export default Home;
