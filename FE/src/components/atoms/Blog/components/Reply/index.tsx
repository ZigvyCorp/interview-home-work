import { ReplyItem } from "@/models";
import "./styles.css";
import { CircleImage } from "@/components/atoms/CircleImage";
import { formatRelativeTime } from "@/utils";
import { Text } from "@/components/atoms";
export const Reply = ({ content, createdAt, imageUrl, name }: ReplyItem) => {
  return (
    <div className="d-flex replyContainer border p-2">
      <CircleImage src={imageUrl} />
      <div className="replyText">
        <div className="d-flex align-items-center">
          <div>{name}</div>
          <div className="ml-2">
            <Text variant="s">{formatRelativeTime(createdAt)}</Text>
          </div>
        </div>
        <div className="replyContent">{content}</div>
        <div className="btn btn-light mt-1">Reply To</div>

      </div>
    </div>
  );
};
