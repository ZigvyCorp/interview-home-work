import { Avatar } from "antd"
import { CommentResponse } from "../../../interfaces/response/CommentResponse"
import { getRangeTime } from "../../../utils/DatetimeUtil"
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons"
import clsx from "clsx"

interface SingleCommentProps {
    index: number;
    data: CommentResponse;
    size: number;
}

const SingleComment: React.FC<SingleCommentProps> = (props) => {

    const { index, data, size } = props;

    return (
        <div className={clsx("flex", {'mb-4': index !== size - 1})}>
            <div className="mr-4">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </div>
            <div>
                <div>
                    <span className="font-bold text-gray-700">{data.ownerName}</span>
                    <span className="text-[12px] ml-3 text-gray-400">{getRangeTime(data.createdAt)}</span>
                </div>
                <div className="my-2">
                    <p>{data.content}</p>
                </div>
                <div>
                    <span className='font-semibold text-gray-500 cursor-pointer hover:text-primary'>Reply to</span>
                </div>
            </div>
        </div>
    )
}

export default SingleComment