import { LoadingOutlined } from "@ant-design/icons";
import { Avatar, Divider, FloatButton, Space, Spin, Typography } from "antd";
import Input from "antd/es/input/Input";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchBlog } from "../redux/blogSlide";
import { BlogInterface } from "../typeProps";
import { formatDate } from "../utils/formatDate";

const Blog = () => {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector((state) => state.blogs.blog.blogArr);
  const [blog, setBlog] = useState<BlogInterface[]>([]);
  const [blogOrigin, setBlogOrigin] = useState<BlogInterface[]>([]);
  const [val, setVal] = useState<string>("");

  const handleToggle = (id: number) => {
    $(`#comment-content-${id}`).slideToggle("slow");
  };

  useEffect(() => {
    let filterResult: BlogInterface[] = blogOrigin;

    filterResult = blogOrigin.filter((b) => b.title.includes(val));
    setBlog(filterResult);
  }, [val]);

  useEffect(() => {
    setBlog(blogs);
    setBlogOrigin(blogs);
  }, [blogs]);

  useEffect(() => {
    dispatch(fetchBlog());
  }, []);
  return (
    <div className="blog-content">
      <h1 className="text-[30px] font-bold text-center border rounded-sm py-[5px]">
        Blog Page
      </h1>
      <Input
        placeholder="Search blog..."
        className="mt-5 w-[250px]"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <Divider />

      {/* Call API */}
      <div className="blog container m-auto">
        {blog.length > 0 ? (
          blog.map((b, i) => (
            <div key={i}>
              <h2 className="text-center font-semibold text-[35px] my-[40px] capitalize">
                {b.title}
              </h2>
              <div className="author font-semibold text-[20px]">
                Author: {b.name} {b.username}
              </div>
              <div className="font-semibold text-[20px]">
                Created at: {formatDate(Date.now())}
              </div>
              <div className="my-[30px] font-semibold text-[22px] normal-case">
                {b.body}
              </div>
              <div className="comment">
                <button
                  className="btn btn-replies font-normal text-[16px]"
                  onClick={() => handleToggle(i)}
                >
                  {b.comments.length} replies
                </button>
                <Divider />

                <div id={`comment-content-${i}`} className="hidden">
                  <Space direction="vertical" style={{ rowGap: 30 }}>
                    {b.comments.map((cmt, id) => (
                      <Space key={id} style={{ columnGap: 20 }}>
                        <Avatar
                          src={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU"
                          }
                          size="large"
                        />
                        <Space direction="vertical" style={{ rowGap: 5 }}>
                          <Typography.Text className="opacity-90 font-normal text-[18px] capitalize">
                            {cmt.email}
                          </Typography.Text>
                          <Typography.Text className="font-[500] text-[18px] capitalize">
                            {cmt.body}
                          </Typography.Text>
                          <Typography.Text className="opacity-90 text-[16px] capitalize">
                            Reply to
                          </Typography.Text>
                        </Space>
                      </Space>
                    ))}
                  </Space>
                  <Divider />
                </div>
              </div>
            </div>
          ))
        ) : (
          <>
            <span>No data...</span>
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
            />
          </>
        )}
      </div>
      <FloatButton.BackTop style={{ marginRight: 55 }} />
    </div>
  );
};

export default Blog;
