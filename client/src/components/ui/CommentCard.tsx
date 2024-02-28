import { IComment } from "src/interfaces/comment.interface";

type Props = {
    comment: IComment;
};

const CommentCard = ({ comment }: Props) => {
    const date = new Date(comment.created_at as string);
    return (
        <div className="flex px-[24px] mb-[40px]">
            <section className=" w-[80px]">
                <div className="relative rounded-full w-[60px] h-[60px]">
                    <img
                        src="https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg"
                        alt=""
                        className=" rounded-full w-full h-full"
                    />
                </div>
            </section>
            <div className="">
                <section className="flex items-center justify-start ">
                    <h3 className="text-[#5f5f5f] font-medium text-[20px] mr-[20px] h-[30px] ">
                        {comment.name}
                    </h3>
                    <h3 className="text-[#b9b8b8] text-[17px] block h-[30px] mt-1 ">
                        {date.toDateString()}
                    </h3>
                </section>
                <p className="mt-[8px] mb-[14px] text-[#424242]">
                    {comment.body}
                </p>
                <span className="text-[20px] text-[#5f5f5f] font-medium">
                    Reply to
                </span>
            </div>
        </div>
    );
};

export default CommentCard;
