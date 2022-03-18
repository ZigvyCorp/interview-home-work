import { useRouter } from "next/router";
import React from "react";
import { Typography, Row, Col, Tag, Spin } from "antd";
import Link from "next/link";
import dayjs from "dayjs";
import users from "@/data/users";

import { usePostById } from "@/hook/usePostById";
import Comments from "@/components/Comments";
import colorTag from "@/utils/colorTag";
const { Title, Paragraph } = Typography;

const PostDetail = () => {
   const router = useRouter();
   const {
      data: post,
      isLoading,
      isSuccess,
   } = usePostById(router.query.id, router.isReady);

   return (
      <Spin tip="Loading..." spinning={isLoading} size="large">
         {isLoading ? (
            <div className="h-screen"></div>
         ) : (
            isSuccess && (
               <article className="p-10 bg-white rounded-2xl border-[1px] border-blue-200 border-solid transition-all duration-300 ease-out hover-post">
                  <Title
                     level={2}
                     className="text-center hover:underline transition-all duration-100 cursor-pointer"
                  >
                     <Link href={`/post/${post.id}`} passHref>
                        {<a className="!text-black">{post.title}</a>}
                     </Link>
                  </Title>

                  <div className="space-y-8">
                     <div className="flex justify-between">
                        <div>
                           Author:{" "}
                           <span className="font-medium">
                              {
                                 users.find((user) => user.id === post.owner)
                                    .name
                              }
                           </span>
                        </div>
                        <div>
                           Created at:{" "}
                           <span className="font-medium">
                              {dayjs(post.created_at).format("MMM DD, YYYY")}
                           </span>
                        </div>
                     </div>
                     <div>
                        <Row gutter={[5, 10]}>
                           {post.tags.map((tag, i) => {
                              return (
                                 <Col key={i}>
                                    <Tag
                                       color={colorTag[i]}
                                       className="rounded-md cursor-pointer"
                                    >
                                       {tag}
                                    </Tag>
                                 </Col>
                              );
                           })}
                        </Row>
                     </div>
                     <div className="mt-3">
                        <Paragraph>{post.content} </Paragraph>
                     </div>

                     <Comments />
                  </div>
               </article>
            )
         )}
      </Spin>
   );
};

export default PostDetail;
