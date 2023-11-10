import { TagItem } from "@/models";

export const Tag = ({ color, name }: TagItem) => {
  return (
    <span
      className="badge m-1"
      style={{
        backgroundColor: color,
      }}
    >
      {name}
    </span>
  );
};
