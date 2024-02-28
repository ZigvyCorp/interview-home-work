import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { IComment } from "src/interfaces/comment.interface";
import CommentCard from "./CommentCard";

type Props = {
    comments: IComment[];
};

const CollapseComment = ({ comments }: Props) => {
    const len = comments.length;
    const text = (
        <div>
            <div className="h-[1px] w-full bg-gray-600 mb-[20px]"></div>
            {comments.map((comment: IComment, index: number) => {
                return <CommentCard key={index} comment={comment} />;
            })}
        </div>
    );
    const items: CollapseProps["items"] = [
        {
            key: "1",
            label: `${len} replies`,
            children: text,
        },
    ];
    return (
        <Collapse
            style={{ backgroundColor: "transparent" }}
            items={items}
            bordered={false}
            className="text-[20px] text-[#A0A0A0] mb-[50px] "
        />
    );
};

export default CollapseComment;
