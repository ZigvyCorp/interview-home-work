import { Flex, Tag, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getPost } from '../../redux/actions/postDetailAction';
import { useEffect } from 'react';
import { timeConverter } from '../../utils/DatetimeUtil';
import { randomArrayValue } from '../../utils/ArrayUtils';
import { getPresetColors } from '../../utils/CommonUtil';
import LineBreak from '../../components/LineBreak';
import CommentContainer from '../../components/PostDetail/CommentContainer';

const { Title } = Typography;
const PostDetail = () => {
    let { id } = useParams();

    console.log(id);

    const dispatch = useDispatch();
    const { data } = useAppSelector((state) => state.postDetail);

    const fetchData = () => {
        dispatch(getPost(Number(id)));
    }

    const getTotalCommentRender = (total: number): string => {
        if (total <= 1) {
            return `${total} comment`
        }
        return `${total} comments`
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='w-full mt-12'>
            <Flex justify='space-between'>
                <div className='basis-4/5'>
                    <div>
                        <Title level={2}>{data.title}</Title>
                    </div>
                    <div className='flex'>
                        <p>
                            {timeConverter(data.createdAt)}
                        </p>
                        <span className='mx-2'>|</span>
                        <p>by <span className='font-semibold text-gray-600'>{data.ownerName}</span></p>
                    </div>
                </div>
                <div className='flex flex-wrap justify-end basis-1/5'>
                    {data.tags.map((tag, index) => <Tag key={index} color={randomArrayValue<string>(getPresetColors())} className='self-start my-1'>{tag}</Tag>)}
                </div>
            </Flex>
            <LineBreak className='my-4' />
            <div>
                <p className='text-justify'>{data.content}</p>
            </div>
            <CommentContainer comments={data.comments} />
        </div>
    )
}

export default PostDetail