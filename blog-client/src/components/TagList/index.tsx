import { Space } from "antd";
import TagItem from "./TagItem";

interface ITagList {
  tagList: string[];
}

export const color = [
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
];

export default function TagList({ tagList }: ITagList): React.ReactElement {
  return (
    <Space size={[0, 8]} wrap>
      {tagList?.map((tag, i) => (
        <TagItem text={tag} color={color[i % color.length]} />
      ))}
    </Space>
  );
}
