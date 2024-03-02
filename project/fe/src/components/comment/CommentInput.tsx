import { SendOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Flex,  Input, Space } from "antd";
import { useState } from "react";
import { postApi } from "../../utils/fetch";
import { apiRoutes } from "../../utils/apiRoutes";

export const CommentInput = () => {
  const [commentValue,setCommentValue]=useState('')
  async function postComment(value:string) {
    try {
      return await postApi(apiRoutes.comment,{content:value})
    } catch (error) {
      alert(error)
    }
    
  }
  return (
    <Flex gap={10}>
      <Avatar icon={<UserOutlined/>} />
      <Space.Compact style={{ width: "100%" }}>
        <Input placeholder="Insert Comment" />
        <Button type="primary" icon={<SendOutlined/>}>Submit</Button>
      </Space.Compact>
    </Flex>
  );
};
