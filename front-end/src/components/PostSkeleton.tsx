import { Skeleton } from 'antd';

const PostSkeleton: React.FC = () => {
    return (
        <div className="px-[16px] pt-[12px] rounded-md my-2 mx-auto bg-[#242526] w-[90%] md:w-4/5 max-w-[1200px]">
            <Skeleton avatar paragraph={{ rows: 4 }} />
        </div>
    );
};

export default PostSkeleton;
