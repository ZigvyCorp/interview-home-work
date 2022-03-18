import { Layout, AutoComplete, Button } from "antd";
import Image from "next/image";
import { usePostsName } from "@/hook/usePostsName";
import { useState } from "react";

import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
const { Header } = Layout;
const MyHeader = () => {
   const { data } = usePostsName();
   const router = useRouter();
   const [options, setOptions] = useState([]);
   const [keyword, setKeyword] = useState("");
   const onSearch = (searchText) => {
      setOptions(
         !searchText
            ? []
            : data.filter((post) => post.title.includes(searchText))
      );
   };
   const onSelect = (data) => {
      const post = options.find((post) => post.title === data);
      router.push(`/post/${post.id}`);
   };
   return (
      <Header className="flex justify-between items-center px-64 bg-[#1A94FF]">
         <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={72}
            height={16}
            className="cursor-pointer"
            onClick={() => router.push("/")}
         />

         <div className="flex w-[500px] btn-search">
            <AutoComplete
               dropdownMatchSelectWidth={252}
               style={{ width: "100%" }}
               onSelect={onSelect}
               onSearch={onSearch}
               className="btn-search"
               allowClear
               onChange={(value) => setKeyword(value)}
            >
               {options.map((post) => (
                  <AutoComplete.Option key={post.id} value={post.title}>
                     {post.title}
                  </AutoComplete.Option>
               ))}
            </AutoComplete>
            <Button
               type="primary"
               onClick={() => {
                  if (!keyword) return;
                  router.push(`/search/${keyword}`);
               }}
            >
               Search
            </Button>
         </div>
         <div className="flex items-center space-x-1 text-white cursor-pointer">
            <div className=" mb-1">
               <UserOutlined style={{ fontSize: 30 }} />
            </div>
            <span className="text-base font-semibold">Minh Thành</span>
         </div>
      </Header>
   );
};

export default MyHeader;
