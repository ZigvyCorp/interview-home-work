import { Tag } from "antd";

interface ITagItem {
  text: string;
  color: string;
}

export default function TagItem({ text, color }: ITagItem) {
  return <Tag color={color}>{text}</Tag>;
}
