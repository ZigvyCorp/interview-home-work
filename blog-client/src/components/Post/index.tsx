import { Card, Col, Space, Typography } from "antd";
import TagList from "@Components/TagList";
import { toDate } from "@/utils/toDate";

import s from "./style.module.scss";
import CommentList from "../CommentList";

interface IPost {
  owner: number;
  title: string;
  content: string;
  created_at: number;
  tags: string[];
}

export function Post({ owner, title, content, created_at, tags }: IPost) {
  return (
    <Col offset={6} span={12}>
      <Card
        title={title}
        style={{ width: "100%", marginTop: 10, marginBottom: 15 }}
        headStyle={{ textAlign: "center", fontSize: 24 }}
      >
        <Space direction="horizontal" className={s.post_detail}>
          <Space direction="vertical">
            <Typography>Author: {owner}</Typography>
            <Typography>Create at: {toDate(created_at)}</Typography>
          </Space>
          <TagList tagList={tags || []} />
        </Space>

        <Typography>{content}</Typography>
        <CommentList />
      </Card>
    </Col>
  );
}
